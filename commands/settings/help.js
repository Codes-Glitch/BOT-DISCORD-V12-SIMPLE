const { discord, Discord } = require("discord.js")
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
        
const [key, ...value] = args;
        switch (key) {
            case 'channel': { 
              
              //ARGUMENT
  let channel = message.mentions.channels.first()
  
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
     db.set(`inbot`, channel.id)
       return message.channel.send(new Discord.MessageEmbed()

                    .setColor('RED')

                    .setTimestamp()

                    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))

                    .setDescription(await <a:success:798526789114134548> message has been set channel ${channel}\nCommand is loading 10s`
   )
    await message.channel.send(`<a:success:798526789114134548> message has been set channel ${channel}\nCommand is loading 10s`).then(m=>m.delete({timeout:10000}).catch(e=>{}))
    }
              case 'message': {
                await message.channel.send("ah?")
      }
                
                default:

                return message.channel.send(new Discord.MessageEmbed()

                    .setColor('RED')

                    .setTimestamp()

                    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))

                    .setDescription('Error: Invalid Key provided, Please try again.')            
    
   )}
  }
}