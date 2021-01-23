const ytdl = require('ytdl-core');

const ytSearch = require('yt-search');

module.exports = {
  name: "play",
  description: "Plays a Music for members",
  usage: "play <music>",
  category: "info",
  run: (client, message, args, mass) => {
  //  message.delete();
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) return message.channel.send('You need to join a voice Channel to listen music');

    const permissions = voiceChannel.permissionsFor(message.client.user);

  

    if (!permissions.has('CONNECT')) return message.channel.send('YOU NEED TO HAVE CONNECT PERM');

  if (!permissions.has('SPEAK')) return message.channel.send('You need SPEAK PERMS');

 

   if (!args.length) return message.channel.send('You need to send second argument');

   

  const connection =  voiceChannel.join();

    

  const videoFinder = async (query) => {

    const videoResult = await ytSearch(query);

   

    return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

    

    }

  

  const video = videoFinder(args.join(' '));

    

    if(video){

      const stream = ytdl(video.url, {filter: 'audioonly'});

      connection.play(stream, {seek: 0, volume: 5})

      

      .on('finish', () => {

        voiceChannel.leave();

        });

      

      message.channel.send(` playing ***${video.title}***`)

      } else {

        message.channel.send('Result not found');

                           

      }

    }

  } 

