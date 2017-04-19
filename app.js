const express = require('express')
const marked = require('marked')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()


// *****For public view files e.i. css****
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: false }) )
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(request, response){

  response.render('index')
})

app.post('/markdown', function( request, response ) {
  let myMarkdown  = request.body.markdown
  console.log(request.body);
  let markdown = marked(myMarkdown)

  response.render('index', {markdown})
})


app.listen(3000)

// let markdownString = $(document).getElementById("text-input").value;
//
// marked(markdownString, function (err, content) {
//   if (err) throw err;
//   console.log(content);
// });
