const express = require('express');
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const db = require('quick.db');
const moment = require('moment');

require('./util/eventLoader.js')(client);
var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

process.on('unhandledRejection', error => {
 {}
});



client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.on("guildCreate", guild => { // Birisi botu sunucuya attıgında bot özel mesaj atar.
const tesekkurler = new Discord.RichEmbed()
.setTitle(`KAYIT-BOT | Bilgilendirme`)
.setTimestamp()
.setColor("RANDOM")
.setDescription(`Beni Sunucuna Eklediğin İçin Teşekkür Ederim \n Sana En İyi Şekilde Hizmet Edeceğim.\n Komutlarımız için **.komutlar** komutunu kullanınız.`)
guild.owner.send(tesekkurler)


});

client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\


//kayıt rol verme
client.on('guildMemberAdd', async member => {
  let rol = await db.fetch(`rol31_${member.guild.id}`);
   {
  if (!rol) return;
  member.addRole(member.guild.roles.get(rol))
  member.setNickname(`İsim | Yaş`)
  }
});

//ayarlanabilir birisi fotoğraf değiştirince atma
client.on('userUpdate', async (oldUser, newUser) => {
  if(oldUser.avatarURL !== newUser.avatarURL) {
  
    client.guilds.forEach(async guild => {
    if(guild.members.get(newUser.id)) {
    
    const channeldata = await require('quick.db').fetch(`ppgif.${guild.id}`)
    if(!channeldata) return;
    let channel = await guild.channels.get(channeldata)
    
    let avatar = new Discord.Attachment(newUser.avatarURL)
    let gifkontrol = newUser.avatarURL.includes('.gif') ? `**[[GIF]](${newUser.avatarURL})**` : `~~**[GIF]**~~`  
    const embed = new Discord.RichEmbed().setColor('BLACK').setAuthor(newUser.tag).setImage(newUser.avatarURL).setDescription(`${gifkontrol} | **[[PNG]](${newUser.avatarURL.replace('.gif', '.png').replace('.jpg', '.png').replace('.webp', '.png')})** | **[[JPG]](${newUser.avatarURL.replace('.png', '.jpg').replace('.gif', '.jpg').replace('.webp', '.jpg')})** | **[[WEBP]](${newUser.avatarURL.replace('.gif', '.webp').replace('.png', '.webp').replace('.jpg', '.webp')})**`)
    return channel.send(embed)
  
    }
    })
  }
  });


//kişi sunucuya girdiğinde atılacak mesaj vb kısmı
client.on("guildMemberAdd", async member => {
	let username = member.user.username;
	let user = client.users.get(member.id);
  const channel = await db.fetch(`kayıtk_${member.guild.id}`);
  const kayıtcı = member.guild.roles.get(db.fetch(`rol3_${member.guild.id}`));
   if(!channel) return;
   let aylartoplam = {
    "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
  let aylar = aylartoplam;
require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment.duration(kurulus).format("D")   
    var kontrol;
    if (gün < 10) kontrol = '__\**Hesabı Şüpheli!**\__ :no_entry:'
    if (gün > 10) kontrol = '__\**Hesabı Güvenli!**\__ :white_check_mark:'   
  const emb = new Discord.RichEmbed()
  .setAuthor(member.user.username, member.user.displayAvatarURL)
  .setThumbnail(member.user.displayAvatarURL)
  .setDescription(`**:white_small_square: __\`\`${member.guild.name}\`\`__ Sunucusuna Hoşgeldin ${user}!\n :white_small_square: Seninle birlikte __\`\`${member.guild.memberCount}\`\`__ kişi olduk\n :white_small_square: ${kayıtcı} rolündeki arkadaşlar seninle ilgilenecektir. \n :white_small_square: İsim ve sınıf belirtmen yeterli!** \n :white_small_square: __\**Hesap Kuruluş Tarih :**\__ \`\`${moment(user.createdAt).format('DD')} ${aylar[moment(user.createdAt).format('MM')]} ${moment(user.createdAt).format('YYYY | HH:mm:ss')}\`\` \n :white_small_square: **Bu kullanıcı:** ${kontrol}`)
  .setColor('BLACK')
  .setFooter(`Kayıt Sistemi`, client.user.avataURL)
   member.guild.channels.get(channel).send(emb);
});


