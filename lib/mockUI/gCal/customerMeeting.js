module.exports.customerMeetingBlock = [
    {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "*Customer Meeting!* :trophy: \n You have a customer meeting scheduled today, here are some of the tips to ace a customer meeting :down: \n <https://salesforce.vidyard.com/watch/E8AdBgSg9xVC2rUZJ4iZ9j?|How to start your day right!>\n\nClick on the button based on your interest :bwell-astro: \n"
        },
        "accessory": {
            "type": "image",
            "image_url": "https://media.giphy.com/media/eXTue7sCt6ZvG/giphy.gif",
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
                    "text": "Meditate :meditate:",
                    "emoji": true
                },
                "value": "click_me_123"
            },
            {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Workout :workout: ",
                    "emoji": true
                },
                "value": "click_me_123",
                "url": "https://google.com"
            },
            {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Camp B-Well :wellbeing-hq_logo: ",
                    "emoji": true
                },
                "value": "click_me_123",
                "url": "https://google.com"
            }
        ]
    }
];