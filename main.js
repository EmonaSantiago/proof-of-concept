const { Router } = require('express');
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express(); 
const url = "https://weloveweb.api.fdnd.nl/v1/session"

app.use(express.static('public'));

// set the view engine to ejs
app.set('view engome', 'ejs');
app.set('views', 'public/views');
app.set('view engine', 'ejs');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('');



app.get('/', (request, response) => {
  fetchJson(url).then(function (jsonData) {
    response.render('index', {
      sessions: jsonData.data,
    })
  })
})

// Fetch
async function fetchJson(url, postData = {}) {
  return await fetch(url, postData)
    .then((response) => response.json())
    .catch((error) => error)
}


app.listen(process.env.PORT || 3000, () => console.log("App avaiable on http://localhost:3000"))
