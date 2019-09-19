const express = require('express');
const app = express();
const routes = require("./app/routing/htmlRoutes.js");
const data = require('./app/routing/apiRoutes.js');
var bodyParser = require('body-parser')
const path = require('path');
var allFriends = require(path.join(__dirname, './app/data/friends.js'))


var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json(data));

app.use(express.static(path.join(__dirname, 'app/public')));

app.use('/api', data)

app.use('/', routes)

// app.post("/api/friends", function (req, res) {
//     allFriends.push(req.body);
//     res.json();
// });






app.listen(PORT, () => console.log(`Listening on Port ${PORT}!`))

