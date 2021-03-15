module.exports = {
    name: 'genderreactionrole',
    description: "Sets up a reaction role message!",
    async execute(client, message, args, Discord) {
        const channel = '820804774190514176';
        const Boy = message.guild.roles.cache.find(role => role.name === "Boy");
        const Girl = message.guild.roles.cache.find(role => role.name === "Girl");
        const AttackHelicopter = message.guild.roles.cache.find(role => role.name === "Attack Helicopter");
 

        const GirlEmoji = '👧';
        const BoyEmoji = '👦';
        const AttackHelicopterEmoji = '🚁';

 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('React with what applys to you!')
            .setDescription('Choosing this will let other members know who you are and be appreciative of your timezones!'
                 + `${BoyEmoji} If you're a boy\n`
                 + `${GirlEmoji} if you're a girl\n`
                 + `${AttackHelicopterEmoji} if you're an attack helicopter (lol)`);
      
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(BoyEmoji);
        messageEmbed.react(GirlEmoji);
        messageEmbed.react(AttackHelicopterEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === BoyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Boy);
                }
                if (reaction.emoji.name === GirlEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Girl);
                }                
                if (reaction.emoji.name === AttackHelicopterEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(AttackHelicopter);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === BoyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Boy);
                  }
                if (reaction.emoji.name === GirlEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Girl);
                  }
                if (reaction.emoji.name === AttackHelicopterEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(AttackHelicopter);
                  }
            } else {
                return;
            }
        });
    }
 
}   
