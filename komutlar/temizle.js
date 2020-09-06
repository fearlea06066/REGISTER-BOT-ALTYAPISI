const Discord = require('discord.js');

exports.run = function(client, message, args) {
    let bs = args.slice(0).join('+');
  
  let id = Number(args[0]);
   
   
    if(isNaN(id)) return message.channel.send(new Discord.RichEmbed().setColor('FF0000').setDescription(":warning:  **Lütfen Bir Sayı Giriniz, Örnek: d!temizle 10** :warning: ")).then(msg => msg.delete(15000));
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için `Mesajları Düzenle` iznine sahip olmalısın!').setColor('FF0000')).then(msg => msg.delete(9000))
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${args[0]} Adet Mesajı Sildim. :put_litter_in_its_place:`).then(msg => msg.delete(7000));
    const botunmesajyonet = new Discord.RichEmbed()
    let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor('BLACK')
    .setTimestamp()
    .addField('🌍 Eylem:', 'Sohbet silme')
    .addField('👨 Yetkili: ', message.author.username)
    .addField('🔥 Sonuç: ', `Başarılı`)
    .addField('📝 Kaç Adet', + messagecount)
    .setFooter(`BOT ADI`, client.user.avatarURL)
    return message.channel.send(sohbetsilindi).then(msg => msg.delete(7000));

})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil','süpür','temizle'],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};