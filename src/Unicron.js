require('dotenv').config();
require('./listeners/process');
const Unicron = require('./classes/Unicron');
const client = new Unicron();
(async function () {
    await client.registerItems('../items/');
    await client.registerCommands('../commands/');
    await client.registerEvents('../events/');
  client.on("ready", () => {
  client.user.setStatus("idle");
  client.user.setActivity(
    `\n\n${client.guilds.cache.size} Server | ${client.users.cache.size} User \nMade By FC ä¹ˆ Glitch Editz `,
    {
      type: "WATCHING"
    }
  );
  console.log(`Hi, ${client.user.username} is now online!`);
});
  const fetch = require('node-fetch')

setInterval(async () => {

  await fetch('Your glitch project live page URL here').then(console.log('Pinged!'))

}, 240000)
  
    await client.login(process.env.BOT_TOKEN);
})();