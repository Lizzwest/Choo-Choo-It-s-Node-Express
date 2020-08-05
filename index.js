const express = require("express")

const app = express()

app.get('/about', function(req, res) {
    res.sendFile(__dirname+'/views/about.html')
  });
app.get('/', function(req, res) {
    res.sendFile(__dirname+'/views/index.html');
  });
  

  app.get("/blog", (req, res)=>{
    res.sendFile(__dirname+'/views/blog-directory.html')
})



app.listen(8080, ()=>{
    console.log("Chugga chugga chugga chugga")
})
