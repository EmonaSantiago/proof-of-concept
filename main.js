const { Router } = require('express');
const path = require('path')
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express(); 
const url = "https://weloveweb.api.fdnd.nl/v1/session"

app.use(express.static('public'));

// set the view engine to ejs
app.set('views', path.join(__dirname + "/views"));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (request, response) => {
  fetchJson(url).then(function (jsonData) {
    response.render('index', {
      sessions: jsonData.data,
    })
  })
})

app.get('/detail', (request, response) => {
  
    response.render('detail')
    
})


// Fetch
async function fetchJson(url, postData = {}) {
  return await fetch(url, postData)
    .then((response) => response.json())
    .catch((error) => error)
}


app.listen(process.env.PORT || 3000, () => console.log("App avaiable on http://localhost:3000"))
