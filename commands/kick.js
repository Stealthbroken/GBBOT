module.exports = {
    name: 'kick',
    description: "This will kick a player",
    execute(messages, args){
        const member = messages.mentions.users.first();
        if (messages.member.hasPermission("KICK_MEMBERS")){
        if(member){
            const memberTarget = messages.guild.members.cache.get(member.id)
            memberTarget.kick();
            messages.channel.send("User was kicked!");
        }
        }else{
            messages.channel.send('You need to mention someone!');
        }
    }
}