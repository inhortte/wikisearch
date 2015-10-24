'use strict';

let mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://127.0.0.1/wikitest', function(err, db) {
  db.collection('wiki', function(err, coll) {
    let i = 0;
    coll.find({}, {_id: 1, text: 1}).each(function(err, obj) {
      console.log(JSON.stringify(Object.keys(obj['text'])));
      // console.log();
      if(i > 5) {
        process.exit(0);
      }
      i++;
    });
  });
});
