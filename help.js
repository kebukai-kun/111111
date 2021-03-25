const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#08ddf5")
    .setDescription(` Minha lista de comandos ${message.author}`)
    .setTimestamp()
    .setFooter(` Comando feito pelo usuario: ${message.author.username} `)
    .addFields(
      {
        name: "lock",
        value: `fechar os canais`,
        inline: true
      },
      {
        name: "punch",
        value: `dar um soco em alguem`,
        inline: true
      },
      {
        name: "ban",
        value: `Banir qualquer pessoa com um tiro sem conhecer ninguém xD`,
        inline: true
      },
      {
        name: "coinflip",
        value: `cara ou coroa`,
        inline: true
      },
      {
        name: "kiss",
        name: "mute",
        value: `Silenciar qualquer pessoa que quebrar as regras`,
        inline: true
      },

      {
        name: "delete",
        value: `exclua esta lixeira!`,
        inline: true
      },
      {
        name: "give-roles",
        value: `dar cargos para alguen`,
        inline: true
      },
      {
        name: "kick",
        value: `Chute qualquer um com um tiro xD`,
        inline: true
      },
      {
        name: "say",
        value: `fazer o bot repetir a mesma coisa que vc falar`,
        inline: true
      },
      {
        name: "setnick",
        value: `Define ou altera o apelido de um usuário`,
        inline: true
      },
      {
        name: "setprefix",
        value: `Define o prefixo personalizado do bot`,
        inline: true
      },
      {
        name: "unmute",
        value: `dessilenciar qualquer pessoa`,
        inline: true
      },
      {
        name: "rip",
        value: `colocar alguem em um funeral`,
        inline: true
      },
      {
        name: "owofy",
        value: `trasformar sua frase em owofy`,
        inline: true
      },
      {
        name: "ping",
        value: `mostra o ping do bot`,
        inline: true
      },
      {
        name: "color",
        value: `escolher a cor entre vermelho verde e azul`,
        inline: true
      },
      {
        name: "poke",
        value: `cutucar alguem`,
        inline: true
      },
      {
        name: "affect",
        value: `isso não afetará meu bebê!`,
        inline: true
      },
      {
        name: "poll",
        value: `votação`,
        inline: true
      },
      {
        name: "beautiful",
        value: `isso e lindo`,
        inline: true
      },
      {
        name: "ship",
        value: `para shipar vc com outra pessoa`,
        inline: true
      },
      {
        name: "avatar",
        value: `para aparecer sua imagem de avatar do discord`,
        inline: true
      },
      {
        name: "tomas",
        value: `trasformar alguem em um trem`,
        inline: true
      }
    );
  message.channel.send(embed);
};
