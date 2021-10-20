const config = require('config');
const { easyDeskPushUps } = require('./../lib/mockUI/easyDeskPushUps');
const { app } = require('./../lib/slackAuth');
const { customerMeetingBlock } = require('./../lib/mockUI/customerMeeting');
let postMessage = async (channelId, message, response) => {
    try {
        let uiBlock = '';
        switch (message) {
            case config.get('customerMeetingTag'):
                uiBlock = customerMeetingBlock;
                break;
            default:
                uiBlock = easyDeskPushUps;
        }
        const result = await app.client.chat.postMessage({
            token: config.get('slackBotCredentials.botToken'),
            channel: channelId,
            blocks: uiBlock
        });
        response.send('OK');
    }
    catch (error) {
        //POC only happy path
        response.send('OK');
    }
};

module.exports.findUserId = async (userEmail, message, response) => {
    try {
        let userId = await app.client.users.lookupByEmail({
            token: config.get('slackBotCredentials.botToken'),
            email: userEmail
        });
        postMessage(userId.user.enterprise_user.id, message, response);
    }
    catch (error) {
        //POC only happy path
        response.send('OK');
    }
};