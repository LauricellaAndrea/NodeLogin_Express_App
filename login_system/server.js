const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");
const session = require("express-session");
const {v4: uuidv4} = require("uuid"); //questo metodo renderà la sessione completamente segreta e unica

const router = require('./router');

const app = express();

const port = process.env.PORT || 3000;
//configura body parser per analizzare il corpo delle richieste come JSON
app.use(bodyparser.json())
// Configura body-parser per analizzare il corpo delle richieste come form-urlencoded
app.use(bodyparser.urlencoded({extended: true}))

// set the view engine to ejs
app.set('view engine', 'ejs');

//1)Caricare risorse statiche per usare css || 2)Caricare risorse statiche per usare l'immagine di background
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

//express-session 
app.use(session({
   secret: uuidv4(), 
   resave: false,
   saveUninitialized: true
}));

//Route
app.use('/route', router); //il middleware aggiungerà tutti questi router dentro server

//home route
app.get('/', (req, res) => {
   res.render('base', {title: "Login System"}) 
})

app.listen(port,()=>{console.log("Listening to the server on http://localhost:3000");})