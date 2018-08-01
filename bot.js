const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '£'
const devs = ['448444251504640012',''];
const adminprefix = "£";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`£help | £inv  | `,"http://www.twitch.tv/xxomar360")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["418705499031076864"];
if (message.content.startsWith(prefix + 'ownerbot')) {
    if(!message.channel.guild) return;
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**انت صاحب البوت **")
} else {
   message.reply("**انت لسا صاحب البوت**");   
}
}
});   


client.on('message', message => {
    if (message.content.startsWith("£bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});

 client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('£bcall')){
 if (message.author.id !== '418705499031076864') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '418705499031076864') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

 client.on('message', message => {
  
    if(message.content.split(' ')[0] == '£msg'){
         if(!message.channel.guild) return;
                            let args = message.content.split(' ').slice(1).join(' ');
    
    client.guilds.get("425771794989842450").members.get("418705499031076864").sendMessage(message.author.tag+"\n Message : "+args)
    
                                                    let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username, message.author.avatarURL)
                                                    .setDescription('📬 تم ارسال صاحب البوت بنجاح')
                                                    .setThumbnail(message.author.avatarURL)
                                                    .setFooter(message.author.username, message.author.avatarURL)
                                                    message.channel.sendEmbed(embed);}
                                                  });
  
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {
var prefix = "-";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }
       
});






client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '£Botserver') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })

           client.on('message', message => {
                 var prefix = "£";
                if(message.content === prefix + "inv") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: اضغط هنا  لادخل البوت :arrow_left:**")
                    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=471326995469434880&permissions=8&scope=bot");
                   message.channel.sendEmbed(embed);
                  }
});





client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "bot owner") {


 message.author.sendMessage(`
 
 __~~Games Station Arabic~~__
♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ 
 __created By__: Omar

Server Support : https://discord.gg/MCxDhVr

bot link : https://discordapp.com/api/oauth2/authorize?client_id=471326995469434880&permissions=8&scope=bot
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});




client.on('message', message => {
    if(message.content.startsWith(prefix + 'move all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });
  
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
 **
__~~Games Station Arabic Bot~~__ By: Omar

╔[❖════════════❖]╗
             Prefix = ' £ '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
              Commands
╚[❖════════════❖]╝


❖ £bans ➾ عدد اشخاص المبندة من السيرفر

❖ £bcall ➾ بروتكاست  لصاحب البوت فقط

❖ £ownerbot ➾ لمعرفة من هو صاحب البوت 

❖ £move all ➾ سحب الجميع لا رووم الي انت فيها

❖ £mutechannel ➾ قفل الشات

❖ £unmutechannel ➾ فقح الشات 

❖ £Botserver ➾  سيرفرات المتواجد فيها البوت 

❖ £inv ➾  رابط البوت

❖ £msg ➾ ارسال رساله لصاحب البوت

╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

to enable welcome message do channel name "welcome"


==================================================================

Server support: https://discord.gg/MCxDhVr

==================================================================

bot invite link: https://discordapp.com/oauth2/authorize?client_id=471326995469434880&permissions=8&scope=bot

==================================================================
**
`);

    }
});



client.on('voiceStateUpdate', (u, member) => {
  var parent = '474299582055186437';
  var channel = '474315145485746196';
  if(member.voiceChannel === null || member.voiceChannel !== member.guild.channels.get(channel)) return console.log(`${member.user.username}'s channel isnt the needed one.`);
  member.guild.createChannel(`${member.user.username}`, 'voice').then(c => {
  client.channels.get(parent).overwritePermissions(member, {
                                CONNECT:false,
                                         SPEAK:false
})

    if(!c) return;
    c.setParent(parent);
    member.setVoiceChannel(c);
    setInterval(() => {
      if(!c) return;
      if(c.members.size === 0) {
        c.delete();
  client.channels.get(parent).overwritePermissions(member, {
                                CONNECT:true,
                                         SPEAK:true
        })

      }
    }, 30000);
  });
});





client.login(process.env.BOT_TOKEN);
