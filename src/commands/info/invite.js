const Discord = require('discord.js');
const { Message } = require('discord.js');
const Client = require('../../classes/Unicron');
const BaseCommand = require('../../classes/BaseCommand');

module.exports = class extends BaseCommand {
    constructor() {
        super({
            config: {
                name: 'prefix',
                description: 'Shows Unicron\'s prefix for this server.',
                permission: 'User',
            },
            options: {
                cooldown: 3,
                args: false,
                usage: '',
                donatorOnly: false,
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
        const prefix = message.guild.db.settings('prefix');
        return message.channel.send(new Discord.MessageEmbed()
            .setColor(0x00FFFF)
            .setDescription(`You must set your bot invite\nFile Located in: src/commands/info/invite.js`)
            .setDescription(`[text](https://discord.gg/hyDVvu4)`)
        );
    }
}