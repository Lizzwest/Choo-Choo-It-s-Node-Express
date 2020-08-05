const express = require("express")

const app = express()

//tell 
app.set('view engine', 'ejs')



app.get('/about', function(req, res) {
    //res.sendFile(__dirname+'/views/about.html')
    res.render('about', {fave: ["kittens", "muical theater", "books"]})
  });
app.get('/', function(req, res) {
    //res.sendFile(__dirname+'/views/index.html');
    //ejs file with this name
    res.render('index',{name: "Marcia", age: 36} )
  });
  

  app.get("/blog", (req, res)=>{
   // res.sendFile(__dirname+'/views/blog-directory.html')
   res.render('blog-directory')
})



app.listen(8080, ()=>{
    console.log("Chugga chugga chugga chugga")
})
