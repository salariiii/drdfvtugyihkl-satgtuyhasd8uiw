module.exports = {
    name: 'kick',
    description: 'kick command',
    execute(message, args){
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Shoma permission kafi baraye in kar ra nadarid");
      message.delete()
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        
        if (member) {
          
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              message.reply(`${user.tag}Az Server Kick Shod`);
            })
            .catch(err => {

              message.reply('Man Nemitavanam In member Ra Kick Konam');

              console.error(err);
            });
        } else {
          message.reply("In Fard Dar Server Ozv Nemibashad");
        }
      } else {
        message.reply("Kasi Ra Mention Nakardid In Gone : v/kick @user");
      }
    }
}