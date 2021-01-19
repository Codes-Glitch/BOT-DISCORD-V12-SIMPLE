const db = require("quick.db");
const MessageEmbed = require ("discord..js");
const toHex = require("colornames");
    
module.exports = {

  name: "embed",

  category: "misc",

  description: "embed message",

  usage: "embed <msg>",

  run: async (client, message, args, del, member) => {
   message.delete();
    const usa = args[0]
      if (!usa) return message.channel.send(`${message.author}, embed <msg>`)
    let say = args[1]
     const regex = !/[^a-zA-Z0-9]+/g.test(name)
    // const Channel = member.guild.channels.cache.get('797491226567114753') //insert channel id that you want to send to
    const embed = new MessageEmbed()
    . setDescription (usa)
    . setColor (`${regex}${say}`)
    . setTimestamp()
    message.channel.send(embed);
  

   }}