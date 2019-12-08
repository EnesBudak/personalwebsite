const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

mongoose.connect("mongodb+srv://dbEnes:21211986@cluster0-rlhmq.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology: true, useNewUrlParser: true})
.catch(err =>{
    console.log(err);
});
    



// mongoose schema

const PostSchema = mongoose.Schema({
    title:String,
    content:String,
    author:String,
    timestamp:String
});

const PostModel = mongoose.model("post" , PostSchema);
// middleware
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.post("/api/post/new",(req,res) =>{
  let payload = {
      title:req.body.title,
      content:req.body.content,
      author:req.body.author,
      timestamp:new Date().getTime()

  };

  let newPost = new PostModel(payload);
  newPost.save((err,result) =>{
      if(err) res.send({success:false,msg:err});
      res.send({success:true,result:result})
  
  });
});


app.get("/api/posts/all",(req,res,) =>{
    PostModel.find((err,result) =>{
        if(err) res.send({success:false,msg:err});
        res.send({success:true,result:result});
    });

});


app.post("/api/post/update",(req,res) => {
    let id = req.body._id;
    let payload = req.body;
    console.log(req.body);
    
    PostModel.findByIdAndUpdate(id,payload,(err,result) =>{
        if(err) res.send({success:false,msg:err});
        res.send({success:true,result:result});
    });

});

app.post("/api/post/remove", (req,res) =>{
    let id = req.body._id;
    PostModel.findById(id).remove((err,result) =>{
        if(err) res.send({success:false,msg:err});
        res.send({succes:true,result:result});
    })
});
app.listen(process.env.PORT || 3000,err => {
    if(err) console.log(err);
    console.log('Server çalıştı %s',3000 || process.env.PORT);
    
})
