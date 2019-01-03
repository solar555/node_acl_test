var express = require('express');
var app=express();

// 加载hbs模块
var hbs = require('hbs');
// 指定模板后缀名为html
app.set('view engine', 'html');
// 运行hbs模块
app.engine('html', hbs.__express);

app.use(express.static(path.join(__dirname, 'public')));
var routes = require('./routes')(app);

app.listen(8080);