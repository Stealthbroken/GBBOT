const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
 
const prefix = '*';
 
const fs = require('fs');
 
//const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('GamingBois is Online!');
    client.user.setActivity('*help for help', { type: 'STREAMING' }, { url: "https://www.gamingbois.online"})
    //memberCounter(client);
});

//client.on('guildMemberAdd', guildMember =>{
  //  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Loyal Sub');

    //guildMember.roles.add(welcomeRole);
    //guildMember.guild.channels.cache.get('801446262712827944').send(`Welcome <@${guildMember.user.id}> to the best server!`)
//})
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    }  else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }  else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }  else if(command === 'play'){
        client.commands.get('play').execute(message, args);
    }  else if(command === 'stop'){
        client.commands.get('stop').execute(message, args);
    }  else if(command === 'info'){
        client.commands.get('info').execute(message, args, Discord);
    }  else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }  else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }  else if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }  else if(command === 'prefix'){
        client.commands.get('prefix').execute(message, args, Discord);
    }  else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }  else if(command === 'mcserver'){
        client.commands.get('mcserver').execute(client, message, args, Discord)
    }  else if(command === 'reactionrole'){
        client.commands.get('reactionrole').execute(client, message, args, Discord)
    }  else if(command === 'genderreactionrole'){
        client.commands.get('genderreactionrole').execute(client, message, args, Discord)
    }


});
 
client.login('ODAxMTk5NTUzMTIyMjcxMzIy.YAdNOw.tzO2sYBW8vjWmVL4bM9sS9xNrro');
