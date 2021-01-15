const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "setinbot",
  description: "",
  usage: "setinbot <#channel>",
  category: "settings",
  run: async (client, message, args) => {
    if (message.substring(0, 1) == '/') {

        var args = message.substring(1).split(' ');

        var cmd = args[0];

       

        args = args.splice(1);

        switch(cmd) {

            // /Hi

            case 'Hi':

                client.sendMessage({

                    to: channelID,

                    message: 'Hello'

				});

            break;

            // Just add any case commands if you want to..

         }

     }

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
      await message.channel.send(`<a:success:798526789114134548> message has been set channel ${channel}\nCommand is loading 10s`).then(m=>m.delete({timeout:10000}).catch(e=>{}))
    
    
  }
}