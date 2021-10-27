var constants = require("./constants");

function ifMsgComesFromBot(message) { return message.author.bot; }
function isCommmand(message) { return message.content.startsWith(constants.PREFIX) && message.channelId == process.env.BOT_CHANNEL_ID; }
function getCommandName(message) {
    if (message.content.length > 1) return message.content.trim().substring(constants.PREFIX.length);
    else return '!';
}
function commandsHelp() {
    cH = "";
    for (i = 0; i < constants.commands.length; i++)
        cH += constants.commands[i] + " - " + constants.commands_desc[i] + "\n";
    return cH;
}

function getVoiceChannel(message) {
    return message.member.voice.channel;
}

module.exports = {
    ifMsgComesFromBot,
    isCommmand,
    getCommandName,
    commandsHelp,
    getVoiceChannel
};