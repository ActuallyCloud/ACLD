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

// Webpages.
app.get('/',function(req,res){
    res.render('index');
});

app.get('/contact',function(req,res){
    res.render('contact');
});

app.get('/server',function(req,res){
    res.render('server');
});

app.get('/wellness',function(req,res){
    res.render('wellness');
});

app.get('/privacy',function(req,res){
    res.render('privacy');
});

// External links. These can be changed here and update globally.
app.get('/ext/github', function(req,res){
    res.redirect('https://github.com/ActuallyCloud');
});

app.get('/ext/discord', function(req,res){
    res.redirect('https://discord.com/invite/JQu5k4W6pT');
});

app.get('/ext/email', function(req,res){
    res.redirect('mailto:dev@acld.me');
});

// On startup, display this.
app.listen('3000',function(){
    console.log('Website is online');
});
