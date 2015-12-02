'use strict';

let mongo = require('mongodb').MongoClient;
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));


mongo.connect('mongodb://127.0.0.1:27017/wikitest', function(err, db) {
  if(err) throw err;

  app.post('/', function(req, res) {
    console.log(req.body);
    // res.end(JSON.stringify({leprosy: ["Dead bunny", "Small wrist", "Pancreatic tumor", "Elephant dung"]}));
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
          console.log('Number of deaths: ' + categories.length);
          res.end(JSON.stringify({leprosy: categories.slice(0,100)}));
        }
      });
    });
  });

  app.use(express.static('public'));

  app.listen(3000, function() {
    console.log('DEATH on port 3000.');
  });
});
