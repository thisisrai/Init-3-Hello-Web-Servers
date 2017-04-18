let express = require('express')
const path = require('path')

let app = express()

// *****For public view files e.i. css****
app.set('view engine', 'pug')

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', function(request, response){
  response.render('index')
})
app.listen(3000)
