// The ACLD website and server that hosts it. Developed and maintained by Aura.

// Initial setup
var express=require('express');
var exphbs=require('express-handlebars');
var path=require('path');
var app=express();

app.set('views', path.join(__dirname, 'views'));

// Setting port number. Website runs at default port 80 for HTTP traffic.
const webport = 80;

app.engine('handlebars', exphbs.create({
    defaultLayout: 'main',
    layoutsDir: app.get('views') + '/layouts'
}).engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

// This section controls rendering of webpages. This website has four pages.
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

// This section controls external links. The reason they are done this way is that one update here can make the link update across the whole site.
app.get('/ext/github', function(req,res){ // My GitHub profile
    res.redirect('https://github.com/ActuallyCloud');
});

app.get('/ext/discord', function(req,res){ // The Cloud Support discord server.
    res.redirect('https://discord.com/invite/JQu5k4W6pT');
});

app.get('/ext/email', function(req,res){ // Opens an email to dev@acld.me, my email.
    res.redirect('mailto:dev@acld.me');
});

app.get('/ext/wellnessadd', function(req,res){ // Adds Wellness to any server.
    res.redirect('https://discord.com/api/oauth2/authorize?client_id=580904388911169537&permissions=18432&scope=applications.commands%20bot');
});

app.get('/ext/telepathyadd', function(req,res){ // Adds Telepathy (unreleased bot) to any server.
    res.redirect('https://discord.com/invite/');
});

// On startup, display this when all is well.
app.listen(webport,function(){
    console.log('Website is online at port ' + webport);
});
