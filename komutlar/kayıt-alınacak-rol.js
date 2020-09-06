const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  message.delete();
  var prefix = ayarlar.prefix;
  if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için `Sunucuyu Düzenle` iznine sahip olmalısın!').setColor('FF0000')).then(msg => msg.delete(9000))
  const kayıtsız = message.mentions.roles.first() || args.slice(0).join(" ");
  if (!kayıtsız)
    return message.channel.send(
      new Discord.RichEmbed()
        .setColor("BLACK")
        .setDescription("Lütfen bir rol etiketle!")
    );

  db.set(`rol31_${message.guild.id}`, kayıtsız.id);
  message.channel.send(
    new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    .setDescription(`**:white_check_mark: Kayıtsız Rol'ü başarıyla ${kayıtsız} olarak ayarlandı! Eğer kayıt sistemini kapatmak istersen \`Örnek: ${prefix}kayıt kapat\`**`)
    .setColor('BLACK')
    .setFooter(`Kayıt Sistemi`, client.user.avataURL)
  ).then(msg => msg.delete(15000));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["kayıtsız-rol"]
};

exports.help = {
  name: "alınacak-rol"
};