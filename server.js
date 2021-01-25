//Install express server
const express = require('express');
const path = require('path');

const app = express();

//Serve only the static files from the dist directory
app.use(express.static('./dist/irite'));

app.get('/*',(req,res)=>
    res.sendFile('index.html',{root:'dist/irite/'}),
);

//Start the app by listening on the default Heroku port
app.liten(process.env.PORT || 8080);
