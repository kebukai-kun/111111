const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(
    `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))
    return;
  if (
    message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)
  )
    return;

  const args = message.content
    .trim()
    .slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error("Erro:" + err);
  }
});

client.on("ready", () => {
  console.log("Estou Online");
});

client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda.`,
      `${client.guilds.cache.size} servidores.`,
      `${client.channels.cache.size} canais.`,
      `${client.users.cache.size} usuários.`
    ],
    i = 0;
  setInterval(
    () =>
      client.user.setAcitivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }),
    5000 * 60 * 60
  ); //WATCHING, LISTENINGM PLAYING, STREAMING
  client.user
    .setStatus("online") //idle, dnd, online, invisible
    .catch(console.log);
  console.log("Estou Online!");
});

client.login("coloque o token aqui").catch(console.error);
