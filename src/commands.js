const constants = require("./constants");
const util = require("./utility");
const { joinVoiceChannel } = require("@discordjs/voice");

function sayHi(message) {
    message.reply(constants.hiReply);
}

function disconnect(message) {
    message.reply(constants.byReply);
    botClient.destroy(process.env.BOT_TOKEN);
}

function jVC(channel) {
    joinVoiceChannel({
        channelId: process.env.BOT_VOICE_CHANNEL_ID,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });
}

function printHelp(message){
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