const discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "set",
  description: "",
  usage: "setinbot <#channel>",
  category: "settings",
  run: async (client, message, args) => {
    //OWNER ONLY COMMAND
    if(!message.author.id === `${message.guild.ownerID}`) {
      return message.channel.send("This command can only be used by owner").then(m=>m.delete({timeout:9000}).catch(e=>{}))
    }
    //ARGUMENT
  let channel = message.mentions.channels.first()
     
  switch(args[1]){  

   case "inbot":
   
  
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
  
 db.set(`inbot`, channel.id)
     
    await message.channel.send(`<a:success:798526789114134548> message has been set channel ${channel}\nCommand is loading 10s`).then(m=>m.delete({timeout:10000}).catch(e=>{}))
  break ;
   case "help":
      
      return message.channel.send("waht?")
  
  break ;
  }  
    
  }
}