const express = require('express');
const config = require('config');
const slackRouterDebug = require('debug')('slackrouterdebug');
const router = express.Router();
const { findUserId } = require('./../lib/slackActions');
const { easyDeskPushUps } = require('./../lib/mockUI/easyDeskPushUps');
const { customerMeetingBlock } = require('./../lib/mockUI/customerMeeting');
const { takeBreakBlock } = require('./../lib/mockUI/takeBreak');

const sampleGCalRequest = {
    numberOfMeeting: 2,
    backToBack: 3,
    isCustomerMeeting: true,
    totalMeetingHours: 8,
    userEmail: 'bchandrasekar@salesforce.com'
}

router.get('/', (req, res) => {
    res.send(sampledata);
});

router.post('/gcal/', (req, res) => {
    switch (req.query.page) {
        case config.get('customerMeetingTag'):
            slackRouterDebug(`Inside isCustomerMeeting Route - ${sampleGCalRequest}`);
            findUserId(req.body.userEmail, customerMeetingBlock, res);
            break;
        case config.get('takeBreakTag'):
            slackRouterDebug(`Inside take a break Route - ${sampleGCalRequest}`);
            findUserId(req.body.userEmail, takeBreakBlock, res);
            break;
        default:
            slackRouterDebug(`Inside default easyDeskPushup Route - ${sampleGCalRequest}`);
            findUserId(req.body.userEmail, easyDeskPushUps, res);
    }
});

module.exports = router;
