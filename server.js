const express = require ('express')
const app = express()





let Time = new Date().getHours();

app.get('/', function(req, res) {
  if ( (Time>8)&&(Time<17) ) res.sendFile(__dirname + '/public/home.html');
  else res.send('our office is not open yet');
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/home.html');
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/public/contact.html');
})

app.get('/ourservices',(req,res)=>{
    res.sendFile(__dirname + '/public/ourservices.html');
})
// app.use(express.static(_dirname + "/public" ))
app.listen(5000,(err)=>{
    if(err)throw (err);
    else{console.log('server is runing on port 3000')}
})