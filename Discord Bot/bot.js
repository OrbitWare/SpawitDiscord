const Discord = require('discord.js');
const client = new Discord.Client();
var request = require('request');
var parseJSON = require('request-parse-json');


client.on('ready', () => {
    console.log(`Botun Olan ${client.user.tag}Sunucuya Giriş Yaptı! `);
});


request({
    method : 'GET',
    url : 'https://www.spawit.com/api/getque',
    headers : {
        'Accept' : 'document/json',
        'User-Agent' : 'request-parse-json'
    }
}, parseJSON(next)); // Pass err, response, parsed body and raw body to next



function next(err, response, repository, body) {
    console.log(response);
    console.log(body);

    // yukardakileri parse edip asagdaki msg.channel den message yolliyabilirsin bu sekilde devam et <- yukardaki console.log(); senin anlaman icin geri gelen nedir diye
    // ordaki console.log(); senin terminalinde cikacaktir ordaki parametrelerden calisabilirsin.

   // msg.channel.sendMessage('Aleyküm Selam Hoşgeldin');

}
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('Aleyküm Selam Hoşgeldin');
  }

  if (msg.content.toLowerCase() === 'spawit') {
    msg.channel.sendMessage('Amacı Türk Topluluğunu Bi Araya Getirmek Olan Sistem');
  }


});

client.login('NjAxNzc3NDM2NDc2MTc4NDY0.XTrd1w.bm_dJHSaaaupSUWM5XD2pqUkTx8');
