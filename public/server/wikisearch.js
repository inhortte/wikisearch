import MongoClient from 'mongodb'
import express from 'express'
import bodyParser from 'body-parser'
const io = require('socket.io-client')('http://localhost:9187')

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

// io.on('sendDiv', data => {
//   console.log('received: ' + data.div)
// })
// io.emit('setCats', { cats: ['helium', 'argon', 'neon', 'xenon', 'radon'] })
// io.emit('addCats', { div: '<h1>I am a leper</h1>' })

MongoClient.connect('mongodb://127.0.0.1:27017/wikitest', (err, db) => {
  if(err) throw err;

  const getCategories = (db, collName, text, limit, cb) => {
    console.log('getCategories: ' + collName + ' -- ' + text + ' -- ' + limit)
    let categories = {}
    db.collection(collName, (err, coll) => {
      if(err) throw err
      let cursor = coll.find({allText: {$regex: text, $options: 'i'}}, {categories: 1}).limit(limit)
      console.log('cursor defined')
      cursor.each((err, data) => {
        if(data !== null) {
          if(err) throw err
          let cats = data['categories']
          console.log('data cat length ' + cats.length)
          cats.forEach(cat => {
            if(categories[cat] === undefined) {
              categories[cat] = 1
            } else {
              categories[cat] = categories[cat] + 1
            }
          })
          if(Object.keys(categories).length > limit * 10) {
            cursor.close(() => {
              console.log('cursor closed.....')
              cb(categories)
            })
          }
        } else {
          cb(categories)
        }
      })
    })
  }

  app.post('/', (req, res) => {
    console.log(req.body);
    getCategories(db, 'wiki', req.body.leprosy, 1000, categories => {
      console.log('Number of deaths: ' + Object.keys(categories).length);
      res.end(JSON.stringify({
        leprosy: Object.keys(categories).sort((a, b) => {
          return categories[b] - categories[a]
        }).map((cat) => {
          return cat + ' (' + categories[cat] + ')'
        })
      }));
    })
  });

  app.use(express.static('public'));

  app.listen(3000, function() {
    console.log('DEATH on port 3000.');
  });
});
