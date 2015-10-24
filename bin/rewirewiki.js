'use strict';

let mongo = require('mongodb').MongoClient;

mongo.connect(`mongodb://127.0.0.1/wikitest`, function(err, db) {
  db.collection('wiki', function(err, coll) {
    let i = 0;
    coll.find({}, {_id: 1, text: 1}).each(function(err, obj) {
      if(obj === null) {
        process.exit(0);
      }
      let text = '';
      for (let key of Object.keys(obj['text'])) {
        text += key + ' :: ' + obj['text'][key].reduce(function(txt, el) {
          txt += el['text'] + "\n";
          return txt;
        }, '');
      }
      coll.update({_id: obj['_id']}, {$set: {allText: text}});
      // if(i > 100) {
        //process.exit(0);
      //}
      i++;
    });
  });
});
