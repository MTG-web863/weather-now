const express = require('express');
const app = express();
 app.set('view engine', 'ejs');

 /*
    ROUTES
 */
 
 // GET /
app.get('/', function (req, res) {
  res.render('home.ejs');
});
 
app.listen(3000, function(){
    console.log('Hello There!');
});