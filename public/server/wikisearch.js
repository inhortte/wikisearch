'use strict';

let mongo = require('mongodb').MongoClient;
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));


mongo.connect('mongodb://127.0.0.1:27017/wikitest', function(err, db) {
  if(err) throw err;

  app.post('/', function(req, res) {
    console.log(req.body.leprosy);
    let categories = [];
    db.collection('wiki', function(err, coll) {
      if(err) throw err;
      let cursor = coll.find({allText: {$regex: req.body.leprosy, $options: 'i'}}, {categories: 1}).limit(100);
      cursor.each(function(err, data) {
        if(data !== null) {
          if(err) throw err;
          categories = categories.concat(data['categories']);

          if(categories.length > 100) {
            cursor.close(function() {
              console.log('cursor closed');
            });
          }
        } else {
          // db.close();
          // console.log('\n----------------------CATEGORIES' + JSON.stringify(categories));
          res.end(JSON.stringify(categories.slice(0,100)));
        }
      });
    });
  });

  app.use(express.static('public'));

  app.listen(3000, function() {
    console.log('DEATH on port 3000.');
  });
});
