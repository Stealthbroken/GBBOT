module.exports = {
    name: 'help',
    description: "help embed",
    execute(message, args, Discord ){
        const Embedhelp = new Discord.MessageEmbed()
        .setColor('##E699B7')
        .setTitle('Help')
        .setURL('https://gamingbois.online')
        .setDescription('This is a embed for this bots commands')
        .addFields(
            {name: 'Rules', value: 'This brings up the servers rules!'},
            {name: 'Kick', value: 'Kicks a Player'},
            {name: 'Ban', value: 'Bans a Player'},
            {name: 'Play', value: 'add a song name after and you can play a song if youre in a VC!'},
            {name: 'Leave', value: 'If you have the bot in your vc use this and say the name of the VC to get rid of it!'},
            {name: 'Mute', value: 'This will mute a player'},
            {name: 'Unmute', value: 'This will unmute a player'},
            {name: 'Help', value: 'Brings Up this menu!'},
            {name: 'Prefix', value: 'Shows you what the prefix is!'},
            {name: 'Info', value: 'Info about bot'},
            {name: 'Clear', value: 'This will clear 1-100 messages in the channel you use it in '},
            {name: 'mcserver', value: '[Server IP] [Port], this will give you info on the server you put in!'},
            {name: 'suggest', value: 'Add a suggestion at the end and people will vote on it in the #suggestions channel!'}
        )
        .setFooter('Thanks for looking at the commands!');
    
        message.channel.send(Embedhelp)
    }
    


}
