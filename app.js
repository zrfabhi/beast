const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 80;
var bodyParser = require('body-parser');


// Put these statements before you define any routes.
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.post('/', (req, res) => {
    console.log(req.body.password)
    if(req.body.password == "cutie"){
        res.sendFile(path.join(__dirname, 'public/zrf.html'))
    }
    else{
     
        res.sendFile(path.join(__dirname, 'public/index.html'))
    }
})

app.listen(port , ()=>{
    console.log('listening on port' ,port);
})
