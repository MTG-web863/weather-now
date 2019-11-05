const express = require('express');
const bodyParser = require('body-parser');

const app = express();

 // setting view engine
 app.set('view engine', 'ejs');

 // middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:false}));
 /*
    ROUTES
 */
 
 // GET /
app.get('/', function (req, res) {
  res.render('home.ejs',{weather: null });
});

app.post('/', function(req,res)
 {console.log(req,body,city);
  let weatherNow = "The weather in " + req.body.city +"is 70 C";
  let err = false;
  res.render('home.ejs',{weather: weatherNow, error: err});
});

app.listen(3000, function() {
  console.log('Hello There!')
});