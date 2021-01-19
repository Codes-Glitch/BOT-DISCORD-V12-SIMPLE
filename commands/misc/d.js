const db = require("quick.db");
const discord = require ("discord.js")


module.exports = {

  name: "embedsay",

  category: "misc",

  description: "Get bot ping :/",

  usage: "",

  run: async (client, message, args) => {
   message.delete();
   let embedtext = args.slice(0).join(" ")
          if(!embedtext) return message.channel.send("Masukan kata-kata terlebih dahulu!")

           let embed = new discord.MessageEmbed()
           .setDescription(embedtext)
           message.channel.send(embed);

       }
}
