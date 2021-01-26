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

