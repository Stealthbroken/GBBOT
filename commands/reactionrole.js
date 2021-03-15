module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '820804774190514176';
        const NorthAmerican = message.guild.roles.cache.find(role => role.name === "North_American");
        const SouthAmerican = message.guild.roles.cache.find(role => role.name === "South_American");
        const European = message.guild.roles.cache.find(role => role.name === "European");
        const Asian = message.guild.roles.cache.find(role => role.name === "Asian");
        const African = message.guild.roles.cache.find(role => role.name === "African");
        const Oceanic = message.guild.roles.cache.find(role => role.name === "Oceanic");
        const Antarctican = message.guild.roles.cache.find(role => role.name === "Antartican");
 

        const NorthAmericanEmoji = '🇦';
        const SouthAmericanEmoji = '🇧';
        const EuropeanEmoji = '🇧';
        const AsianEmoji = '🇩';
        const AfricanEmoji = '🇪';
        const OceanicEmoji = '🇫';
        const AntarcticanEmoji = '🇬';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('React with what applys to you!')
            .setDescription('Choosing this will let other members know who you are and be appreciative of your timezones')
                 + `${NorthAmericanEmoji} for North American\n`
                 + `${SouthAmericanEmoji} for South American\n`
                 + `${EuropeanEmoji} for European\n`
                 + `${AsianEmoji} for Asian\n`
                 + `${AfricanEmoji} for African\n`
                 + `${OceanicEmoji} for Oceanic\n`
                 + `${AntarcticanEmoji} for Antarctican\n`);
      
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(NorthAmericanEmoji);
        messageEmbed.react(SouthAmericanEmoji);
        messageEmbed.react(EuropeanEmoji);
        messageEmbed.react(AsianEmoji);
        messageEmbed.react(AfricanEmoji);
        messageEmbed.react(OceanicEmoji);
        messageEmbed.react(AntarcticanEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === NorthAmericanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(NorthAmerican);
                  }
                if (reaction.emoji.name === SouthAmericanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SouthAmerican);
                  }
                if (reaction.emoji.name === EuropeanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(European);
                  }
                if (reaction.emoji.name === AsianEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Asian);
                  }
                if (reaction.emoji.name === AfricanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(African);
                  }
                if (reaction.emoji.name === OceanicEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Oceanic);
                  }
                if (reaction.emoji.name === AntarcticanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Antarctican);
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
                if (reaction.emoji.name === NorthAmericanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(NorthAmerican);
                  }
                if (reaction.emoji.name === SouthAmericanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SouthAmerican);
                  }
                if (reaction.emoji.name === EuropeanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(European);
                  }
                if (reaction.emoji.name === AsianEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Asian);
                  }
                if (reaction.emoji.name === AfricanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(African);
                  }
                if (reaction.emoji.name === OceanicEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Oceanic);
                  }
                if (reaction.emoji.name === AntarcticanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Antarctican);
                }
            } else {
                return;
            }
        });
    }
 
}   
