var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.static("img"));

app.get('/',function(req,res){
  res.render('main.ejs')
})

app.get('/RSP',function(req,res){
  res.render('rocksipaper.ejs')
})

app.get('/MJP',function(req,res){
  res.render('mookjibba.ejs')
})

app.get('/MJP2',function(req,res){
   res.render('mjp2.ejs')
})
app.listen(3000);