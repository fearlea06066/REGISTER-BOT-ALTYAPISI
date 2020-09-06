const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
    let pingembed = new Discord.RichEmbed()
        .setColor("#36393f")
        .setDescription(`Test Ediliyor......`)
        .setTimestamp()
    const message = msg
    const m = await msg.channel.send(pingembed);
    let embed = new Discord.RichEmbed()
        .setColor("#36393f")
        .addField(`📶 Mesaj Gecikme Süresi`, `${m.createdTimestamp - msg.createdTimestamp}ms`, true)
        .addField(`💻 Bot Gecikme Süresi`, `${Math.round(client.ping)}ms`, true)
        .setAuthor(client.user.username, client.user.avatarURL)
    m.edit({ embed });
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ping"],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: '',
  usage: 'ping'
};
