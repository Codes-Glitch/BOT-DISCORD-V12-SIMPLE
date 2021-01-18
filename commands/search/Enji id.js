
module.exports = {
  name: "idemoji",
 // aliases: ["emoji"],
  category: "search",
  description: "get emoji Id on server.",
  usage: "idemoji <emoji name>",
  run: async (client, message, args) => {
    message.delete();
    const w = args[0]
    
    const ayy = client.emojis.find(emoji => emoji.name === "args");
   message.reply(`${ayy} LMAO`);
}}