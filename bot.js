const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd' ,member => {
  if(member.guild.id !== '508761735365263370') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '508765601636810768').send('** - WeLocme to __# Orexn اوركسن .__ :champagne_glass: ,**');
},3000);
});
var PrEfix = "$";
client.on('message', message => {
  if (!message.content.startsWith(PrEfix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '486566948797415456') return;
if (message.content.startsWith(PrEfix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(PrEfix + 'ls')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(PrEfix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/amira");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});

client.login(process.env.BOT_TOKEN);
