const { Message, MessageEmbed } = require("discord.js");
//const { Default_Prefix, Color } = require("../../config.js");
const Discord = require("discord.js");
//const db = require("wio.db");
const moment = require("moment");
const fetch = require("node-fetch");

const url = require("url");

module.exports = {
  name: "ss",
  aliases: ["screenshot"],
  category: "search",
  description: "Takes a screenshot of any webpage.",
  usage: "screenshot <URL>",
  run: async (client, message, args) => {
    message.delete()
    
    const urls = args[0];
    if(!urls)return message.reply("```\nwhere is the link -_\n```")
      if(!args[0] < 8) return message.reply('<a:failed:798526823976796161> https is too short to reach - 7 limit').then(m=>m.delete({timeout:9000}).catch(e=>{}))
     if(!args[0] < 7) return message.reply('<a:failed:798526823976796161> https is too short to reach - 6 limit').then(m=>m.delete({timeout:9000}).catch(e=>{}))
     if(!args[0] < 6) return message.reply('<a:failed:798526823976796161> https is too short to reach - 5 limit').then(m=>m.delete({timeout:9000}).catch(e=>{}))
     if(!args[0] < 5) return message.reply('<a:failed:798526823976796161> https is too short to reach - 4 limit').then(m=>m.delete({timeout:9000}).catch(e=>{}))
     if(!args[0] < 4) return message.reply('<a:failed:798526823976796161> https is too short to reach - 3 limit').then(m=>m.delete({timeout:9000}).catch(e=>{}))
     if(!args[0] < 3) return message.reply('<a:failed:798526823976796161> https is too short to reach - 2 limit').then(m=>m.delete({timeout:9000}).catch(e=>{}))
     if(!args[0] < 2) return message.reply('<a:failed:798526823976796161> https is too short to reach - 1 limit').then(m=>m.delete({timeout:9000}).catch(e=>{}))
     if(!args[0] < 1) return message.reply('<a:failed:798526823976796161> https is too short to reach - 0 limit').then(m=>m.delete({timeout:9000}).catch(e=>{}))
if(!args[0] < 9) return message.reply('<a:failed:798526823976796161> https is too short to reach - 8 limit').then(m=>m.delete({timeout:9000}).catch(e=>{}))

     
     
   
    const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
    try {
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );
      
      return message.channel.send(
        `\`\`\`\nHere is a screenshot from requested URL\n\`\`\` [Clink Here](${urls})`,
        {
          files: [{ attachment: body, name: "Screenshot.png" }]
        }
      );
    } catch (err) {
      if (err.status === 404)
        return message.channel.send("Could not find any results. Invalid URL?");
      return message.reply(
        `Oh no, an error occurred: \`${err.message}\`. Try again later!`
      );
    }
  }
};
