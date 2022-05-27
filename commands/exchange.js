const { MessageEmbed, DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')
const bot = new Discord.Client

module.exports = {
    name: 'exchange',
    description: 'exchange command',
    execute(message, args){
        let messageArry = message.content.split(" ")
        let cmd = messageArry[0];
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Shoma permission kafi baraye in kar ra nadarid");
        message.delete()
            
        let exchangeText = message.content.replace(`${cmd}`, '')
    
        if(exchangeText && exchangeText !== ""){
            message.channel.send(exchangeText)

            }else{
                message.reply("Lotfan Matn Exchange Ra Ham Vared Konid")
            }
    }
}