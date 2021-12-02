require('dotenv').config()

const { messageCheck } = require('./utils/helpers');
const { Client, Intents } = require('discord.js');
const bot = new Client({
    partials: ["MESSAGE", "USER", "CHANNEL"],
    intents: [Intents.FLAGS.GUILDS, "DIRECT_MESSAGES", "GUILD_MESSAGES"]
});
const { commandInput } = require('./utils/commands');

const botId = '783507976580628490'

const jamsheedResponses = [
    'YES! Jamsheed',
    'FUCK YEAH! JAMSHEED',
    'NO ONE FUCKS WITH JAMSHEED',
    'OMG is that Jamsheed!!',
    'JAMSHEED! can you sign my RPG?',
    'Jamshedd, I love you in that video where you nuked those terroist!'
]

const memeReply = [
    'Nice meme Bro!',
    'Huntsman did you post this meme? probably...',
    'LMAO!',
    'This one made me laugh my bolts off!',
    'Holy shit thats hella funny! Where did you find that one?',
    "Man I can't stop looking at these memes.",
    'Im glad I join this server. These memes are fire.',
    'lol'
]

// const commands = {
//     flipCoin: {
//         name: 'flipCoin',
//         description: 'command to use'
//     }
// }

let result;

bot.on('ready', () => {
    console.log('Bot ready to go');
});

bot.on('messageCreate', msg => {
    const message = msg.content;
    const user = msg.author;
    const channel = msg.channel;

    if (channel.id === '683866616945180672' && user.id !== botId) {
        const reply = memeReply[Math.floor(Math.random() * memeReply.length)]
        msg.reply(reply)
            .catch(console.error);
    }

    if (user.id === '637422682769719298') {
        const reply = jamsheedResponses[Math.floor(Math.random() * jamsheedResponses.length)]
        msg.reply(reply)
            .catch(console.error);
    }

    if (messageCheck(message, '69')) {
        msg.reply('Nice...')
            .catch(console.error);
    }


});

bot.login(process.env.BOT_TOKEN)