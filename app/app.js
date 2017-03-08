var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL 
var url = 'mongodb://localhost:27017/siteweb';

// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  
  var collection = db.collection('people');
  
  // Find some documents 
  
  
  
  
 




var app = express();
app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');

var nbVisit = 0;

app.use('/',express.static(path.join(__dirname, 'static')));

app.get("/counter",function(req,res,next){
    
    //res.send("<html><body><h1>Your are the "+ nbVisit +" visitor since the program started.</h1></body></html>");
    res.render('counter',{nbVisiteur:nbVisit});
});

app.get("/names",function(req,res,next){
    collection.find({}).toArray(function(err, docs) {
    res.render('people',{people:docs});

  });
    //res.send("<html><body><h1>Your are the "+ nbVisit +" visitor since the program started.</h1></body></html>");
    
});

app.get("/addvisitor/:nbVisitor",function(req,res,next){
    nbVisit = nbVisit + parseInt(req.params.nbVisitor || 1);
    res.send(200);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

  //db.close();
});