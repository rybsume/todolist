//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let newItem = [];

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  let today = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  let day = today.toLocaleDateString('pl-PL',options)
  res.render('list', {
    dayName: day,
    newItem: newItem
  });
});

app.post('/', (req, res) =>{
  newItem.push(req.body.newItem);
  res.redirect('/')
})

app.listen(3000, function () {
  console.log('Server started on port 3000.');
});