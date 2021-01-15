const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

/* -----Préfixe du bot----- */
const prefix = "*";

client.login(config.BOT_TOKEN);

const authorEmbed = new Discord.MessageEmbed()
  .setColor('#6376a5')
  .setTitle('LordHugo02')
  .setURL('https://github.com/LordHugo02')
  .setAuthor('LordHugo02', 'https://cdn.discordapp.com/attachments/623868270772224010/798606266749419570/LordHugo02.gif', 'https://github.com/LordHugo02')
  .setDescription('He/Him | IT student')
  .setImage('https://cdn.discordapp.com/attachments/623868270772224010/798606266749419570/LordHugo02.gif')
;

client.on("message", function(message)
 { 

  /* -----Basique des commandes----- */
    if (message.author.bot) return;  
    if (!message.content.startsWith(prefix)) return;
    
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();


  /* -----Random----- */
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }



  /* -----Les commandes----- */

  /* -----Ping----- */
    if (command === "ping") 
    {
     const timeTaken = Date.now() - message.createdTimestamp;
     const pingMessage = `:ping_pong: Pong! \n
                          :incoming_envelope: ${timeTaken} ms`;

     
     const pingEmbed = new Discord.MessageEmbed()
     .setColor('#6376a5')
     .setDescription(pingMessage)

   ;


     message.reply(pingEmbed)
    }



  /* -----Author----- */  
    if (command === "author") 
    {
      message.reply(authorEmbed);
    }

    /* -----Dice----- */ 
    if (command === "dice")
    {
      const random = getRandomInt(6) + 1;
      const diceMessage = `:game_die: tu as obtenu un ${random}`;

      const diceEmbed = new Discord.MessageEmbed()
      .setColor('#6376a5')
      .setDescription(diceMessage)
    ;

    message.reply(diceEmbed)

    }

 });  
