import MongoClient from 'mongodb'
// let mongo = require('mongodb').MongoClient;
import express from 'express'
// let express = require('express');
import bodyParser from 'body-parser'
// let bodyParser = require('body-parser');

let app = express();

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
    let categories = [];
    db.collection('wiki', (err, coll) => {
      if(err) throw err;
      let cursor = coll.find({allText: {$regex: req.body.leprosy, $options: 'i'}}, {categories: 1}).limit(100);
      cursor.each((err, data) => {
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
