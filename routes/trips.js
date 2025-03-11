var express = require('express');
var router = express.Router();

const moment = require('moment');
let data = require('../trips.json')

router.post('/', (req, res) => {
    for (let tr of data) {
        let date = new Date(tr.date.$date)
        let format1 = "DD-MM-YYYY"
        date = moment(date).format(format1)
    }

        

    /*let traj = data.filter(trajet => (trajet.departure === req.body.departure) 
    && (trajet.arrival === req.body.arrival)  )*/
})

module.exports = router