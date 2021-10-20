const express = require('express');
const config = require('config');
const slackRouterDebug = require('debug')('slackrouterdebug');
const router = express.Router();
const { findUserId } = require('./../lib/slackActions');

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

router.post('/gcal/isCustomerMeeting', (req, res) => {
    if (sampleGCalRequest && sampleGCalRequest.isCustomerMeeting) {
        slackRouterDebug(`${sampleGCalRequest}`);
        findUserId(sampleGCalRequest.userEmail, config.get('customerMeetingTag'), res);
    }
});

module.exports = router;
