const db = require("quick.db");
const discord = require("discord.js");
const { getInfo } = require("../../handlers/xp.js");
const { MessageEmbed, MessageAttachment} = require("discord.js");
const { CanvasSenpai } = require("canvas-senpai");
const { Discord } = require("discord.js");
const canva = new CanvasSenpai();

const gagal = `RED`;
module.exports = {
  name: "levelimg",
  description: "Get the level of author or mentioned",
  usage: "levelimg <user>",
  category: "info",
  run: (client, message, args, mass) => {
    message.delete();
    const user = message.mentions.users.first() || message.author;
    let chnnel = message.guild.channels.cache.find(
      x => x.id === db.get(`level_${message.guild.id}`)
    );
    if (user.id === client.user.id) {
      //IF BOT
      return message.channel.send("😉 | I am on level 500");
    }

    if (user.bot) {
      return message.channel.send("Bot do not have levels");
    }

    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;

    const { level, remxp, levelxp } = getInfo(xp);
    if (xp === 0)
      return message.channel.send(`**${user.tag}** is out of the xp`);

    let data = canva.rankcard({
      link:
        "https://i.pinimg.com/originals/76/0e/d7/760ed7f52c90870503762ac92db92adc.jpg",

      name: message.author.username,

      discriminator: message.author.discriminator,

      level: level,

      currentXP: remxp,

      fullXP: levelxp,

      avatar: message.author.displayAvatarURL({ format: "png" })
    });

    const attachment = new MessageAttachment(
      data,

      "welcome-image.png"
    );

    message.channel.send(
      ``,

      attachment
    );
  }
};
