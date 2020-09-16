const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

  exports.run = async (client, message, args) => {
    message.delete();
    var prefix = ayarlar.prefix;
    if(!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`Bir Kayıt Numarası Girmelisin \`Örnek: ${prefix}kayıt 1/2/3\` `).setColor('#FF69B4')).then(msg => msg.delete(8000));
    if(args[0] === "kapat") {//kayıt silme kısmı
  
      db.delete(`kayıtlog_${message.guild.id}`)
     db.delete(`rol1_${message.guild.id}`)
     db.delete(`kayıtk_${message.guild.id}`)
     db.delete(`rol31_${message.guild.id}`)
     db.delete(`rol3_${message.guild.id}`)
     db.delete(`kayıtlı3_${message.guild.id}`)
     db.delete(`kayıtlı2_${message.guild.id}`)

     const emb = new Discord.RichEmbed()
     .setAuthor(client.user.username, client.user.displayAvatarURL)
     .setDescription(`**:white_check_mark: Başarılı , Kayıt Sistemi Kapatıldı**`)
     .setColor('#FF69B4')
     .setFooter(`-Diana- | Kayıt Sistemi`, client.user.avataURL)
    return message.channel.send(emb).then(msg => msg.delete(18000));
    
   }
   if(args[0] === "1") {
    const kayıtlı1 = message.guild.roles.get(db.fetch(`rol1_${message.guild.id}`)); //buraya 1. kayıtlı rolünü gelir
    const misafir = message.guild.roles.get(db.fetch(`rol31_${message.guild.id}`)); //buraya kayıtsız rolü gelir
    const sorumlu = message.guild.roles.get(db.fetch(`rol3_${message.guild.id}`)); //buraya kayıt sorumlusu rolü gelir
    const log = message.guild.channels.get(db.fetch(`kayıtlog_${message.guild.id}`)); //buraya kayıt edilen kişinin log bilgileri vb düşer.
    if (!sorumlu) return message.channel.send(new Discord.RichEmbed().setDescription(`**Sorumlu Rolü Ayarlanmamış!\n Ayaralamak için \`${prefix}kayıtçı-rol @rol\`**`).setColor('#FF69B4')).then(msg => msg.delete(10000));
    if (!kayıtlı1) return message.channel.send(new Discord.RichEmbed().setDescription(`**Kayıtlı-Rol(1) Ayarlanmamış!\n Ayaralamak için \`${prefix}kayıtlı-rol 1 @rol\`**`).setColor('#FF69B4')).then(msg => msg.delete(10000));
    if(!message.member.roles.get(db.fetch(`rol3_${message.guild.id}`))) { //buraya kayıt sorumlusu rolünün id'sini giriniz.
      return message.channel.send(new Discord.RichEmbed().setDescription("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.").setColor('#FF69B4')).then(msg => msg.delete(10000));
    } else {
      const kişi = args[1];
      let kişisay = message.mentions.users.first() || client.users.get(args.join(' '))
      db.add(`toplamkayıt.${message.author.id}.${message.guild.id}`, 1)//kayıt sayınıza 1 eklenir
        if(!args[1]) return message.channel.send(new Discord.RichEmbed().setDescription("Bir kullanıcıyı etiketleyin veya ismini girin.").setColor('#FF69B4')).then(msg => msg.delete(8000));
      const kayıtsay = db.fetch(`toplamkayıt.${message.author.id}.${message.guild.id}`); //yapılan kayıt sayısının fetchlenmesi
      const c = message.guild.member(kişisay)
      const nick = args[2];
      const yas = args[3];
        if(!nick) return message.channel.send(new Discord.RichEmbed().setDescription("Bir isim giriniz.").setColor('#FF69B4')).then(msg => msg.delete(8000));
        if(!yas) return message.channel.send(new Discord.RichEmbed().setDescription("Bir yaş giriniz.").setColor('#FF69B4')).then(msg => msg.delete(8000));
      c.addRole(kayıtlı1)
      c.removeRole(misafir)
      c.setNickname(` ${nick} | ${yas}`)
      const embed = new Discord.RichEmbed()
      .addField(`Kayıt Başarılı!`, `**:white_small_square: \`${kişisay.username}\` adlı üyeye \`${message.author.username}\` tarafından ${kayıtlı1} rolü verildi.\n :white_small_square: İsmi \` ${nick} \` Yaşı \` ${yas} \` olarak ayarlandı! \n :white_small_square: \`${message.author.username}\` Kayıt sayınız \` ${kayıtsay} \` olarak güncellendi.**`)                                                                             
    .setFooter(message.author.tag , message.author.avatarURL)
    .setTimestamp()
      .setColor('#FF69B4')
      log.send(embed)   
    }
  }


   if(args[0] === "2") {//kayıt 2
    const kayıtlı2 = message.guild.roles.get(db.fetch(`kayıtlı2_${message.guild.id}`)); //buraya 2. kayıtlı rolünü gelir
    const misafir = message.guild.roles.get(db.fetch(`rol31_${message.guild.id}`)); //buraya kayıtsız rolü gelir
    const sorumlu = message.guild.roles.get(db.fetch(`rol3_${message.guild.id}`)); //buraya kayıt sorumlusu rolü gelir
    const log = message.guild.channels.get(db.fetch(`kayıtlog_${message.guild.id}`)); //buraya kayıt edilen kişinin log bilgileri vb düşer.
    if (!sorumlu) return message.channel.send(new Discord.RichEmbed().setDescription(`**Sorumlu Rolü Ayarlanmamış!\n Ayaralamak için \`${prefix}kayıtçı-rol @rol\`**`).setColor('#FF69B4')).then(msg => msg.delete(10000));
    if (!kayıtlı2) return message.channel.send(new Discord.RichEmbed().setDescription(`**Kayıtlı-Rol(2) Ayarlanmamış!\n Ayaralamak için \`${prefix}kayıtlı-rol 2 @rol\`**`).setColor('#FF69B4')).then(msg => msg.delete(8000));
    if(args[0] === member) return message.channel.send(new Discord.RichEmbed().setDescription(`Bir Kayıt Numarası Girmelisin \`Örnek: ${prefix}kayıt 1/2/3\` `).setColor('#FF69B4')).then(msg => msg.delete(8000));
    if(!message.member.roles.get(db.fetch(`rol3_${message.guild.id}`))) { //buraya kayıt sorumlusu rolünün id'sini giriniz.
      return message.channel.send(new Discord.RichEmbed().setDescription("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.").setColor('#FF69B4')).then(msg => msg.delete(10000));
    } else {
      const kişi = args[1];
      let kişisay = message.mentions.users.first() || client.users.get(args.join(' '))
      db.add(`toplamkayıt.${message.author.id}.${message.guild.id}`, 1)//kayıt sayınıza 1 eklenir
        if(!args[1]) return message.channel.send(new Discord.RichEmbed().setDescription("Bir kullanıcıyı etiketleyin veya ismini girin.").setColor('#FF69B4')).then(msg => msg.delete(8000));
        const kayıtsay = db.fetch(`toplamkayıt.${message.author.id}.${message.guild.id}`); //yapılan kayıt sayısının fetchlenmesi
      const c = message.guild.member(kişisay)
      const nick = args[2];
      const yas = args[3];
        if(!nick) return message.channel.send(new Discord.RichEmbed().setDescription("Bir isim giriniz.").setColor('#FF69B4')).then(msg => msg.delete(8000));
        if(!yas) return message.channel.send(new Discord.RichEmbed().setDescription("Bir yaş giriniz.").setColor('#FF69B4')).then(msg => msg.delete(8000));
      c.addRole(kayıtlı2)
      c.removeRole(misafir)
      c.setNickname(` ${nick} | ${yas}`)
      const embed = new Discord.RichEmbed()
      .addField(`Kayıt Başarılı!`, `**:white_small_square: \`${kişisay.username}\` adlı üyeye \`${message.author.username}\` tarafından ${kayıtlı2} rolü verildi.\n :white_small_square: İsmi \` ${nick} \` Yaşı \` ${yas} \` olarak ayarlandı! \n :white_small_square: \`${message.author.username}\` Kayıt sayınız \` ${kayıtsay} \` olarak güncellendi.**`)                                                                                    
    .setFooter(message.author.tag , message.author.avatarURL)
    .setTimestamp()
      .setColor('#FF69B4')
      log.send(embed)
    }
  }


    if(args[0] === "3") {//kayıt 2
      const kayıtlı3 = message.guild.roles.get(db.fetch(`kayıtlı3_${message.guild.id}`));  //buraya 3. kayıtlı rolünü gelir
      const misafir = message.guild.roles.get(db.fetch(`rol31_${message.guild.id}`)); //buraya kayıtsız rolü gelir
      const sorumlu = message.guild.roles.get(db.fetch(`rol3_${message.guild.id}`)); //buraya kayıt sorumlusu rolü gelir
      const log = message.guild.channels.get(db.fetch(`kayıtlog_${message.guild.id}`)); //buraya kayıt edilen kişinin log bilgileri vb düşer.
      if (!sorumlu) return message.channel.send(new Discord.RichEmbed().setDescription(`**Sorumlu Rolü Ayarlanmamış!\n Ayaralamak için \`${prefix}kayıtçı-rol @rol\`**`).setColor('#FF69B4')).then(msg => msg.delete(10000));
      if (!kayıtlı3) return message.channel.send(new Discord.RichEmbed().setDescription(`**Kayıtlı-Rol(3) Ayarlanmamış!\n Ayaralamak için \`${prefix}kayıtlı-rol 3 @rol\`**`).setColor('#FF69B4')).then(msg => msg.delete(8000));
      if(!message.member.roles.get(db.fetch(`rol3_${message.guild.id}`))) { //buraya kayıt sorumlusu rolünün id'sini giriniz.
        return message.channel.send(new Discord.RichEmbed().setDescription("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.").setColor('#FF69B4')).then(msg => msg.delete(10000));
      } else {
        const kişi = args[1];
        let kişisay = message.mentions.users.first() || client.users.get(args.join(' '))
        db.add(`toplamkayıt.${message.author.id}.${message.guild.id}`, 1)//kayıt sayınıza 1 eklenir
          if(!args[1]) return message.channel.send(new Discord.RichEmbed().setDescription("Bir kullanıcıyı etiketleyin veya ismini girin.").setColor('#FF69B4')).then(msg => msg.delete(8000));
        const kayıtsay = db.fetch(`toplamkayıt.${message.author.id}.${message.guild.id}`); //yapılan kayıt sayısının fetchlenmesi
        const c = message.guild.member(kişisay)
        const nick = args[2];
        const yas = args[3];
          if(!nick) return message.channel.send(new Discord.RichEmbed().setDescription("Bir isim giriniz.").setColor('#FF69B4')).then(msg => msg.delete(8000));
          if(!yas) return message.channel.send(new Discord.RichEmbed().setDescription("Bir yaş giriniz.").setColor('#FF69B4')).then(msg => msg.delete(8000));
        c.addRole(kayıtlı3)
        c.removeRole(misafir)
        c.setNickname(` ${nick} | ${yas}` )
        const embed = new Discord.RichEmbed()
        .addField(`Kayıt Başarılı!`, `**:white_small_square: \`${kişisay.username}\` adlı üyeye \`${message.author.username}\` tarafından ${kayıtlı3} rolü verildi.\n :white_small_square: İsmi \` ${nick} \` Yaşı \` ${yas} \` olarak ayarlandı! \n :white_small_square: \`${message.author.username}\` Kayıt sayınız \` ${kayıtsay} \` olarak güncellendi.**`)                                                                                      
      .setFooter(message.author.tag , message.author.avatarURL)
      .setTimestamp()
        .setColor('#FF69B4')
        log.send(embed)
      
      
      }
    }

  }
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıt'],
    permLevel: 0
  };
  exports.help = {
    name: "kayıt",
    description: "kayıt",
    usage: "kayıt"
  };

