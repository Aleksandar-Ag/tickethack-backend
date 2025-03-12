const Trajet = require('../models/trajets')

var express = require('express');
var router = express.Router();

const moment = require('moment');

router.post('/', (req, res) => {
    // Renvoie une erreur s'il y a un champ manquant
    /*if (!req.body.departure || !req.body.arrival || !req.body.date) {
        res.json({ error: "No trip found" });
        return;
    }*/

    function dateFormatted(jour) {
        return moment(jour).format('DD/MM/YYYY')
    }
    const date = new Date(day)
    const formattedDate = dateFormatted(date)
    Trajet.updateMany({}, {date: formattedDate}).then(data => {
        console.log(data)
    })
    
    // /POST /trips pour trouver tous les trajets avec le départ et l'arrivée
    /*Trajet.find({ departure: req.body.departure, arrival: req.body.arrival })
        .then(data => {
            res.json({ data })
        })*/
});

module.exports = router