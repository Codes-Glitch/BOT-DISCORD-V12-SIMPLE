const { Message, MessageEmbed } = require("discord.js");
//const { Default_Prefix, Color } = require("../../config.js");
const Discord = require("discord.js");
//const db = require("wio.db");
const moment = require("moment");
const fetch = require("node-fetch");

const url = require("url");

module.exports = {
  name: "idemoji",
  aliases: ["emoji"],
  category: "search",
  description: "get emoji Id on server.",
  usage: "idemoji <emoji name>",
  run: async (client, message, args) => {
    message.delete();

    const urls = args[0];
    if (!urls) return message.reply("```\n where are the emojis -_\n```");
    //  if(urls < 8) return message.reply('<a:failed:798526823976796161> https is too short to reach - 8 limit').then(m=>m.delete({timeout:9000}).catch(e=>{}))
    return message.channel.send(new MessageEmbed()
    .setTitle("Emoji Id")
    . setDescription("Emoji Name",`${ur`
 ) }
};
