const config = require('config');
const { app } = require('./../lib/slackAuth');
let postMessage = async (channelId, message, response) => {
    try {
        let result = await app.client.chat.postMessage({
            token: config.get('slackBotCredentials.botToken'),
            channel: channelId,
            blocks: message
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