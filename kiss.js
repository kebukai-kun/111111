const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var list = [
    "https://pa1.narvii.com/6248/f5bd8d1ed60b4f8305abf89433d07dc5b0106691_hq.gif",
    "https://i.pinimg.com/originals/b0/37/a0/b037a0d27fc2fce28cd279561ec89825.gif",
    "https://i.imgur.com/iclUiUN.gif",
    "https://i.pinimg.com/originals/25/a8/ab/25a8abc03a104d4d765fe314abebbc20.gif",
    "https://pa1.narvii.com/6248/e2058cba6ab27061e62a6c94a6ee6ba61198ad23_hq.gif",
    "http://cdn.lowgif.com/full/011acd5511e7c9fc-anime-kiss-gifs-tumblr.gif",
    "https://i.pinimg.com/originals/89/6f/20/896f20d44793ccf10fb64cc8f77980bb.gif",
    "https://i.imgur.com/IgGumrf.gif",
    "https://i0.wp.com/media1.tenor.com/images/558f63303a303abfdddaa71dc7b3d6ae/tenor.gif",
    "https://thumbs.gfycat.com/FrighteningGiddyGerbil-small.gif",
    "https://giffiles.alphacoders.com/188/188468.gif",
    "http://37.media.tumblr.com/162fae92689e51b35946e11af62619be/tumblr_mtj3c1HsKK1s9pzh1o1_500.gif",
    "https://i.pinimg.com/originals/14/ef/e0/14efe06fce2e1917c659e95a7a4542ef.gif",
    "https://i.pinimg.com/originals/7d/49/fa/7d49fa49476dda9b040541a83342ceac.gif",
    "https://ptanime.com/wp-content/uploads/2017/07/Koi-to-uso-GIF3.gif",
    "https://i.pinimg.com/originals/98/a0/be/98a0be52e2d9615eafa12fffc0668a23.gif",
    "https://pa1.narvii.com/6318/788a292d1e017f60e2e4991d74cd21ba060890fb_hq.gif",
    "https://www.icegif.com/wp-content/uploads/anime-kiss-icegif-1.gif",
    "https://www.intoxianime.com/wp-content/uploads/2017/06/gif1-4.gif",
    "http://3.bp.blogspot.com/-aIudQs8QDi0/VSv1CrZhXlI/AAAAAAAAA14/dwthdzNydyM/s1600/Saito_x_louise3.gif",
    "https://i.pinimg.com/originals/a7/4a/bf/a74abfc0fa25c35353066b37443e74ae.gif"
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {
    return message.reply(
      "lembre-se de mencionar um usuário válido para beijar!"
    );
  }
  /*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
  let avatar = message.author.displayAvatarURL({ format: "png" });
  const embed = new Discord.MessageEmbed()
    .setTitle("Kiss")
    .setColor("#000000")
    .setDescription(`${message.author} acaba de beijar ${user}`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter("Kissu kissu kissu")
    .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
};
