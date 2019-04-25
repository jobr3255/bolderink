const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

var favicon = require('serve-favicon');
// Add favicon
// app.use(favicon(path.join(__dirname, 'src/assets/images', 'favicon.png')));
app.use(favicon(path.join(__dirname,'src', 'images','favicon.png')));

var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/src");

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);

// Add css path
app.use(express.static(path.join(__dirname, 'src', 'css')));

// Add images folder path
app.use(express.static(path.join(__dirname, 'src', 'images')));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
