const express = require('express');
const config = require('config');
const router = express.Router();
const { app } = require('./../lib/slackAuth');

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
    postMessage(req.body, res);
    res.send('OK');
});

const postMessage = async (messagebody, res) => {
    try {
        const result = await app.client.chat.postMessage({
            token: config.get('slackBotCredentials.botToken'),
            channel: config.get('channelId'),
            text: messagebody
        });
    }
    catch (error) {
        console.error(error);
    }
};

module.exports = router;