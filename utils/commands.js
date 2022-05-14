const { User } = require("discord.js");

const commandInput = (msg) => {
    const rawMessage = msg.content;
    const messageArray = rawMessage.split(" ");
    const command = messageArray[0];
    const bot = msg.client;
    const requestor = msg.author

    switch (command) {
        case '!flipcoin':
            result = Math.floor(Math.random() * 2);

            if (result === 1) {
                msg.reply('Heads').catch(console.error);
            } else {
                msg.reply('Tails').catch(console.error);
            }
            break;
        case '!rollD20':
            result = Math.floor(Math.random() * 20 + 1);
            msg.reply(`You rolled a ${result}`).catch(console.log);
            break;
        case '!rollD4':
            result = Math.floor(Math.random() * 4 + 1);
            msg.reply(`You rolled a ${result}`).catch(console.log);
            break;
        case '!rollD6':
            result = Math.floor(Math.random() * 6 + 1);
            msg.reply(`You rolled a ${result}`).catch(console.log);
            break;
        case '!rollD8':
            result = Math.floor(Math.random() * 8 + 1);
            msg.reply(`You rolled a ${result}`).catch(console.log);
            break;
        case '!rollD12':
            result = Math.floor(Math.random() * 12 + 1);
            msg.reply(`You rolled a ${result}`).catch(console.log);
            break;
        case '!rollD100':
            result = Math.floor(Math.random() * 100 + 1);
            msg.reply(`You rolled a ${result}`).catch(console.log);
            break;
        case '!find':
            const username = messageArray[1];
            const foundUser = bot.users.cache.find(user => user.username = username);
            let message
            
            if (foundUser != undefined || foundUser != null){
                message = `======================= \nUsername: ${foundUser.username} \nID: ${foundUser.id} \nIs Verified: ${foundUser.verified} \nTag: ${foundUser.tag}`
            }else{
                message = "User not found"
            }

            bot.users.cache.get(requestor.id).send(message);
            break;
    }
}

module.exports = commandInput;