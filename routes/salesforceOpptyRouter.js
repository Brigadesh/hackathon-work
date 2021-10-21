const express = require('express');
const config = require('config');
const sfOpptyRouterDebug = require('debug')('sfOpptyRouterDebug');
const router = express.Router();
const { findUserId } = require('./../lib/slackActions');
const { caseOverLoad } = require('./../lib/mockUI/sfOppty/caseOverLoad');
const { opptyLost } = require('./../lib/mockUI/sfOppty/opptyLost');
const { opptyWon } = require('./../lib/mockUI/sfOppty/opptyWon');
const { easyDeskPushUps } = require('./../lib/mockUI/easyDeskPushUps');


const sampleOpptyRequest = {
    firstName: 2,
    lastName: 3,
    userEmail: 'bchandrasekar@salesforce.com',
    oppLostMessage: 'Sorry for Losing',
    oppWonMessage: 'Great for winning',
    caseClosedMessageGRT10: true
};

router.get('/', (req, res) => {
    res.send(sampleOpptyRequest);
});

router.post('/', (req, res) => {
    switch (req.query.page) {
        case config.get('opptyLostTag'):
            sfOpptyRouterDebug(`Inside opptyLostTag Route - ${sampleOpptyRequest}`);
            findUserId(req.body.userEmail, opptyLost, res);
            break;
        case config.get('opptyWonTag'):
            sfOpptyRouterDebug(`Inside take a break Route - ${sampleOpptyRequest}`);
            findUserId(req.body.userEmail, opptyWon, res);
            break;
        case config.get('caseOverLoadTag'):
            sfOpptyRouterDebug(`Inside tcaseOverLoad Route - ${sampleOpptyRequest}`);
            findUserId(req.body.userEmail, caseOverLoad, res);
            break;
        default:
            sfOpptyRouterDebug(`Inside default easyDeskPushup Route - ${sampleOpptyRequest}`);
            findUserId(req.body.userEmail, easyDeskPushUps, res);
    }
});

module.exports = router;
