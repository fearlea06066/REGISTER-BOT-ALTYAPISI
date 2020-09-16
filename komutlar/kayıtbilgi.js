const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

  exports.run = async (client, message, args) => {
    const prefix = ayarlar.prefix;
    message.delete();
    const kayıtlı1 = message.guild.roles.get(db.fetch(`rol1_${message.guild.id}`)) || "Ayarlanmamış!" //buraya 1. kayıtlı rolünü gelir
    const kayıtlı2 = message.guild.roles.get(db.fetch(`kayıtlı2_${message.guild.id}`)) || "Ayarlanmamış!" //buraya 1. kayıtlı rolünü gelir
    const kayıtlı3 = message.guild.roles.get(db.fetch(`kayıtlı3_${message.guild.id}`)) || "Ayarlanmamış!" //buraya 1. kayıtlı rolünü gelir
    const kayıtsız = message.guild.roles.get(db.fetch(`rol31_${message.guild.id}`)) || "Ayarlanmamış!" //buraya kayıtsız rolü gelir
    const kayıtsorum = message.guild.roles.get(db.fetch(`rol3_${message.guild.id}`)) || "Ayarlanmamış!" //buraya kayıtsız rolü gelir
    const log = message.guild.channels.get(db.fetch(`kayıtlog_${message.guild.id}`)) || "Ayarlanmamış!" //buraya kayıt edilen kişinin log bilgileri vb düşer.
    const kanal = message.guild.channels.get(db.fetch(`kayıtk_${message.guild.id}`)) || "Ayarlanmamış!" //buraya kayıt edilen kişinin log bilgileri vb düşer.
      
      const embed = new Discord.RichEmbed()
      .setAuthor(`${message.guild.name} SUNUCUSU` , message.guild.iconURL)
    .setDescription(`**:white_small_square:\`Kayıtlı-rol(1):\`** ${kayıtlı1}\n **:white_small_square:\`Kayıtlı-rol(2):\`** ${kayıtlı2}\n **:white_small_square:\`Kayıtlı-rol(3):\`** ${kayıtlı3}\n **:white_small_square:\`Kayıtsız-rol:\`** ${kayıtsız}\n **:white_small_square:\`Kayıt-sorumlusu:\`** ${kayıtsorum}\n **:white_small_square:\`Kayıt-log:\`** ${log}\n **:white_small_square:\`Kayıt-kanal:\`** ${kanal}`)                                                                           
    .setFooter(message.author.tag , message.author.avatarURL)
    .setTimestamp()
      .setColor('BLACK')
      message.channel.send(embed)
    }
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kayıtbilgi"],
    permLevel: 0
  };
  exports.help = {
    name: "kayıtbilgi",
    description: "kayıt bilg logunu atar",
    usage: "kayıtbilgi"
  };

