const botconfig = require('./botconfig.json')
const {token} = require('./botconfig.json')
const {prefix} = require('./botconfig.json')

const Discord = require('discord.js')
const bot = new Discord.Client({disableEveryone: true})
const srza = require('discord.js');
srza.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

bot.on("ready", () => {
  console.log(`${bot.user.tag} Is Now Online`)
  function sobhan() {
    let vazyiat = ["dnd", "idle","online"] // online | dnd | idle | offline
    let godrat = Math.floor(Math.random() * vazyiat.length)
    bot.user.setPresence({
    status: vazyiat[godrat] })
  }; setInterval(sobhan, 3000)
  
    let serverid = '870877313661825085'
    let voiceid = '979388988282507266'
    if(!bot.voice.connections.get(serverid)) {
    let channel = bot.channels.cache.get(voiceid) || bot.channels.fetch(voiceid)
    if(!channel) return;
   
    const connection = channel.join()
    }

    function status() {

      let count = 0;
      const gGuild = bot.guilds.cache.get("870877313661825085")
      const voiceChannels = gGuild.channels.cache.filter(c => c.type === 'voice');
      for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  
      let go = [`${gGuild.memberCount} Members👥`, `${gGuild.name}`, `${count} Active Mics🎤`]
      let plsc = ["WATCHING", "COMPETING", "LISTENING"]
      let Power = Math.floor(Math.random() * go.length);
  
      bot.user.setActivity(go[Power], { type: plsc[Power] });
    }; setInterval(status, 5000)

    function chNickname() {
      const targetguild = bot.guilds.cache.get("870877313661825085")
      const server = targetguild.members.cache.get(bot.user.id)
      let esm = ['𝐒𝐢𝐱𝐭𝐲𝐍𝐢𝐧𝐞','𝟔𝟗','𝐅𝐚𝐦𝐢𝐥𝐲'] 
          let godrat = Math.floor(Math.random() * esm.length)
        server.setNickname(esm[godrat])
    }; setInterval(chNickname, 3000)
});

bot.once('ready', () => {
  const guild = bot.guilds.cache.get('870877313661825085')
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('979388988282507266')
        channel.setName(`⟅👥⟆・ᴍᴇᴍʙᴇʀꜱ: ${memberCount.toLocaleString()}`)
  }, 5000);
})

bot.on('message', async  message => {
    if (message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArry = message.content.split(" ")
    let cmd = messageArry[0];
    let args = message.content.substring(prefix.length).split(" ")

    if (message.content.startsWith(`${prefix}clear`)) {
      if (args[0] === "clear") {
      bot.commands.get('clear').execute(message, args);
      }
    }

    if (!message.guild) return;

    if (message.content.startsWith(`${prefix}ban`)) {
      bot.commands.get('ban').execute(message, args);
    } else if (!message.guild) return;

    if (message.content.startsWith(`${prefix}kick`)) {
      bot.commands.get('kick').execute(message, args);
    }

    if(cmd == `${prefix}announce`){
      bot.commands.get('announce').execute(message, args);
    }

    if(cmd == `${prefix}exchange`){
      bot.commands.get('exchange').execute(message, args);
    }
})


bot.login(botconfig.token)