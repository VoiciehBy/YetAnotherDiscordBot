require("dotenv").config()

const { Client, Intents } = require("discord.js");
const botClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const PREFIX = '!';

const hiReply = "Hehe,hihiho!!1";
const byReply = "Cze,ja spadam,:D.";
const defaultReply = "Nie ma takiej komendy,XDddd.";

function onReady() {
    console.log("Bot is ready");
} botClient.on('ready', () => onReady());

function ifMsgComesFromBot(message) { return message.author.bot; }
function isCommmand(message) { return message.content.startsWith(PREFIX) && message.channelId == process.env.BOT_CHANNEL_ID; }
function getCommandName(message) {
    if (message.content.length > 1) return message.content.trim().substring(PREFIX.length);
    else return '!';
}

function handleCommands(message) {
    if (isCommmand(message)) {
        switch (getCommandName(message)) {
            case "siema":
                message.reply(hiReply);
                break;
            case "d":
                message.reply(byReply);
                botClient.destroy(process.env.BOT_TOKEN);
                break;
            default:
                message.reply(defaultReply);
                break;
        }
    }
}

function onMsgCreate(message) {
    if (ifMsgComesFromBot(message)) return;
    else handleCommands(message);
}

botClient.on('messageCreate', (message) => onMsgCreate(message));

botClient.login(process.env.BOT_TOKEN);