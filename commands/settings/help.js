const { discord, Discord } = require("discord.js");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "set",
  description: "set message commands",
  usage: "set <key> <#channel>",
  category: "settings",
  run: async (client, message, args) => {
    //OWNER ONLY COMMAND
    if (!message.author.id === `${message.guild.ownerID}`) {
      return message.channel
        .send("This command can only be used by owner")
        .then(m => m.delete({ timeout: 9000 }).catch(e => {}));
    }
    let e = new MessageEmbed()
    .setTitle ("Setting MSG")
    . setColor ("GREEN")
    .addField ("Set <key>","\ninbot")
    .setTimestamp ()
       .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))
    const w = args.join(" ")
 if (!w) return message.channel.send(e);

    const [key, ...value] = args;
    switch (key) {
      case "inbot": {
        //ARGUMENT
        let channel = message.mentions.channels.first();

        if (!channel) {
          return message.channel.send("Please Mention the channel first");
        }

        //Now we gonna use quick.db
        db.set(`inbot`, channel.id);

        await message.channel
          .send(
            `<a:success:798526789114134548> message has been set channel ${channel}`
          )
          .then(m => m.delete({ timeout: 10000 }).catch(e => {}));
      }
      default:
        return message.channel.send(
          new MessageEmbed()

            .setColor("RED")

            .setTimestamp()

            .setFooter(
              message.author.tag,
              message.author.displayAvatarURL({ dynamic: true }) ||
                client.user.displayAvatarURL({ dynamic: true })
            )

            .setDescription("Error: Invalid Key provided, Please try again.")
        );
    }
  }
};
