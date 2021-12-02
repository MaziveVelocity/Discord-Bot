
function commandInput(message) {
    switch (message) {
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
    }
}

module.exports = commandInput()