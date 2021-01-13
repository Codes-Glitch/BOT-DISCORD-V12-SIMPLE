const { Message, MessageEmbed } = require('discord.js');

const Client = require('../../classes/Unicron');

const BaseCommand = require('../../classes/BaseCommand');

const Color = `RANDOM`

const math = require("mathjs");

module.exports = class extends BaseCommand {

    constructor() {

        super({

            config: {

                name: 'math',

                description: 'math commands',

                permission: 'User',

            },

            options: {

                aliases: [],

                clientPermissions: [],

                cooldown: 10,

                nsfwCommand: false,

                args: true,

                usage: 'math <number -/+/:/all number2>',

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

     

    

    try {

      if (!args[0]) return message.channel.send("Please Give Me Equation!");

      const embed = new MessageEmbed()

        .setColor(`${Color}`)

        .setTitle(`Result`)

        .setDescription(math.evaluate(args.join(" ")))

        .setTimestamp();

      message.channel.send(embed);

    } catch (error) {

      message.channel.send(`Please Give Me Valid Equation | Try Again Later!`).then(() => console.log(error));

  

      return message.reply(

        `Cannot send because there is no Msg set`

   )}}}   

    

  

