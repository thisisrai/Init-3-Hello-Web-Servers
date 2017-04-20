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
  fs.readdir('data', function(err, files) {
    console.log('files', files)
    response.render('index', { files: files })
  })
})

app.post('/save', function(request, response){
  console.log('we got', request.body);
  body = JSON.parse(request.body)
  let writeStream = fs.createWriteStream('data'+body.file)
  console.log('text', body.text)
  writeStream.write(body.text)
  writeStream.end()
  response.send('we posted!')
})

//new file attempt:
app.post('/newfile', function(request, response){
  console.log('we got', request.body);
  let writeStream = fs.createWriteStream('data/' + request.body + '.md')
  writeStream.write(request.body)
  writeStream.end()
  response.send('we posted!')
})

// Trial stuff
app.get('/:newfile', function(request,response){
  let str = ''
  let readStream = fs.createReadStream('data/'+request.params.newfile)
  fs.readdir('data', function(err, files) {
    readStream.on('data', function(chunk){
      str += chunk
    }).on('end', function(){
      response.render('index', {files: files, data: str})
    })
  })


})

// app.get('/load', function(request,response){
//   let str = ''
//   let readStream = fs.createReadStream('data/markdown.md')
//   readStream.on('data', function(chunk){
//     str += chunk
//   }).on('end', function(){
//     response.send(str)
//   })
// })

app.get('*', function(request, response){
  console.log(request.url)
})


app.listen(3000)
