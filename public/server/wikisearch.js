'use strict';

let mongo = require('mongodb').MongoClient;
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));


mongo.connect('mongodb://127.0.0.1:27017/en_wikipedia', function(err, db) {
  if(err) throw err;

  /*
  app.post('/', function(req, res) {
    db.collection('wikipedia', function(err, coll) {
      if(err) throw err;
      coll.find({}, {
        "limit": 1,
        "skip": 3
      }).nextObject(function(err, data) {
        if(err) throw err;
        res.send(data);
        //console.log(JSON.stringify(data['text']['Intro']));
      });
    });
    // res.end("ja");
  });
  */

  app.use(express.static('public'));

  app.listen(3000, function() {
    console.log('DEATH on port 3000.');
  });
});
