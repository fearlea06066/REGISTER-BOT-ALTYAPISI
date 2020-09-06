const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
 
  let msg = message
   const calısma = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const embedci = new Discord.RichEmbed()
  .setColor("#36393f")
  .setTitle('İstatistikler:')
  .setThumbnail('https://cdn.discordapp.com/attachments/713453363815252011/743571911749009559/Pngtreevector_stats_icon_4142334.png')
  .setFooter('KAYIT-BOT | İstatistik', bot.user.avatarURL)
  .addField("**Botun Sahibi**", " <@sahip id> ")
  .addField("**Bellek Kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("**Çalışma Süresi**", calısma, true)
  .addField('**Kullanıcılar**:', bot.guilds.reduce((a, b) => a + b.memberCount, 0), true)
  .addField("**Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("**Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("**Discord.JS Sürüm**", "v"+Discord.version, true)
  .addField("**Node.JS Sürüm**", `${process.version}`, true)
  .addField("**Ping**", bot.ping+" ms", true)
  .addField("**Bot Davet**", "[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=736935878739492875&scope=bot&permissions=842014782)", false)
  .addField("**Destek Sunucusu**", " [Destek Sunucusu](https://discord.gg/sypKJSB)", true)
  
 return message.channel.send(embedci);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i' , 'botdurum'],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};