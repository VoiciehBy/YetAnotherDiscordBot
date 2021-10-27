const constants = require("./constants");
const util = require("./utility");
const { joinVoiceChannel } = require("@discordjs/voice");

function sayHi(message) {
    message.reply(constants.hiReply);
}

function disconnect(botClient) {
    console.log(constants.byReply);
    botClient.destroy();
}

function jVC(channel) {
    joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator
    });
}

function printHelp(message) {
    message.reply(util.commandsHelp());
}

function sayThereIsNoSuchCommand(message) {
    message.reply(constants.defaultReply);
}

module.exports = {
    sayHi,
    disconnect,
    jVC,
    printHelp,
    sayThereIsNoSuchCommand
};