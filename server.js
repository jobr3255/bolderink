const express = require("express")
const path = require("path")
const routes = require('./routes')

const app = express()
// Set the default views directory to html folder
app.set('views', path.join(__dirname, 'html'))

var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/html");

// Set the folder for css & java scripts
app.use(express.static(path.join(__dirname,'css')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'vendor')));

// Set the view engine to ejs
app.set('view engine', 'ejs')

app.use('/', routes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
