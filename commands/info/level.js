const db = require('quick.db')
const { discord, MessageEmbed } = require('discord.js')
const { getInfo } = require("../../handlers/xp.js")
module.exports = {
  name: "level",
  description: "Get the level of author or mentioned",
  usage: "level <user>",
  category: "info",
  run: (client, message, args) => {
 
   message.delete();
    const user = message.mentions.users.first() || message.author;
       let chnnel = message.guild.channels.cache.find(

      x => x.id === db.get(`level`)

    );
    if(user.id === client.user.id) { //IF BOT
      return message.channel.send("😉 | I am on level 500")
    }
    
    if(user.bot) {
      return message.channel.send("Bot do not have levels")
    }
    
    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
    
    const {level, remxp, levelxp} = getInfo(xp);
    if(xp === 0) return message.channel.send(`**${user.tag}** is out of the xp`)
    
    let embed = new discord.MessageEmbed()
    .setAuthor(user.username, message.guild.iconURL())
    .setColor("#ff2050")
    .setThumbnail(user.avatarURL())
    .setDescription(`**LEVEL** - ${level}
**XP** - ${remxp}/${levelxp}`)
// await message.channel.send("h")
         const www = new MessageEmbed()
          .setTitle("Discord Developer")
          .setDescription(`Check Channel ${chnnel ||
        `<a:failed:798526823976796161> Failed to Send`}`)
       .setColor(gagal)
          .setTimestamp()
         await message.channel.send(www).then(m=>m.delete({timeout:8000}).catch(e=>{}))
    return chnnel.send(no).then(m => {
      m.react("✅");

      m.react("❌");
    });
  }
});
