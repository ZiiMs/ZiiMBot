require("dotenv").config();
const discord = require("discord.js");
const client = new discord.Client();

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on("message", msg => {
  if (msg.author.bot) return;
  if (
    msg.content.toLowerCase() === "dirty buck" ||
    msg.content.toLowerCase() === "dirtybuck"
  ) {
    msg.channel
      .send({
        files: [
          "https://cdn.discordapp.com/attachments/477936186678050835/785732233818144808/Dirty_Buck_slays_v4.png"
        ]
      })
      .catch(console.error);
  }
});
