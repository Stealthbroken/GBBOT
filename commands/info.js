module.exports = {
    name: 'info',
    description: "embed",
    execute(message, args, Discord){
        const infoEmbed = new Discord.MessageEmbed()
        .setColor('##E699B7')
        .setTitle('Info')
        .setURL('https://gamingbois.online')
        .setDescription('This is an embed for the info of this bot')
        .addFields(
            {name: 'Version', value: '2.0.5'},
            {name: 'Author', value: 'Lucas'},
            {name: 'Designed for', value: 'Gaming Bois Discord Server'}
        )
        .setFooter('Thanks for checking out the info!');
    
        message.channel.send(infoEmbed)
    }
    


}
