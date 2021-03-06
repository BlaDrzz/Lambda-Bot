const R = require("ramda");

const {
    simpleEmbed
} = require("../utility.js");

module.exports = {
    name: 'choose',
    match: /^(choose)\ (.+)/gi,
    usage: 'choose option1,option2,...',
    help: 'Simply seperate your possible options using commas and you\'ll get back one of them! Good luck!',
    description: 'For those occasions where you can\'t make a simple decision on your own..',
    run: async({
        message,
        matches
    }) => {
        const items = options.split(',').map(R.trim);
        const result = items[Math.floor(Math.random() * items.length)];

        const embed = simpleEmbed(`Choose`)
            .addField("Chose", chooseOption(result));

        message.channel.send({
            embed
        }); // Call chooseOption with param matches[2]
    }
};
