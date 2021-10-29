const constants = require("./constants");
const util = require("./utility");
const lib = require("./lib");
const { joinVoiceChannel, getVoiceConnection, createAudioPlayer ,createAudioResource} = require("@discordjs/voice");

function sayHi(message) {
    message.reply(constants.hiReply);
}

function disconnect(botClient) {
    console.log(constants.byReply);
    botClient.destroy();
}

function jVC(channel) {
    if(!channel) {
        console.error("channel is null");
        return;
    }
    joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator
    });
}

function playVideo(message){
    
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
    playVideo,
    printHelp,
    sayThereIsNoSuchCommand
};