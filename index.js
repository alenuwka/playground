const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 
});
 
client.on('message', msg => {
    if(!msg.author.bot){
         switch(msg.content){
            case 'Hello':
                 msg.reply('Hi');
                 break;
            case 'Tere':
                 msg.reply('Tervist');
                 break;
            case 'Privet':
                 msg.reply('Kak dela?');
                 break;     
            default:
                 msg.reply('Whaat?');
         };
     }
});

 
client.login("NzE3MDU5Mzc3ODkwMTk3NTY2.XtUz8A.eON4Rafw4ZD2HvVS2Yf15h3VvFY");