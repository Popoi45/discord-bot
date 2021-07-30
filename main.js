const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "--";

client.once("ready", () => {
    console.log("super-klass ozil")
});

client.on("message", messege => {
    if (!messege.content.startsWith(prefix) || messege.author.bot) return;

    const args = messege.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        messege.channel.send("pong!");
    } else if (command == "steam") {
        messege.channel.send('https://steamcommunity.com/profiles/76561198314491715/');
    }

});



client.login("ODcwNjIzMTMyMDkwNzY5NDM4.YQPc-g.ESs_PanEIC1cV3YQmas0WOhZKHs");