// console.log("HEY EMONA")

const express = require("express");
const { readFile } = require('fs');
const app = express();

app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));
app.use("/views", express.static('./views/'));
 
app.set('view engine', 'ejs')
app.set('views', './views')

 app.get("/", (Request,Response) => {

    readFile("./index.ejs", "utf8", (err, html) => {

       if (err) {
           Response.status(500).send("Sorry, out of order")
       }

       Response.send(html);

    })


 });

 app.listen(process.env.PORT || 3000, () => console.log("App avaiable on http://localhost:3000"))