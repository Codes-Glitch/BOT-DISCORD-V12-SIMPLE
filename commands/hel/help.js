const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  cooldown : 5,
  guildOnly: true,
  category: "help",
  run: async (client, message, args, del) => {
           
    message.delete();
    if (args[0]) {
      const command = await client.commands.get(args[0]);
      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description", command.description || "Not Provided :(")
        .addField("Usage", command.usage || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("GREEN")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setDescription("Join my [server](https://discord.gg/MKwyk4qdeb) or Die :D")
        .setColor("GREEN")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL());

      let com = {};
      for (let comm of commands.array()) {
       let category = comm.category || "UNKNOWN";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for (const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "<a:right:798696415089262632> `" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }

      let database = db.get(`cmd_${message.guild.id}`);

      if (database && database.length) {
        let array = [];
        database.forEach(m => {
          array.push("`" + m.name + "`");
        });

        emx.addField("Custom Commands", array.join(", "));
      }
      return message.channel.send(emx);
    }
  }
};
