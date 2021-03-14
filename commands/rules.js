module.exports = {
    name: 'rules',
    description: "embed",
    execute(message, args, Discord){
        const RulesEmbed = new Discord.MessageEmbed()
        .setColor('##E699B7')
        .setTitle('Rules')
        .setURL('https://gamingbois.online')
        .setDescription('This is a embed for our server rules.')
        .addFields(
            {name: 'Rule 1', value: 'Please treat others with kindness and respect, we dont want any bullying here'},
            {name: 'Rule 2', value: 'Please do not ping staff unless it is necessary, as we are very busy'},
            {name: 'Rule 3', value: 'Use appropriate language in all channels'},
            {name: 'Rule 4', value: 'Keep the correct chat in specific channels, so memes in #memes , bot commands in #bot-commands etc'},
            {name: 'Rule 5', value: 'Please do not spam, it is very annoying.'},
            {name: 'Rule 6', value: 'Do not use any sort of racism! It is very offensive and rude to races'},
            {name: 'Rule 7', value: 'Do not post any NSFW content'}
        )
        .setFooter('Make sure to check out the rules channel too!');
    
        message.channel.send(RulesEmbed)
    }
    


}
