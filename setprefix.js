const db = require("quick.db");

module.exports = {
  config: {
    name: "setprefix",
    aliases: ["sp", "prefix"],
    category: "moderation",
    description: "Define o prefixo personalizado",
    usage: "[prefix]",
    accessableby: "Administrators"
  },
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**Você não tem permissões suficientes! - [ADMINISTRATOR]**"
      );

    if (!args[0]) {
      let b = await db.fetch(`prefix_${message.guild.id}`);
      if (b) {
        return message.channel.send(`**Prefix Of This Server is \`${b}\`**`);
      } else return message.channel.send("**Digite um prefixo para definir!**");
    }

    try {
      let a = args.join(" ");
      let b = await db.fetch(`prefix_${message.guild.id}`);

      if (a === b) {
        return message.channel.send("**Este já é o prefixo do servidor!**");
      } else {
        db.set(`prefix_${message.guild.id}`, a.toLowerCase());

        return message.channel.send(
          `**Successfuly Set Server Prefix To \`${a}\`**`
        );
      }
    } catch (e) {
      console.log(e);
    }
  }
};
