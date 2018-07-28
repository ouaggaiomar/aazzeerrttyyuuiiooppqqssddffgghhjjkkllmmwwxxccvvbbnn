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
  
    if(message.content.split(' ')[0] == '$$'){
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

 client.on('message', message => {
  if(message.content == "<@" + `${client.user.id}` + ">"){
    var embed = new Discord.RichEmbed() 
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor("RANDOM")
    .addField(`{prefix}help`, "**to show The Help List**")
    message.channel.send(`✅ | Done | Check Your DirectMessages <@${message.author.id}>`)
    message.author.send({embed})
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


const { Client } = require('discord.js');
const client = new Client({ disableEveryone: true});
client.login(process.env.BOT_TOKEN);
client.on(`ready`, () => console.log(`Ready!`))
const channels = {};


client.on('voiceStateUpdate',async function(oldmember, member) {
if(member.user.bot) return;
if(member.voiceChannel === undefined && channels[member.id]) {
console.log(member.guild.members.filter(m => m.voiceChannelID === channels[member.id].channel).size)
if(member.guild.members.filter(m => m.voiceChannelID === channels[member.id].channel).size < 1) {
member.guild.channels.get(channels[member.id].channel).delete();
channels[member.id].channel = undefined;
}
}
if(oldmember.voiceChannel !== undefined || member.voiceChannel !== undefined) {
if(member.voiceChannelID === '472913456736108544') {
member.guild.createChannel(member.displayName, "voice", [{
id: member.id,
allow: ['CONNECT'],
}, {
id: member.guild.id,
deny: ['CONNECT']
}]).then((channel)=> {
    const parent = member.guild.channels.get('472913456736108544').parentID
    channel.setParent(parent);
    if(!channels[member.id]) channels[member.id] = {
        channel: channel.id,
        }
member.user.send(`Hey **${member.displayName}** I've created a channel for you!
------------------------------------------------------------
Use \`\`!unlock [@user | all]\`\` to unlock for a specify or for all.
Use \`\`!lock [@user | all]\`\` to lock & kick for a specify or for all in your voice channel.
Use \`\`!rename [new name]\`\` to rename your voice channel name.
------------------------------------------------------------
`)
member.setVoiceChannel(channel.id);
})
} else return undefined;
}
});

client.on(`message`, async message => {
let args = message.content.trim().split(" ").slice(1); //substring(prefix.length) before split(" ") if you had a prefix.
let user = message.mentions.users.first();
if(message.content.startsWith("!unlock")) {
if(channels[message.author.id] !== undefined) {
if(user) {
if(message.guild.channels.get(channels[message.author.id].channel).permissionsFor(user.id).has(`CONNECT`)) return message.channel.send(`**The user already can connect to your voice channel**\n to lock & kick user use \`\`!lock\`\` `);
message.guild.channels.get(channels[message.author.id].channel).overwritePermissions(user.id, {
CONNECT: true
}).then(message.channel.send(`**${user.username}** can connect to your room now!`))
} 
else if(args.includes("all")) {
message.guild.channels.get(channels[message.author.id].channel).overwritePermissions(message.guild.id, {
CONNECT: true
}).then(message.channel.send("**Everyone** can connect to your room now!"));
} else return message.channel.send(`**Usage: !unlock [all | @user]**`)
}
}
if(message.content.startsWith("!lock")) {
 if(channels[message.author.id] !== undefined) {
if(user) {
if(!message.guild.channels.get(channels[message.author.id].channel).permissionsFor(user.id).has(`CONNECT`)) return message.channel.send(`**The user already cannot connect to your voice channel**`);
try {
if(message.guild.members.get(user.id).voiceChannelID === channels[message.author.id].channel) {
message.guild.members.get(user.id).setVoiceChannel('472913853131522048'); // المكان الي راح ينحطوله بعد ما يصير لهم lock 
}   
} catch (error) {
console.log(error)
}
message.guild.channels.get(channels[message.author.id].channel).overwritePermissions(user.id, {
CONNECT: false
}).then(message.channel.send(`:x: **${user.username}** cannot connect to your room now!`))
} 
else if(args.includes("all")) {
message.guild.channels.get(channels[message.author.id].channel).overwritePermissions(message.guild.id, {
CONNECT: false
}).then(message.channel.send(":x: **Everyone** cannot connect to your room now!"));
} else return message.channel.send(`**Usage: !lock [all | @user]**`)
}   
}
if(message.content.startsWith("!rename")) {
if(channels[message.author.id] !== undefined) {
if(args.length <= 0) return message.channel.send(`:scroll: **Hmmm the name please*`);
if(message.content.length > 7+15) return message.channel.send(`:x: It appears that's the max letters allowed is **15**.`)
const oldName = await message.guild.channels.get(channels[message.author.id].channel).name
message.channel.send(`:pencil2: Renamed **\`\`${oldName}\`\`** to **\`\`${args.join(" ").toString()}\`\`** alright?`)
message.guild.channels.get(channels[message.author.id].channel).setName(args.join(" ").toString());
}
 }
});




client.login(process.env.BOT_TOKEN);
