const db = require("quick.db");
const discord = require("discord.js");
const toHex = require("colornames");
module.exports = {
  name: "embedsay",
  category: "misc",
  description: "Get embed :/",
  usage: "embedsay <msg> <color>",
  run: (client, message, del, args) => {
    message.delete();
    let embedtext = args.join(" ");
    if (!embedtext) return message.channel.send("Embedsay <msg> <color");

    let embed = new discord.MessageEmbed()
      .setDescription(embedtext)
      .setColor("RANDOM");
    message.channel.send(embed);
  }
};
