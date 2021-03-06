const { createArgs } = require("../modules.js");
const { reportError } = require("../utility.js");

module.exports = {
    name: 'purge',
    match: /^(purge)\ *([0-9])*$/gi,
    usage: 'purge [messages]',
    permissionLevel: 100,
    run: async ({message, matches, bot}) => {
        const args = createArgs(message);

        const purgeAmount = parseInt(args[1], 10) || 5;

        const messages = await message.channel.fetchMessages({
            limit: purgeAmount
        });

        await message.channel.bulkDelete(messages);
    }
};
