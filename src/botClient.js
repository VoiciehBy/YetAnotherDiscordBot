const {Client} = require("discord.js");

class botClient extends Client {
    constructor(options) {
        super(options);
    }
}
module.exports = botClient;