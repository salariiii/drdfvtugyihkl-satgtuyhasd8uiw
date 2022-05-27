const Discord = require('discord.js')
const bot = new Discord.Client
module.exports = {
    name: 'clear',
    description: 'clear message command',
    execute(message, args){
        if (args[1]) {
            let check = isNaN(args[1])
            if (check) {
                message.reply("Meghdar Vared Shode Eshtebah Ast")
            }
            if (!check) {
                if (message.member.hasPermission("MANAGE_CHANNELS")) {
                    if (message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                        let number = args[1]
                        number++
                        message.channel.bulkDelete(number)
  
                        const result = new Discord.MessageEmbed()
                            .setAuthor("𝐕𝐞𝐧𝐮𝐬 𝐒𝐭𝐮𝐟𝐟")
                            .setTitle("✅ Amaliat Ba Movafaghiat Anjam Shod ✅")
                            .addField("Tedad Payam Haye Zir Pak Shod ", args[1])
                            .setColor('#BF71FF')
                            .setFooter('In Payam Be Sorat Khodkar Pak Mishavad')
                        message.channel.send(result).then(msg => {
                            function autodel() {
                                msg.delete()
                            }
  
                            setTimeout(autodel, 3 * 1000)
  
                        })
                    }
                }
            }
        }
    }
}