const dotenv = require("dotenv");
dotenv.config();

const { Client, Intents } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");
const botClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const constants = require("./constants");
var util = require("./utility");

function onReady() {
    console.log("Bot is ready");
} botClient.on('ready', () => onReady());


function handleCommands(message) {
    if (util.isCommmand(message)) {
        switch (util.getCommandName(message)) {
            case constants.commands[0]:
                message.reply(constants.hiReply);
                break;
            case constants.commands[1]:
                message.reply(constants.byReply);
                botClient.destroy(process.env.BOT_TOKEN);
                break;
            case constants.commands[2]:
                const channel = message.channel;
                joinVoiceChannel({
                    channelId: process.env.BOT_VOICE_CHANNEL_ID,
                    guildId: channel.guild.id,
                    adapterCreator: channel.guild.voiceAdapterCreator,
                });
                break;
            case constants.commands[3]:
                message.reply(util.commandsHelp());
                break;
            default:
                message.reply(constants.defaultReply);
                break;
        }
    }
}

function onMsgCreate(message) {
    if (util.ifMsgComesFromBot(message)) return;
    else handleCommands(message);
}

botClient.on('messageCreate', (message) => onMsgCreate(message));

botClient.login(process.env.BOT_TOKEN);