
const { Message } = require('discord.js');
const Client = require('../../classes/Unicron');
const BaseCommand = require('../../classes/BaseCommand');

module.exports = class extends BaseCommand {
    constructor() {
        super({
            config: {
                name: 'invite',
                description: 'Invite Your Bot',
                permission: 'User',
            },
            options: {
                aliases: [],
                clientPermissions: ["EMBED_LINKS"],
                cooldown: 10,
                nsfwCommand: false,
                args: true,
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
        return message.channel.send("You must set your bot invite\nFile Located in: src/commands/info/invite.js");
    }
}