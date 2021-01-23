const db = require("quick.db");
const MessageEmbed= require ("discord.js");
module.exports = {
  name: "sayc",

  category: "misc",

  description: "sayc channel send :/",

  usage: "sayc <#channel> <msg>",

  run: async (client, message, args, del, member) => {
    message.delete();
       let channel = message.mentions.channels.first();
    const arg = args[0]
       if (!arg) {

            const wwww = new MessageEmbed()

              .setTitle("Settings Message")

              .setDescription(

                "<a:failed:798526823976796161> Please Mention the channel first"

              )

              .setColor("GREEN")

              .setTimestamp();

            return message.channel

              .send(wwww)

              .then(m => m.delete({ timeout: 12000 }).catch(e => {}));

          }
      await db.set(`say_${message.guild.id}`, channel.id);

      
    let chnnel = message.guild.channels.cache.find(x => x.id === db.get(`say_${message.guild.id}`, channel.id));
    const usa = args[0];
    if (!usa) return message.channel.send(`${message.author}, sayc <channel> <msg>`);
    let say = args.slice(1).join(" ");
  //  const Channel = member.guild.channels.cache.get("797491226567114753"); //insert channel id that you want to send to
    chnnel.send(say);
  }
};
