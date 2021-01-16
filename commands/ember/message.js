const recentCommandUsage = new Set();
const Discord = require("discord.js");

//let prefix = process.env.PREFIX;

exports.run = async (client, message) => {
  if (message.author.bot) return;

  let reply = new Discord.RichEmbed()
    .setColor("#FA767D")
    .setTitle("Direct Message (DM) Menu")
    .setAuthor("Automated Message", "https://i.imgur.com/5YyGXl8.png")
    .setDescription(
      "Welcome to the interactive Direct Message (DM) menu.\nCurrently, we only have 1 option, that's to create a help ticket in CBS. There's more coming soon!"
    )
    .setThumbnail("https://i.imgur.com/5YyGXl8.png")
    .addField(
      "Create a help ticket",
      "Want to create a help ticket? Let's get you started. First, read <#738329164914098257> and <#739784640847544431>. After that, react with :tickets:. Further instructions will be given after that point."
    )
    .addField(
      "Exit",
      "If you want to exit this menu, react with <a:ablobleave:738695734643392544>. The menu will autoclose in 2 minutes."
    )
    .setTimestamp()
    .setFooter(
      "Reminder: Execution of opening this menu is logged (viewable to staff only).",
      "https://i.imgur.com/zlXuq1V.png"
    );

  let autotimedout = new Discord.RichEmbed()
    .setColor("#FA767D")
    .setTitle("Timed out")
    .setDescription(
      "You have not reacted with anything for 2 minutes. Your request was timed out and cannot be used again. You can DM the bot anything to initiate the interactive menu again."
    )
    .setFooter(
      "Reminder: Execution of this response is logged (viewable to staff only).",
      "https://i.imgur.com/zlXuq1V.png"
    );

  let exit = new Discord.RichEmbed()
    .setColor("#FA767D")
    .setTitle("Success")
    .setDescription(
      "You have successfully exited the interactive menu. You can DM the bot anything to initiate the interactive menu again."
    )
    .setFooter(
      "Reminder: Execution of this response is logged (viewable to staff only).",
      "https://i.imgur.com/zlXuq1V.png"
    );

  let ticketchoice = new Discord.RichEmbed()
    .setColor("#FA767D")
    .setAuthor("DM Interactive Menu", "https://i.imgur.com/5YyGXl8.png")
    .setTitle("Create a help ticket")
    .setDescription("To create a help ticket, do the steps below.")
    .addField(
      "Steps",
      "1. Read <#738329164914098257> and <#739784640847544431> __completely__.\n2. Google your question. It might be there, you never know.\n3.If both steps above does not include your answer to your question, then react **and only then** you are allowed to open a help ticket."
    )
    .setFooter(
      "Reminder: Execution of this response is logged (viewable to staff only).",
      "https://i.imgur.com/zlXuq1V.png"
    );

  let ticketconfirmation = new Discord.RichEmbed()
    .setColor("#FA767D")
    .setAuthor("DM Interactive Menu", "https://i.imgur.com/5YyGXl8.png")
    .setTitle("Create a help ticket")
    .setDescription(
      "Select the bot that you need help with. If your bot isn't supported, suggest the bot in <#738319420698525737>. Unfortunately, if your bot isn't supported, we can't help you at the moment. Try <#739801713787011132>, or just join their support server (it's worth it at the end)."
    )
    .addField("Corresponding Emojis", "TBD")
    .setFooter(
      "Reminder: Execution of this response is logged (viewable to staff only).",
      "https://i.imgur.com/zlXuq1V.png"
    );

  
  /* if (message.channel.type === "dm")
    message.author.send(reply).then(sentEmbed => {
      sentEmbed.react("🎟");
      sentEmbed.react("738695734643392544");
    }).then(sentEmbed => {
const filter = (reaction, user) => reaction.emoji.name === '🎟' && user.id === 'someID';
const collector = message.createReactionCollector(filter, { time: 5000 });
collector.on('collect', r => message.author.send(`Collected ${r.emoji.name}`));
    }) */

  
  /*message.awaitReactions(
      (reaction, user) =>
        user.id == message.author.id &&
        (reaction.emoji.name == "🎟" || reaction.emoji.name == "738695734643392544"),
      { max: 1, time: 5000 }
    ).then(collected => {
      if (collected.first().emoji.name == "🎟") {
        message.author.send(ticketconfirmation);
      } else return message.author.send(exit);
    })
    .catch(() => {
      return message.author.send(autotimedout);
    });*/
    

  //message.author.send(reply);message.react('🎟');

  if (message.content.startsWith(prefix)) {
    if (recentCommandUsage.has(message.author.id)) {
      message
        .reply("a bit too fast there! You're on cooldown.")
        .then(msg => msg.delete(5000));
    } else {
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);
      const arg = message.content.slice(prefix.length).split(/ +/);
      const commandName = arg.shift().toLowerCase();
      const commandfile =
        client.commands.get(commandName) || client.aliases.get(commandName);
      if (!commandfile) return;
      commandfile.run(client, message, args);

      recentCommandUsage.add(message.author.id);
      setTimeout(() => {
        recentCommandUsage.delete(message.author.id);
      }, 5500);
    }
  }
};
