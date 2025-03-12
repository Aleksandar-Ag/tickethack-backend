require('../models/connection');
const Trajet = require('../models/trajets')

var express = require('express');
var router = express.Router();

const moment = require('moment');

router.post('/', (req, res) => {
    // function dateFormatted(jour) {
        
    // }
    const date = new Date(req.body.date)

    if (!req.body.departure || !req.body.arrival || !req.body.date) {
        res.json({ error: "No trip found" });
        return;
    }
    
    if (trajet) {
        res.json({ result: trajet });
        return;
    }
    
    const trajet = data.filter(traj => (traj.departure === req.body.departure)
    && (traj.arrival === req.body.arrival)
    /*&& (moment(traj.date.$date).format(DD-MM-YYYY) === req.body.date)*/)
});

module.exports = router