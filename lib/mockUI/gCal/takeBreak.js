module.exports.takeBreakBlock = [
    {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "*Take a pause!* :time: \n Looks like you are working like a clock for last 4 hours with back to back meetings, stand for minute or maybe take a walk. Call for a break!"
        },
        "accessory": {
            "type": "image",
            "image_url": "https://media.giphy.com/media/RicRd3dDNQJM3fmkzt/giphy.gif",
            "alt_text": "alt text for image"
        }
    },
    {
        "type": "actions",
        "elements": [
            {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Hit Pause :pause-2:",
                    "emoji": true
                },
                "value": "click_me_123"
            },
            {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Maybe Later :hourglass: ",
                    "emoji": true
                },
                "value": "click_me_123"
            }
        ]
    }
];