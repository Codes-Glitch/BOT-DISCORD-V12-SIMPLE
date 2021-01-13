
const { Message } = require('discord.js');
const Client = require('../../classes/Unicron');
const BaseCommand = require('../../classes/BaseCommand');

module.exports = class extends BaseCommand {
    constructor() {
        super({
            config: {
                name: 'clear',
                description: 'clear commands delete',
                permission: 'User',
            },
            options: {
                aliases: [],
                clientPermissions: [],
                cooldown: 10,
                nsfwCommand: false,
                args: true,
                usage: 'clear <...Count>',
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
    message.delete().catch(O_o=>{}); // eslint-disable-line

	
      if(!args[0]) return message.reply('Please enter the amount of messages you want to clear!').then(m=>m.delete({timeout:9000}).catch(e=>{}))
        if(isNaN(args[0])) return message.reply('Please enter a real number!').then(m=>m.delete({timeout:9000}).catch(e=>{}))
        if(args[0] > 700) return message.reply('You cannot delete more than 700 messages!').then(m=>m.delete({timeout:9000}).catch(e=>{}))
        if(args[0] < 1) return message.reply('<a:failed:798526823976796161> To delete messages please delete atleast 1 message.').then(m=>m.delete({timeout:9000}).catch(e=>{}))
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{

            message.channel.bulkDelete(messages);
          
          
return message.channel.send(`<a:success:798526789114134548> I have deleted ${args[0]} message!`).then(m=>m.delete({timeout:9000}).catch(e=>{}))
        });

    }

 

}