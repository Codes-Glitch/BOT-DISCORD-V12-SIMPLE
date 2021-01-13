const { Message, Discord } = require('discord.js');

const Client = require('../../classes/Unicron');

const BaseCommand = require('../../classes/BaseCommand');

//const db = require("quick.db")

module.exports = class extends BaseCommand {

    constructor() {

        super({

            config: {

                name: 'snipe',

                description: 'get deleted messages',

                permission: 'User',

            },

            options: {

                aliases: [],

                clientPermissions: [],

                cooldown: 10,

                nsfwCommand: false,

                args: true,

                usage: '',

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

      client.snipes = new Map();

client.on("messageDelete", function(message, channel) {

  client.snipes.set(message.channel.id, {

    content: message.content,

    author: message.author.tag,

    image: message.attachments.first()

      ? message.attachments.first().proxyURL

      : null

  });

});

      

      

    const msg = client.snipes.get(message.channel.id)

    if(!msg) return message.channel.send("There are no deleted messages in this channel!").then(m=>{m.react("🔄")})

    const embed = new Discord.MessageEmbed()

    .setTitle("📋Snipe Message Delete📋")

  //  .setAuthor(msg.author)

    .setDescription(`=> Author: \`\`\`\n${msg.author}\n\`\`\`\n => Message Delete: \n\`\`\`\n${msg.content || "Tell That No Response To Embed"}\n\`\`\``)

    .setTimestamp()

    . setColor ("GREEN")

    if(msg.image)embed.setImage(msg.image)

    message.channel.send(embed).then(m => {

      m.react("✅")

      m.react("❌")

    })

    

  }

}

