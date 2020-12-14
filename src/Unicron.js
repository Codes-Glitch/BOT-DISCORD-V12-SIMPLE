require('dotenv').config();
require('./listeners/process');
const Unicron = require('./classes/Unicron');
const client = new Unicron();
(async function () {
    await client.registerItems('../items/');
    await client.registerCommands('../commands/');
    await client.registerEvents('../events/');
  const status = [
    `${client.guilds.cache.size} Server | ${client.users.cache.size} User `,
    `Made By 𝙁𝘾 么 Glitch Editz#5631`
    `to set status Go to file : src/Unicron.js`//can add another
  ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type:"WATCHING"})
  }, 5000)
  
  const fetch = require('node-fetch')

setInterval(async () => {

  await fetch('Your glitch project live page URL here').then(console.log('Pinged!'))

}, 240000)
  
    await client.login(process.env.BOT_TOKEN);
})();