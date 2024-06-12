var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var bot_result_viewer = { result: "결과값" };

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('img'));

app.get('/', function(req, res) {
    res.render('main');
});

app.get('/RSP', function(req, res) {
    res.render('rocksipaper');
});

app.get('/MJP', function(req, res) {
    res.render('mookjibba');
});

app.post('/updateResult', function(req, res) {
    bot_result_viewer.result = req.body.result;
    res.sendStatus(200);
});

app.get('/firstmjp',function(req,res){
    res.render('firstmjp');
});

app.get('/MJP2', function(req, res) {
    res.render('mjp2', bot_result_viewer);
});

app.listen(3000, function() {
    console.log('서버가 3000번 포트에서 실행 중입니다');
});
