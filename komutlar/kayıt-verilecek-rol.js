const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  message.delete();
  var prefix = ayarlar.prefix;
  if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için `Sunucuyu Düzenle` iznine sahip olmalısın!').setColor('FF0000')).then(msg => msg.delete(9000))
  let rol = message.mentions.roles.first();
  
  //ANA ROL EKLEME KISMI
  if(args[0] === '1') {
    if(!args[1]) return message.channel.send(new Discord.RichEmbed().setColor('#FF69B4').setThumbnail(client.user.avatarURL).setDescription(`Bir rol etiketlemelisin.`))
    db.set(`rol1_${message.guild.id}`, rol.id)//kayıt2 kurma
    
    const emb = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL)
      .setDescription(`**:white_check_mark: Kayıtlı-1 Rol'ü başarıyla ${rol} olarak ayarlandı! Eğer kayıt sistemini kapatmak istersen \`Örnek: ${prefix}kayıt kapat\`**`)
      .setColor('BLACK')
      .setFooter(`Kayıt Sistemi`, client.user.avataURL)
      message.channel.send(emb).then(msg => msg.delete(15000));
    
    }
 //BURASI EK OLARAK ROL EKLEME KISMIDIR
if(args[0] === '2') {
if(!args[1]) return message.channel.send(new Discord.RichEmbed().setColor('#FF69B4').setThumbnail(client.user.avatarURL).setDescription(`Bir rol etiketlemelisin.`))
db.set(`kayıtlı2_${message.guild.id}`, rol.id)//kayıt2 kurma

const emb = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.displayAvatarURL)
  .setDescription(`**:white_check_mark: Kayıtlı-2 Rol'ü başarıyla ${rol} olarak ayarlandı! Eğer kayıt sistemini kapatmak istersen \`Örnek: ${prefix}kayıt kapat\`**`)
  .setColor('BLACK')
  .setFooter(`Kayıt Sistemi`, client.user.avataURL)
  message.channel.send(emb).then(msg => msg.delete(15000));

}
if(args[0] === '3') {
 if(!args[1]) return message.channel.send(new Discord.RichEmbed().setColor('#FF69B4').setThumbnail(client.user.avatarURL).setDescription(`Bir rol etiketlemelisin.`))
db.set(`kayıtlı3_${message.guild.id}`, rol.id)//kayıt3 kurma

const emb = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.displayAvatarURL)
  .setDescription(`**:white_check_mark: Kayıtlı-3 Rol'ü başarıyla ${rol} olarak ayarlandı! Eğer kayıt sistemini kapatmak istersen \`Örnek: ${prefix}kayıt kapat\`**`)
  .setColor('BLACK')
  .setFooter(`Kayıt Sistemi`, client.user.avataURL)
  message.channel.send(emb).then(msg => msg.delete(15000));

}

if (!rol) return message.channel.send(
  new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`Lütfen kayıt rolünün sayısını belirtin! \n \`Örnek: ${prefix}kayıtlı-rol 1/2/3 @rol\``)
);
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['kayıtlı-rol'],
 permLevel: 0,
  kategori:"yetkili"
};

exports.help = {
 name: 'kayıt-rol',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};