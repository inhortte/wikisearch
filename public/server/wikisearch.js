import MongoClient from 'mongodb'
import express from 'express'
import bodyParser from 'body-parser'

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

MongoClient.connect('mongodb://127.0.0.1:27017/wikitest', (err, db) => {
  if(err) throw err;

  app.post('/', (req, res) => {
    console.log(req.body);
    let categories = {}
    db.collection('wiki', (err, coll) => {
      if(err) throw err;
      let cursor = coll.find({allText: {$regex: req.body.leprosy, $options: 'i'}}, {categories: 1}).limit(100);
      cursor.each((err, data) => {
        if(data !== null) {
          if(err) throw err;
          let cats = data['categories']
          cats.forEach(cat => {
            if(categories[cat] === undefined) {
              categories[cat] = 1
            } else {
              categories[cat] = categories[cat] + 1
            }
          })
          // categories = categories.concat(data['categories']);

          if(Object.keys(categories).length > 1000) {
            cursor.close(function() {
              console.log('cursor closed');
            });
          }
        } else {
          console.log('Number of deaths: ' + Object.keys(categories).length);
          res.end(JSON.stringify({
            leprosy: Object.keys(categories).sort((a, b) => {
              return categories[b] - categories[a]
            }).map((cat) => {
              return cat + ' (' + categories[cat] + ')'
            })
          }));
        }
      });
    });
  });

  app.use(express.static('public'));

  app.listen(3000, function() {
    console.log('DEATH on port 3000.');
  });
});
