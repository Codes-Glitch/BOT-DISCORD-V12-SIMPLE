const db = require("quick.db");


module.exports = {

  name: "sayc",

  category: "misc",

  description: "sayc channel send :/",

  usage: "sayc <msg>",

  run: async (client, message, args, del, member) => {
   message.delete();
    const arg = args[0]
     let chnnel = message.guild.channels.cache.find(x => x.name === `${arg}` );
    const usa = args[0]
      if (!usa) return message.channel.send(`${message.author}, say <msg>`)
     let say = args.slice(0).join(" ")
  const Channel = member.guild.channels.cache.get('797491226567114753') //insert channel id that you want to send to
    chnnel.send(say);
  

   }}