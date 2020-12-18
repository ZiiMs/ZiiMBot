const discord = require("discord.js");
const client = new discord.Client();

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log(`Botname: ${client.user.tag} | Bot ready.`);
});

client.on("message", msg => {
  if (msg.author.bot) return;
  if (
    msg.content.toLowerCase().includes("dirty buck") ||
    msg.content.toLowerCase().includes("dirtybuck")
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
