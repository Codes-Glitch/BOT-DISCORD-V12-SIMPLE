const db = require("quick.db");
const MessageEmbed = require("discord.js");
const DISCORD = require("discord.js");
module.exports = {
  name: "warnings",
  description: "Get the warnings of yours or mentioned person",
  category: "moderation",
  run: (client, message, args) => {
    const user = message.mentions.members.first() || message.author;
    const u = args[0];
    if (!u)
      return message.channel.send("warnings <@user>")
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

      message.channel.send(new DISCORD.MessageEmbed()
        .setTitle("MODERATION WARN")
         . setDescription (`<a:right:798696415089262632> ${user}\nThe number of members in the Warn: \n<a:right:798696415089262632> Warn:**${warnings}**`)
      .
   )}
};
