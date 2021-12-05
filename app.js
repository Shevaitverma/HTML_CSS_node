//imoprt express
const express = require('express');
const app = express();
const port = 3000;

// static files 
app.use(express.static('public'));
app.use('/css', express.static(__dirname +'/Public/css'));
app.use('/js', express.static(__dirname +'/Public/js'));
app.use('/img', express.static(__dirname +'/Public/img'));

// set views 
app.set('views','./view');
app.set('view engine', 'ejs');


// for using below code rename index.ejs to .html ext type...
// app.get('/',(req,res) => {
//     res.sendFile(__dirname + '/view/index.html');
// })

app.get('/',(req,res) => {
    res.render('index');
})


//listen on port 3000
app.listen(port,() => console.info(`listening on port ${port}`));

