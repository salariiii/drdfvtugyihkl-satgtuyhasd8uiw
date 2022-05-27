const Discord = require('discord.js')
const bot = new Discord.Client
module.exports = {
    name: 'announce',
    description: 'announce command',
    execute(message, args){
        let messageArry = message.content.split(" ")
        let cmd = messageArry[0];
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Shoma Permission Kafi Baraye In Kar Ra Nadarid");
      message.delete()
        
        let text = message.content.replace(`${cmd}`, '')
        let annEmbed = new Discord.MessageEmbed()
          .setColor('#BF71FF')
          .setThumbnail(message.guild.iconURL())
          .setTitle("📢 New Announcement 📢")
          .setURL('https://discord.gg/w2dGPDpwrV')
          .setFooter("𝐕𝐞𝐧𝐮𝐬 𝐒𝐭𝐮𝐟𝐟")

        if(text && text !== ""){
          
          annEmbed.setDescription(text)
          message.channel.send("||@everyone|| ||@here||", annEmbed)
          
        }else{
          
            annEmbed.setDescription("Lotfan Matn Announce Ra Ham Vared Konid")
            message.channel.send(annEmbed)
            .then(msg => {
              msg.delete({timeout: 5000})
            })
        }
    }
}