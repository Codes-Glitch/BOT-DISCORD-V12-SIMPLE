const db = require("wio.db");
module.exports = {
  name: "inbot",
  category: "search",
  description: "Get bot link invite",
  usage: "inbot",
  run: async (client, message, args, msss) => {
    message.delete();
    //  let annel = message.guild.channels.cache.find((x) => (x.name === ``))
    const db = require("quick.db");
    const msgg = args.join(" ");

    let chnnel = message.guild.channels.cache.find(
      x => x.id === db.get(`inbot`)
    );
    if (!msgg)
      return message.channel.send(
        "<a:failed:798526823976796161> Please Give ID Bot And Prefix Bot"
      );
    const mss = args[1];
    if (!mss)
      return message.channel.send("<a:failed:798526823976796161> Prefix Bot");

    const ar = args;
    if (!msgg)
      return message.channel.send(
        "<a:failed:798526823976796161> Please Give ID Bot"
      );
    if (msgg.length > 25)
      return message.channel.send(
        "<a:failed:798526823976796161> Too Long ID - 18 Limit"
      );
 /*   if (isNaN(msgg))
      return message.reply("<a:failed:798526823976796161> This is not an ID");
  */  //await message.channel.send("Check Channel")
    const me = message.author.tag;
    //return message.channel.send("Check Channel")
    const { Discord, MessageEmbed } = require("discord.js");
    //await message.channel.send("Check Channel")
    const no = new MessageEmbed()
      .setTitle("BOT LINK ID")
      .setDescription(`Author: \`\`\`css\n${me}\n\`\`\``)
. setColor ("YELLOW")
      .addField(
        i
        "INVITE BOT",
        `[Clink Here](https://discord.com/oauth2/authorize?client_id=${ar}&scope=bot&permissions=8)`
      );
    await message.channel.send(
      `Check Channel ${chnnel ||
        `<a:failed:798526823976796161> Failed to Send`}`
    );

    return chnnel.send(no).then(m => {
      m.react("✅");

      m.react("❌");
    });
  }
};
