// console.log("HEY EMONA")

const express = require("express");
const { readFile } = require('fs');
const app = express();

 app.get("/", (Request,Response) => {

    readFile("./index.ejs", "utf8", (err, html) => {

       if (err) {
           response.status(500).send("Sorry, out of order")
       }

       response.send(html);

    })


 });

 app.listen(process.env.PORT || 3000, () => console.log("App avaiable on http://localhost:3000"))