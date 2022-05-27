module.exports = {
    name: 'ban',
    description: 'ban command',
    execute(message, args){
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Shoma permission kafi baraye in kar ra nadarid");
      message.delete()
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban({
              reason: 'Ban Member Command',
            })
            .then(() => {

              message.reply(`${user.tag} Az Server Ban Shod`);
            })
            .catch(err => {
              message.reply('Man Permission Kafi Baraye Ban IN Member Ra Nadaram');
              console.error(err);
            });
        } else {
          message.reply("Member Dar Server Ozv Nemibashad");
        }
      } else {
        message.reply("Kasi Ra Mention Nakardid In Gone : v/ban @user");
      }         

    }
}
