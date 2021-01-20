const db = require("quick.db");
const MessageEmbed = require("discord.js");
module.exports = {
  name: "warnings",
  description: "Get the warnings of yours or mentioned person",
  category: "moderation",
  run: (client, message, args) => {
    const user = message.mentions.members.first() || message.author;

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

    message.channel.send(
      new MessageEmbed()
      . setTitle ("MODERATION BOT")
      .setDescription(`<a:right:798696415089262632> ${user}\nThe number of members in the Warn: **${warnings}** warning`)
      
    );
  }
};
