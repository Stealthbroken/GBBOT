module.exports = {
    name: 'prefix',
    description: "Tells you what prefix it is.",
    execute(message, args, Discord ){
        const prefixembed = new Discord.MessageEmbed()
        .setColor('##E699B7')
        .setTitle('Prefix')
        .setURL('https://gamingbois.online')
        .setDescription('This is an embed for the prefix')
        .addFields(
            {name: 'Preifx:', value: '*'},
 
        )
        .setFooter('Thanks for using my bot!');
    
        message.channel.send(prefixembed)
    }
    


}