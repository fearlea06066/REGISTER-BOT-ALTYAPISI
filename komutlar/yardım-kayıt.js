const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {
  var prefix = ayarlar.prefix;
	 if (message.author.bot || message.channel.type === "dm") return;
const embed = new Discord.RichEmbed()
.setColor('BLACK')
.setAuthor(`Kayıt Komutları`, client.user.avatarURL) 
.setDescription(`:white_small_square:\`${prefix}kayıt (1-2-3):\` **Etiketlenen Kişiyi Kayıt Eder.**\n :white_small_square:\`${prefix}kayıtlı-rol (1-2-3):\` **Kayıt Rolünü Belirlersiniz.**\n :white_small_square:\`${prefix}kayıtsız-rol:\` **Kayıtsız Rolünü Belirlersiniz.**\n :white_small_square:\`${prefix}kayıtçı-rol:\` **Kayıt Sorumlusu Rolünü Belirlersiniz.**\n :white_small_square:\`${prefix}kayıt-kanal:\` **Kayıt Kanalını Ayarlarsınız.**\n :white_small_square:\`${prefix}kayıt-log:\` **Kayıt Log Kanalını Ayarlarsınız.**\n :white_small_square:\`${prefix}kayıt-say:\` **Yapılan Kayıt Sayısını Gösterir.**\n :white_small_square:\`${prefix}kayıt-say sıfırla:\` **Yapılan Kayıt Sayılarını Sıfırlar.**\n :white_small_square:\`${prefix}kayıtbilgi:\` **Kayıt Rollerini/Kanallarını Gösterir.**\n :white_small_square:\`${prefix}kayıt kapat:\` **Kayıt Sistemini Komple Sıfırlarsınız.** \n\n **=> EK KOMUTLAR**\n :white_small_square: \`${prefix}ppgif ayarla:\` **Rastgele PP-GIF kanalı belirlersiniz.** `)
.setThumbnail(client.user.avatarURL)

.setFooter(
      `Komutlar ${message.author.username} tarafından istendi.`,
      message.author.avatarURL
    )
message.channel.send(embed).then(msg => msg.delete(60000));
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['kayıtyardım', 'kayıt-sistemi' , 'yardım'], 
  permLevel: 0 
};

exports.help = {
  name: 'kayıtyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'kayıtyardım'
};