const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "setinbot",
  description: "",
  usage: "setssmsg <channel> do not use `#`",
  category: "settings",
  run: async (client, message, args) => {
    
    //OWNER ONLY COMMAND
    if(!message.author.id === `${message.guild.ownerID}`) {
      return message.channel.send("This command can only be used by owner").then(m=>m.delete({timeout:9000}).catch(e=>{}))
    }
    //ARGUMENT
  let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    
  
 db.set(`inbot`, channel.id)
      await message.channel.send(`message level has been set channel ${channel}\nCommand is loading 10s`).then(m=>m.delete({timeout:10000}).catch(e=>{}))
    process.exit(1);
    
  }
}