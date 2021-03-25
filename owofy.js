const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let sentence = args.join(' ');
    if (!sentence) return message.reply('Não consigo enviar uma mensagem vazia! uwu');
    
    let faces=["(・`ω´・)",";;w;;","owo","UwU",">w<","^w^"];

    let newSentence = sentence.replace(/[lr]/g, 'w');
      newSentence = newSentence.replace(/(?:r|l)/g, "w");
      newSentence = newSentence.replace(/(?:R|L)/g, "W");
      newSentence = newSentence.replace(/n([aeiou])/g, 'ny$1');
      newSentence = newSentence.replace(/N([aeiou])/g, 'Ny$1');
      newSentence = newSentence.replace(/N([AEIOU])/g, 'NY$1');
      newSentence = newSentence.replace(/ove/g, "uv");
      newSentence = newSentence.replace(/\!+/g, " "+ faces[Math.floor(Math.random()*faces.length)]+ " ");
    // fuck you this is now finished
    message.channel.send(newSentence);
}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "fun",
    name: "owofy",
    description: "O comando `owofy` pega o texto e o copia! Apenas experimente e você entenderá a essência.",
    usage: "`yabe owofy <texto para passar pelo processo de owoficação>`"
}