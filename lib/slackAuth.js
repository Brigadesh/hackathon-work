const config = require('config');
const { App } = require("@slack/bolt");

module.exports.app = new App({
    token: config.get('slackBotCredentials.botToken'),
    signingSecret: config.get('slackBotCredentials.signSecret')
});
