const db = require("quick.db");
const Discord = require ("discord.js");

module.exports = {

  name: "warn",

  category: "moderation",

  description: "warting member",

  usage: "warn <@user> <msg>",

  run: async (client, message, args, del, member) => {
   message.delete();
    const usa = args.join(' ')
      if (!usa) return message.channel.send(`${message.author}, say <msg>`)
    let say = args.join(' ')
    
    const warn = new Discord.MessageEmbed()
    .setTitle (`WARNING MEMBER`)
    .addField ("Server )
    .addField (``)
   .addField ()
   .addField ()
   .addField ()
   // const Channel = member.guild.channels.cache.get('797491226567114753') //insert channel id that you want to send to
    message.channel.send(say);
  

   }}