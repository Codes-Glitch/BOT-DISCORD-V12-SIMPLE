const db = require("quick.db");
const discord = require ("discord.js")
const toHex = require("colornames");
module.exports = {
  name: "embedsay",
  category: "misc",
  description: "Get embed :/",
  usage: "embedsay <msg> <color>",
  run: (client, message, del, args) => {
    message.delete();
   let embedtext = args.slice(0).join(" ")
          if(!embedtext) return message.channel.send("e[0]t")
const regex = !/[^a-zA-Z0-9]+/g.test(name)
const colo = args[1]

           let embed = new discord.MessageEmbed()
           . setDescription (embedtext)
     . setColor ("RANDOM")
                message.channel.send(embed);

       }
}

      