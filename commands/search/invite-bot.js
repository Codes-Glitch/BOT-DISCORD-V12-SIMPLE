const db = require("wio.db");
const { MessageEmbed } = require("discord.js");
const gagal = `RED`;
const gg = (module.exports = {
  name: "inbot",
  category: "search",
  description: "Get bot link invite",
  usage: "inbot",
  run: async (client, message, args, msss) => {
    message.delete();
    //  let annel = message.guild.channels.cache.find((x) => (x.name === ``))
    const db = require("quick.db");
    const msgg = args[0];

    let chnnel = message.guild.channels.cache.find(
      x => x.id === db.get(`inbot`)
    );
    if (!msgg)
      return message.channel.send(
        new MessageEmbed()
          .setTitle("Discord Developer")
          .setDescription("<a:failed:798526823976796161> Please Give ID Bot")
          .setColor(gagal)
          .setTimestamp()
      );
    const mss = args[1];
    if (!mss)
      return message.channel.send(
        new MessageEmbed()
          .setTitle("Discord Developer")
          .setDescription(
            "<a:failed:798526823976796161> Please Give Prefix Bot"
          )
          .setColor(gagal)
          .setTimestamp()
      );
    if (!msgg)
      return message.channel.send(
        new MessageEmbed()
          .setTitle("Discord Developer")
          .setDescription("<a:failed:798526823976796161> Please Give ID Bot")
          .setColor(gagal)
          .setTimestamp()
      );
    if (msgg.length > 18)
      return message.channel.send(
        new MessageEmbed()
          .setTitle("Discord Developer")
          .setDescription(
            "<a:failed:798526823976796161> Too Long ID - 18 Limit"
          )
          .setColor(gagal)
          .setTimestamp()
      );
    if (isNaN(msgg))
      return message.channel.send(
        new MessageEmbed()
          .setTitle("Discord Developer")
          .setDescription("<a:failed:798526823976796161> This is not an ID")
          .setColor(gagal)
          .setTimestamp()
      );
    //  const { MessageEmbed } = require ("discord.js")
    //await message.channel.send("Check Channel")
    const me = message.author.tag;
    //return message.channel.send("Check Channel")
    //  const { Discord, MessageEmbed } = require("discord.js");
    //await message.channel.send("Check Channel")
    const no = new MessageEmbed()
      .setTitle("BOT LINK ID")
      .setDescription(`Author: \`\`\`css\n${me}\n\`\`\``)
      .setColor("YELLOW")
      .addField("ID BOT", `\`\`\`\n${msgg}\n\`\`\``)
      .addField("PREFIX", `\`\`\`\n${mss}\n\`\`\``)
      .addField(
        "INVITE BOT",
        `[Clink Here](https://discord.com/oauth2/authorize?client_id=${msgg}&scope=bot&permissions=8)`
      );
    
    
   // await message.channel.send(
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
