var express = require('express');
var router = express.Router();

const moment = require('moment');
let data = require('../trips.json')

router.get('/', (req, res) => {
    let travel = data.find(trajet => trajet.departure === req.body.departure)

    res.json({ travel })
});

module.exports = router