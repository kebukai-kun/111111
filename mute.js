const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",

  description: "Silenciar qualquer pessoa que quebrar as regras",

  category: "moderation",

  usage: "mute <@mention> <reason>",

  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Desculpe, mas você não tem permissão para silenciar ninguém"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("não tem permissão para gerenciar funções.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Mencione o membro para quem você deseja silenciar"
      );
    }

    if (user.id === message.author.id) {
      return message.channel.send("Não vou silenciar você -_-");
    }

    let reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(
        "Por favor, dê o motivo para silenciar o membro"
      );
    }

    //TIME TO LET MUTED ROLE

    let muterole = message.guild.roles.cache.find(x => x.name === "Mutado");

    if (!muterole) {
      return message.channel.send(
        "Este servidor não tem função com o nome `Muted`"
      );
    }

    if (user.roles.cache.has(muterole)) {
      return message.channel.send("O usuário fornecido já está silenciado");
    }

    user.roles.add(muterole);

    await message.channel.send(
      `You muted **${
        message.mentions.users.first().username
      }** For \`${reason}\``
    );

    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``);

    //WE ARE DONE HERE
  }
};
