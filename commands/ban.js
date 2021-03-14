module.exports = {
    name: 'ban',
    description: "This will ban a player",
    execute(messages, args){
        const member = messages.mentions.users.first();
        if (messages.member.hasPermission("KICK_MEMBERS")){
        if(member){
            const memberTarget = messages.guild.members.cache.get(member.id)
            memberTarget.ban();
            messages.channel.send("User was banned!");
        }}else{
            messages.channel.send('You need to mention someone!');
        }
    }
}