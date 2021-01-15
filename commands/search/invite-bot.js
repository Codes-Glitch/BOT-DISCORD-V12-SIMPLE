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
  
  let chnnel =  message.guild.channels.cache.find(x => x.id === db.get(`inbot`));
  if (!msgg) return message.channel.send("<a:failed:798526823976796161> Please Give ID Bot");
      
  await message.channel.send(`Check Channel ${chnnel || `<a:failed:798526823976796161> Failed to Send` }`)
    
   const ar = args
    if (!msgg) return message.channel.send("<a:failed:798526823976796161> Please Give ID Bot");
    if (msgg.length > 18) return message.channel.send("<a:failed:798526823976796161> Too Long ID - 18 Limit");
    if (isNaN(msgg))return message.reply("<a:failed:798526823976796161> This is not an ID")  
  //await message.channel.send("Check Channel")
  //return message.channel.send("Check Channel")
   const Discord = require("discord.js");
    //await message.channel.send("Check Channel")
 return chnnel.send(`> INVITE BOT \n\n> [Clink di sini](https://discord.com/oauth2/authorize?client_id=${ar}&scope=bot&permissions=8)\n\n> Author => \`\`\`\n${message.author}\n\`\`\``).then(m => {

      m.react("✅")

      m.react("❌")

    })
 
  
     }}

;