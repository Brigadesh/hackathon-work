const express = require('express');
const config = require('config');
const takeAssessmentDebug = require('debug')('takeAssessmentDebug');
const router = express.Router();
const { findUserId } = require('./../lib/slackActions');
const { takeAssessment } = require('./../lib/mockUI/assessment/takeAssessment');

const sampleTakeAssessmentRequest = {
    userEmail: 'bchandrasekar@salesforce.com'
}

router.get('/', (req, res) => {
    res.send(sampleTakeAssessmentRequest);
});

router.post('/', (req, res) => {
    takeAssessmentDebug(`Inside takeAssessment Route - ${sampleTakeAssessmentRequest}`);
    findUserId(req.body.userEmail, takeAssessment, res);
});

module.exports = router;
