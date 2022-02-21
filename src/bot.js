const lib = require("./lib");
lib.dotenv.config();

const { Client, Intents } = require("discord.js");
const botClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const constants = require("./constants");
const util = require("./utility");
const cmd = require("./commands");

function onReady() {
    console.log("Bot is ready...");
} botClient.on('ready', () => onReady());


function handleCommands(message) {
    if (util.isCommmand(message)) {
        var cmd_name = util.getCommandName(message);
        switch (cmd_name) {
            case constants.commands[0]:
                cmd.sayHi(message);
                break;
            case constants.commands[1]:
                const channel = util.getVoiceChannel(message);
                cmd.jVC(channel);
                break;
            case constants.commands[2]:
                cmd.disconnect(botClient);
                break;
            case constants.commands[3]:
                const c = message.channel;
                cmd.purgeChannel(c);
                break;
            case constants.commands[4]:
                cmd.printHelp(message);
                break;
            default:
                cmd.sayThereIsNoSuchCommand(message);
                break;
        }
    }
}

function onMsgCreate(message) {
    if (!(util.ifMsgOnTheChannel(message, process.env.BOT_CHANNEL_ID)) || util.ifMsgComesFromBot(message)) return;
    else handleCommands(message);
}
botClient.on('messageCreate', (message) => onMsgCreate(message));

botClient.login(process.env.BOT_TOKEN);