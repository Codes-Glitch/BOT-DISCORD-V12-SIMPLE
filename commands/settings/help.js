const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setinbot",
  category: "settings",
  usage: "setinbot <#channel>",
  description: "Set the inbot/invitebot <id bot> channel",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`inbot_${message.guild.id}`, channel.id)
    
    message.channel.send(`Welcome Channel is seted as ${channel}`)
  }
}