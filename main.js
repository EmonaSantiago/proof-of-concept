// console.log("HEY EMONA")

const express = require("express");
const app = express();

app.use(express.static('public'));

app.set('view engome', 'ejs');
app.set('views', 'public/views');

 app.get("/", (req, res) => {

   res.render('index');

 });

 app.listen(process.env.PORT || 3000, () => console.log("App avaiable on http://localhost:3000"))