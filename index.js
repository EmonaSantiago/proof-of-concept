// console.log('hello emona')

const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get('/', (request, response) => {

    readFile('./index.ejs', 'utf8', (err, html) => {

        if (err){
            response.status(500).send('sorry,out of order')
        }

        response.send(html);
    })


});

app.listen(process.env.PORT || 1212, () => console.log('App avaiable on http://localhost:1212'))