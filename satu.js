const express = require('express');
const app = express();

// Konfigurasi View Engine
app.set('view engine', 'ejs')

// Serve Static Files
app.use('/assets',express.static('assets'));

// Serving default route localhost:3000/
// Serving File HTML
app.get('/', function(req, res){
    res.sendFile(__dirname + '/satu.html')
});

// Serving ejs route localhost:3000/ejs/:nama/:umur
// Serving file ejs
app.get('/ejs/:nama/:umur', (req,res) => {
    let people = ["andi", "budi", "caca"];
    let orange = {
        nama: req.params.nama,
        umur: req.params.umur,
        people
    }
    res.render('satu',{orang: orange});
});

// Serving html route localhost:3000/html1
// ES6 styles
app.get('/html1', (req,res) => {
    res.send("<h1>Hello World</h1>")
});

// Serving json, route localhost:3000/json1
app.get('/json1', (req, res) => {
    res.json({
        "name": "Andi"
    });
});

// dynamic url, route localhost:3000/id/:idnya 
// ex: localhost:3000/id/123
app.get('/id/:uid', (req, res) => {
    console.log(req.params)
    res.send("Request ID =>" + req.params.uid);
});

app.listen(3000);