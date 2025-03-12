var express = require('express');
var router = express.Router();

const moment = require('moment');
let data = require('../trips.json')

router.post('/', (req, res) => {
    const trajet = data.filter(traj => (traj.departure === req.body.departure)
    && (traj.arrival === req.body.arrival)
    && (moment(traj.date.$date).format(DD-MM-YYYY) === req.body.date))

    if (!req.body.departure || !req.body.arrival || !req.body.date) {
        res.json({ error: "No trip found" });
        return;
    }

    if (trajet) {
        res.json({ result: trajet });
        return;
    }

});

module.exports = router