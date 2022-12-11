var express=require('express');
var exphbs=require('express-handlebars');
var path=require('path');

var app=express();

// Initial setup
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', exphbs.create({
    defaultLayout: 'main',
    layoutsDir: app.get('views') + '/layouts'
}).engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

// Webpages and server responses
app.get('/',function(req,res){
    res.render('index');
});

app.get('/contact',function(req,res){
    res.render('contact');
});

app.get('/wellness',function(req,res){
    res.render('wellness');
});

app.get('/privacy',function(req,res){
    res.render('privacy');
});

// On startup, display this.
app.listen('3000',function(){
    console.log('Website is online at port ' + 3000);
});
