const express = require('express');
const app = express();
 app.set('view engine', 'ejs');

 // middleware
 app.use(express.static('./public'));

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