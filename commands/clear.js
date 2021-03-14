const { description } = require("./help");

module.exports = {
    name: 'clear',
    description:"Clears Messages",
    async execute(message, args) {
        if(!args[0]) return message.reply("Please enter the amount of messages you want cleared!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages!");
        if(args[0] < 1) return message.reply("YOu need to delte atleast 1 message!");

        await message.channel.messages.fetch({Limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}