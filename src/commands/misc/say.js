
const { Message } = require('discord.js');
const Client = require('../../classes/Unicron');
const BaseCommand = require('../../classes/BaseCommand');

module.exports = class extends BaseCommand {
    constructor() {
        super({
            config: {
                name: 'say',
                description: 'say commands',
                permission: 'User',
            },
            options: {
                aliases: [],
                clientPermissions: [],
                cooldown: 10,
                nsfwCommand: false,
                args: true,
                usage: 'say <...Text>',
                donatorOnly: false,
                premiumServer: false,
            }
        });
    }
    /**
     * @returns {Promise<Message|boolean>}
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array<string>} args 
     */
    async run(client, message, args) {
        return message.channel.send((args.join(' '), ``+ args[0]));
    }
}