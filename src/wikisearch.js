import MongoClient from 'mongodb'
import express from 'express'
import bodyParser from 'body-parser'
import cheerio from 'cheerio'
const io = require('socket.io-client')('http://localhost:9187')

const app = express();
let connectedToJames = false

const mongoHost = '95.211.173.196'

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

io.on('death', () => {
  console.log('Connected to James!')
  connectedToJames = true
})

const wrapHtmlInRootDiv = html => {
  return '<div id="wikiSearchRootDiv">' + html + '</div>'
}

MongoClient.connect('mongodb://' + mongoHost + ':27017/wikitest', (err, db) => {
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

  app.post('/retag', (req, res) => {
    console.log(req.body);
    if(connectedToJames) {
      if(req.body.leprosy !== undefined) {

        // --- same as above (get categories from facets, but 'pass' them to james.js)
        getCategories(db, 'wiki', req.body.leprosy, 1000, categories => {
          let cats = Object.keys(categories).sort((a, b) => {
            return categories[b] - categories[a]
          }).slice(0, 10)
          console.log('setting cats to: ' + JSON.stringify(cats))
          io.emit('setCats', { cats: cats })
          let $ = cheerio.load(wrapHtmlInRootDiv(req.body.html))
          let newHTML = '' // replace this with string-buffer

          /*
             The category server (james.js) emits a catsAdded event to append to transformed html.
             When all is done, completo is sent to the server and the server 'handshakes' back,
             indicating every element has been transformed.
          */
          io.on('catsAdded', data => {
            console.log('adding: ' + data.div)
            newHTML += data.div
          })
          io.on('completo', () => {
            res.end(JSON.stringify({html: newHTML}))
          })

          $('>', '#wikiSearchRootDiv').each((index, el) => {
            io.emit('setSnippet', { snip: $.html(el) })
            io.emit('catsToSnip')
          })
          io.emit('completo')
        })
      } else {
        res.send(JSON.stringify({html: "you must enter a snippet"}))
      }
    } else {
      res.end(JSON.stringify({html: "Not connected to James."}))
    }
  })

  app.use(express.static('public'));

  app.listen(3000, function() {
    console.log('DEATH on port 3000.');
  });
});
