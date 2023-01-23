const express = require('express')
const app = express();
const port = 80;
var randomWords = require('random-words');
app.use(express.json());
//console.log(randomWords());

app.get('/random', (req,res) =>{
    res.send(console.log(randomWords()));
    //console.log(randomWords());
})


app.get('/helloworld', (req,res) =>{
  res.send('Hello World')
});

app.get('/home', (req,res) =>{
    res.send('ini halaman home')
});

app.get('/sensorpost', (req,res) => {
    //simpan ke database
    var d = req.body;
    console.log(req.body.suhu)
    res.send("Data yang terkirim adalah = " + req.body.suhu);
});

app.post('/sensorpost', (req,res) => {
    //simpan ke database
    var d = req.body;
    console.log(req.body.suhu)
    res.send("Data yang terkirim adalah = " + req.body.suhu);
});

app.listen(port, () => {
    console.log('cli-nodejs-api listening at http://localhost:${port}')
});



