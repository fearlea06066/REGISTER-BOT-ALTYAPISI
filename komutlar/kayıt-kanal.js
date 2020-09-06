const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  message.delete();
  var prefix = ayarlar.prefix;
  if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için `Sunucuyu Düzenle` iznine sahip olmalısın!').setColor('FF0000')).then(msg => msg.delete(9000))
    let kanal = message.mentions.channels.first()
  if (!kanal) return message.channel.send(new Discord.RichEmbed().setDescription('**Kayıt Kanalı için bir kanal etiketlemelisiniz!**').setColor('FF0000')).then(msg => msg.delete(9000))
  
  db.set(`kayıtk_${message.guild.id}`, kanal.id)//kayıt kanal kurma
  
  const emb = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.displayAvatarURL)
  .setDescription(`**:white_check_mark: Kayıt Kanalı başarıyla ${kanal} olarak ayarlandı!\n Bildirimler Buraya Düçecektir => ${kanal}\n Eğer kayıt sistemini kapatmak istersen \`Örnek: ${prefix}kayıt kapat\`**`)
  .setColor('BLACK')
  .setFooter(`Kayıt Sistemi`, client.user.avataURL)
  message.channel.send(emb).then(msg => msg.delete(15000));

 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0,
kategori:"yetkili"
};

exports.help = {
 name: 'kayıt-kanal',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'kayıt-kanal <#kanal>'
};