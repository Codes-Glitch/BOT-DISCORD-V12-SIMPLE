module.exports = {
  name: "ping",
  category: "misc",
  description: "Get bot ping :/",
  usage: "ping",
  run: (client, message, del) => {
   message.delete();
    const Discord = require("discord.js")
    const em = new Discord.MessageEmbed()
    .setTitle("📡Check Your Ping📡")
    .setDescription(`=> PING: \`\`\`\n${client.ws.ping}\n\`\`\``)
    . setColor ("GREEN")
    .setTimestamp()
    message.channel.send(em).then(m => 
                                  { m.react("✅")
                                    m.react("🔒")
                                    ({timeout: 7000})});
      client.on("messageReactionAdd", async (reaction, user) => {

  if (user.bot) return; // If the user was a bot, return.

 if (!reaction.message.guild) return; // If the user was reacting something but not in the guild/server, ignore them.

      if (reaction.emoji.name === "🔒") {

         await  message.channel.bulkDelete(1);
return message.channel.send("message Locked\nClick 🔓 to return the ping message").then(m => {
const filter = (user) => (reaction.emoji.name === "🔓") && (user.id === message.author.id)
msg.awaitReactions(filter,{
  max: 1
  }).then(async co
      m.react("🔓")

        client.on("messageReactionAdd", async (reaction, user) => {

  if (user.bot) return; // If the user was a bot, return.

 if (!reaction.message.guild) return; // If the user was reacting something but not in the guild/server, ignore them.

      if (reaction.emoji.name === "🔓") {
  await  message.channel.bulkDelete(1);
            return message.channel.send(em).then(m=>m.delete({timeout:5000}).catch(e=>{}))
    }}) 

 
    })
    }}) 

 
  }
  
  
}
