const express = require('express')
const marked = require('marked')
const path = require('path')

const app = express()


// *****For public view files e.i. css****
app.set('view engine', 'pug')

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', function(request, response){
  response.render('index')
})
app.listen(3000)

// let markdownString = $(document).getElementById("text-input").value;
//
// marked(markdownString, function (err, content) {
//   if (err) throw err;
//   console.log(content);
// });
