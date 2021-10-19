const express = require('express');
const router = express.Router();

const sampledata = [
    { id: 1, name: 'Thor' },
    { id: 2, name: 'Hulk' },
    { id: 3, name: 'Thanos' }
];

router.get('/', (req, res) => {
    res.send(sampledata);
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('OK');
});


module.exports = router;