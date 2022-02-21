var constants = require("./constants");

function ifMsgComesFromBot(message) { return message.author.bot; }
function isCommmand(message) { return message.content.startsWith(constants.PREFIX) && message.channelId == process.env.BOT_CHANNEL_ID; }
function getCommandName(message) {
    if (message.content.length > 1) return message.content.trim().substring(constants.PREFIX.length);
    else return constants.PREFIX;
}
function commandsHelp() {
    cH = "";
    for (i = 0; i < constants.commands.length; i++)
        cH += constants.PREFIX + constants.commands[i] + " - " + constants.commands_desc[i] + "\n";
    return cH;
}

function getVoiceChannel(message) {
    return message.member.voice.channel;
}

function ifMsgOnTheChannel(message,channelId){
    return message.channel.id == channelId;
}

module.exports = {
    ifMsgComesFromBot,
    isCommmand,
    getCommandName,
    commandsHelp,
    getVoiceChannel,
    ifMsgOnTheChannel
};