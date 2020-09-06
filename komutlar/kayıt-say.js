const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

  exports.run = async (client, message, args) => {
    message.delete();
    var prefix = ayarlar.prefix;
 let uye = message.mentions.users.first()
 if(args[0] === "sıfırla") {//kayıt silme kısmı
      db.delete(`toplamkayıt.${message.author.id}.${message.guild.id}`)
    
     
   
     const emb = new Discord.RichEmbed()
     .setAuthor(client.user.username, client.user.displayAvatarURL)
     .setDescription(`**:white_check_mark: Başarılı , Kayıt Say Sistemi Sıfırlandı**`)
     .setColor('BLACK')
     .setFooter(`Kayıt Sistemi`, client.user.avataURL)
    return message.channel.send(emb).then(msg => msg.delete(15000));
    
    
   }
  
if(!args[0]) {
  const kontrol = await db.fetch(`rol3_${message.guild.id}`)
if (!kontrol) return message.channel.send(new Discord.RichEmbed().setDescription(`**Kayıt Sistemi Aktif Değil!\n Aktifleştirmek İçin \`${prefix}kayıtyardım\` yazabilirsin.**`).setColor('BLACK')).then(msg => msg.delete(10000));
const data = await db.fetch(`toplamkayıt.${message.author.id}.${message.guild.id}`)
if (!data) return message.channel.send(new Discord.RichEmbed().setDescription(`<@${message.author.id}> Hiç Kayıt Yapmamışsın!`).setColor('BLACK')).then(msg => msg.delete(10000));
const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setColor('BLACK')
.setThumbnail(message.author.avatarURL)
.setDescription(`<@${message.author.id}> Toplam \`${data ? data : '0'}\` Kişi Kaydetmişsin.`)
.setFooter(
      `Komut ${message.author.username} tarafından istendi.`,
      message.author.avatarURL
    )
message.channel.send(emb).then(msg => msg.delete(30000));
} 
if(uye) {
const kontrol = await db.fetch(`rol3_${message.guild.id}`)
if (!kontrol) return message.channel.send(new Discord.RichEmbed().setDescription(`**Kayıt Sistemi Aktif Değil!\n Aktifleştirmek için \`${prefix}kayıtyardım\` yazabilirsin.**`).setColor('BLACK')).then(msg => msg.delete(10000));
const data = await db.fetch(`toplamkayıt.${uye.id}.${message.guild.id}`) 
if (!data) return message.channel.send(new Discord.RichEmbed().setDescription(`${uye} Adlı Kullanıcı Hiç Kayıt Yapmamış!`).setColor('BLACK')).then(msg => msg.delete(10000));
const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setColor('BLACK')
.setThumbnail(message.mentions.users.first().avatarURL)
.setDescription(`${uye} Adlı Kişi Toplam \`${data ? data : '0'}\` Kişi Kaydetmiş.`)
.setFooter(
      `Komut ${message.author.username} tarafından istendi.`,
      message.author.avatarURL
    )
message.channel.send(emb).then(msg => msg.delete(30000));
}
}
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-say', 'kayıtsay'],
  permLevel: 0,
};

exports.help = {
  name: 'kayıtsay',
  description: 'kayıt sayar',
  usage: 'kayıtsay',
};

