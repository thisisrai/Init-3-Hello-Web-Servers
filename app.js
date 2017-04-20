const express = require('express')
const marked = require('marked')
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()


// *****For public view files e.i. css****
app.set('view engine', 'pug')
app.set('views', 'views')
app.use(bodyParser.text())
app.use(express.static(path.join(__dirname, 'public')))

// For save button


app.get('/', function(request, response){
  response.render('index')
})

app.post('/save', function(request, response){
  console.log('we got', request.body);
  let writeStream = fs.createWriteStream('data/markdown.md')
  writeStream.write(request.body)
  writeStream.end()
  response.send('we posted!')
})

app.get('/load', function(request,response){
  let str = ''
  let readStream = fs.createReadStream('data/markdown.md')
  readStream.on('data', function(chunk){
    str += chunk
  }).on('end', function(){
    response.send(str)
  })
})


app.listen(3000)
