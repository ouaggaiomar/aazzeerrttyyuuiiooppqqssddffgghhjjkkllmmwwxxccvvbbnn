const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '£'
const devs = ['448444251504640012',''];
const adminprefix = "£";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`£help | £invite  | `,"http://www.twitch.tv/xxomar360")
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

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});
   client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('من تصميم ',`Omar#0616`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('!Mhstr')){
 if (message.author.id !== '389090790984515594') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
 client.on("ready", () => {

    var guild;

    while (!guild)

        guild = client.guilds.get("425771794989842450- Server id");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            dat[Inv] = Invite.uses;

        });

    });

});
  




client.on("guildMemberAdd", (member) => {

    let channel = member.guild.channels.get("426048321786740746- Room id");

    if (!channel) {

        console.log("!the channel id it's not correct");

        return;

    }

    if (member.id == client.user.id) {

        return;

    }

    console.log('-');

    var guild;

    while (!guild)

        guild = client.guilds.get("425771794989842450- Server id");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            if (dat[Inv])

                if (dat[Inv] < Invite.uses) {

 channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;       

 }

            dat[Inv] = Invite.uses;

       

       });

    });

});
 client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user} هاهاهاا , كشفتك وانت تكتب ي اوف لاين`)
        .then(msg => {
            msg.delete(10000)
        })
    }
})
 client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})  
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
  
Save New Duplicate & Edit Just Text Twitter
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
const Discord = require('discord.js');
const client = new Discord.Client();
//By OMAR#0616 //By OMAR#0616 
//جميع الحقوق محفوظهه عمر فقط . 
client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '472457173402910740').setName("W");
client.channels.find('id', '472457173402910740').setName("We");
client.channels.find('id', '472457173402910740').setName("Wel");
client.channels.find('id', '472457173402910740').setName("Welc");
client.channels.find('id', '472457173402910740').setName("Welco");
client.channels.find('id', '472457173402910740').setName("Welcom");
client.channels.find('id', '472457173402910740').setName("Welcome");
client.channels.find('id', '472457173402910740').setName("Welcome T");
client.channels.find('id', '472457173402910740').setName("Welcome To");
client.channels.find('id', '472457173402910740').setName("Welcome To G");
client.channels.find('id', '472457173402910740').setName("Welcome To Ga");
client.channels.find('id', '472457173402910740').setName("Welcome To Gam");
client.channels.find('id', '472457173402910740').setName("Welcome To Game");
client.channels.find('id', '472457173402910740').setName("Welcome To Games");
client.channels.find('id', '472457173402910740').setName("Welcome To Games S");
client.channels.find('id', '472457173402910740').setName("Welcome To Games St");
client.channels.find('id', '472457173402910740').setName("Welcome To Games Sta");
client.channels.find('id', '472457173402910740').setName("Welcome To Games Stat");
client.channels.find('id', '472457173402910740').setName("Welcome To Games Stati");
client.channels.find('id', '472457173402910740').setName("Welcome To Games Statio");
client.channels.find('id', '472457173402910740').setName("Welcome To Games Station");
client.channels.find('id', '472457173402910740').setName("Welcome To Games Station A");
client.channels.find('id', '472457173402910740').setName("Welcome To Games Station Ar");
client.channels.find('id', '472457173402910740').setName("Welcome To Games Station Ara");
client.channels.find('id', '472457173402910740').setName("Welcome To Games Station Arab");
client.channels.find('id', '472457173402910740').setName("Welcome To Games Station Arabi");
client.channels.find('id', '472457173402910740').setName("Welcome To Games Station Arabic");
  }, 3000);
});
 



client.login(process.env.BOT_TOKEN);
