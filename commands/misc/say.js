const db = require("quick.db");


module.exports = {

  name: "say",

  category: "misc",

  description: "Get bot ping :/",

  usage: "say <msg>",

  run: async (client, message, args, del, member) => {
   message.delete();
    const usa = args.join(' ')
      if (!usa) return message.channel.send(`${message.author}, say <msg>`)
    let say = args.join(' ')
   // const Channel = member.guild.channels.cache.get('797491226567114753') //insert channel id that you want to send to
    message.channel.send(say);
       const [key, ...value] = args;

    switch (key) {

      case "ch": {
        let chnnel = message.guild.channels.cache.find(x => x.id === args[2] );
   let say = args.join(' ')

   // const Channel = member.guild.channels.cache.get('797491226567114753') //insert channel id that you want to send to

    chnnel.send(say);

   
      }     
}
 
}  
  }

  


