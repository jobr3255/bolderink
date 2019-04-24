const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/src");

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.use(express.static(path.join(__dirname, 'src/css')));
app.listen(process.env.port || 5000);

console.log('Running at Port 5000');
