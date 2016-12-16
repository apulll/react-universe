require('babel-register')(
  {
    presets:['react']
  }
)
var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname,'dist')))
app.use(require('./routes/index.jsx'))


var PORT = 3004;
app.listen(PORT,function(){
  console.log('http://localhost:',PORT)
})
