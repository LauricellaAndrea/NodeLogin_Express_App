//dentro questo file creerò percorsi diversi di questo progetto

var express = require("express") //richiede il modulo express
var router = express.Router();   //per creare il router all'interno di questo file, sotto inserirò i diversi percorsi

const credential = {
    email: "admin@gmail.com",
    password: "admin123"
}

//login users
router.post('/login', (req, res) =>{
//all'interno di questo percorso controllerà semplicemente l'input dell'utente, e renderizzeremo l'utente su questo percorso
if (req.body.email == credential.email && req.body.password == credential.password){
    req.session.user = req.body.email;
    // req.redirect('/dashboard')
    res.end("Login effettuato con successo ")
}else{
    res.end("Credenziali NON VALIDE")
}
});


module.exports = router;