const { discord, Discord } = require("discord.js");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "settings",
  description: "set message commands",
  usage: "set <key> <#channel>",
  category: "settings",
  run: async (client, message, args) => {
    //OWNER ONLY COMMAND
    message.delete();
    if (!message.author.id === `${message.guild.ownerID}`) {
      return message.channel
        .send("This command can only be used by owner")
        .then(m => m.delete({ timeout: 9000 }).catch(e => {}));
    }
    let e = new MessageEmbed()
      .setTitle("Setting MSG")
      .setColor("GREEN")
      .addField("Set <key>", "\ninbot, level, uptime")
      .setTimestamp()
      .setFooter(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true }) ||
          client.user.displayAvatarURL({ dynamic: true })
      );
    const w = args.join(" ");
    if (!w) return message.channel.send(e);

    const [key, ...value] = args;
    switch (key) {
      case "inbot":
        {
          //ARGUMENT
          let channel = message.mentions.channels.first();

          if (!channel) {
            const wwww = new MessageEmbed()
              .setTitle("Settings Message")
              .setDescription(
                "<a:failed:798526823976796161> Please Mention the channel first"
              )
              .setColor("GREEN")
              .setTimestamp();
            return message.channel
              .send(wwww)
              .then(m => m.delete({ timeout: 12000 }).catch(e => {}));
          }

          //Now we gonna use quick.db
          db.set(`inbot_${message.guild.id}`, channel.id);
          const www = new MessageEmbed()
            .setTitle("Settings Message")
            .setDescription(
              `<a:success:798526789114134548> message has been set channel ${channel}`
            )
            .setColor("GREEN")
            .setTimestamp();
          await message.channel
            .send(www)
            .then(m => m.delete({ timeout: 10000 }).catch(e => {}));
        }
        break;
      case "help":
        {
          return message.channel.send(
            e
            /*    new MessageEmbed()
              .setTitle("Setting MSG")
              .setColor("GREEN")
              .addField("Set <key>", "\ninbot, level, utime")
              .setTimestamp()
              .setFooter(
                message.author.tag,
                message.author.displayAvatarURL({ dynamic: true }) ||
                  client.user.displayAvatarURL({ dynamic: true })
              )*/
          );
        }
        break;
      case "level":
        {
          //ARGUMENT
          let channel = message.mentions.channels.first();

          if (!channel) {
            const wwww = new MessageEmbed()
              .setTitle("Settings Message")
              .setDescription(
                "<a:failed:798526823976796161> Please Mention the channel first"
              )
              .setColor("GREEN")
              .setTimestamp();
            return message.channel
              .send(wwww)
              .then(m => m.delete({ timeout: 12000 }).catch(e => {}));
          }

          //Now we gonna use quick.db
          db.set(`level_${message.guild.id}`, channel.id);
          const www = new MessageEmbed()
            .setTitle("Settings Message")
            .setDescription(
              `<a:success:798526789114134548> message has been set channel ${channel}`
            )
            .setColor("GREEN")
            .setTimestamp();
          await message.channel
            .send(www)
            .then(m => m.delete({ timeout: 10000 }).catch(e => {}));
        }

        break;

      case "uptime": {
        let seconds = Math.floor(message.client.uptime / 1000);

        let minutes = Math.floor(seconds / 60);

        let hours = Math.floor(minutes / 60);

        let days = Math.floor(hours / 24);

        let month = Math.floor(days / 12);

        seconds %= 60;

        minutes %= 60;

        hours %= 24;

        month %= 12;

        const u = message.mentions.members.first();
        const us = message.guild.members.fetch(client.user.id);
        const ddi = `790937024941129759`;
        const uptime = new MessageEmbed()
          .setTitle(
            "<:slowmode:799034410799595590> UPTIME BOT ONLINE <:slowmode:799034410799595590>"
          )
          .setDescription(
            `<a:success:798526789114134548> <@${ddi}> : \`${month} Month,${days} day(s),${hours} hours, ${minutes} minutes, ${seconds} seconds\``
          )

          .setColor("GREEN")
          .setTimestamp();
        return message.channel.send(uptime);
        //.then(m => m.delete({ timeout: 10000 }).catch(e => {}));
      }
   /*     break;
          case "level":

        {

          //ARGUMENT

      //    let channel = message.mentions.channels.first();

      /*    if (!channel) {
            const wwww = new MessageEmbed()
              .setTitle("Settings Message")

              .setDescription(

                "<a:failed:798526823976796161> Please Mention the channel first"

              )

              .setColor("GREEN")

              .setTimestamp();

            return message.channel

              .send(wwww)

              .then(m => m.delete({ timeout: 12000 }).catch(e => {}));

          }
*/
          //Now we gonna use quick.db

    /*      db.set(`color_${message.guild.id}`);

          const wwe = new MessageEmbed()

            .setTitle("Settings Message")

            .setDescription(

              `<a:success:798526789114134548> color has been set channel `+ args[0]

            )

            .setColor("GREEN")

            .setTimestamp();

          await message.channel

            .send(wwe)

            .then(m => m.delete({ timeout: 10000 }).catch(e => {}));

        }
    }*/
  }
}}
