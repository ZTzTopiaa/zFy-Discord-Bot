/*ZTzTopia*/
var Discord = require('discord.js');
const errors = require('../errors.js');
const client = require('nekos.life');
const neko = new client();
var unirest = require('unirest');

module.exports.run = async (bot, msg, args, suffix) => {

if (args.length < 1) return errors.noText(msg, `
   **Description**: Ask the magic 8-ball a question.
   **Format**: \`8ball <question>\` 
   **Example**: \`8ball I'm Awesome\`
`);
    
    /*var predictions = [
        'It is certain',
        'System error',
        '100% Perfect',
        '100% Not perfect',
        'It is decidedly so',
        'Without a doubt',
        'Yes definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        "No",
        'My sources say no',
        'Yep you rich!',
        'Outlook not so good',
        'Very doubtful',
    ];*/

    /*let ball = new Discord.RichEmbed()
    .setColor(msg.guild.me.displayColor)
    .addField(':8ball: 8ball', 'Shaking the ball...')
    .setFooter(`${bot.user.username}#${bot.user.discriminator}`, bot.user.avatarURL)
    .setTimestamp();
             
    var msg2 = await msg.channel.send({ embed: ball });*/

//neko.getSFW8Ball().then(balls => {
    //setTimeout(function() {
        
        //msg2.delete();
        unirest.get('https://nekos.life/api/v2/8ball')
        .end(balls => {
            let ball2 = new Discord.RichEmbed()
            .setColor(msg.guild.me.displayColor)
            .setImage(balls.body.url)
            .addField(':8ball: 8ball', "**"+ balls.body.response+"**"/*predictions[Math.floor(Math.random() * (predictions.length - 0))]*/)
            .setFooter(`Powered by nekos.life`)
            .setTimestamp();
            
            msg.channel.send({ embed: ball2 });
//}, 800);
    })

}

module.exports.help = {
    name: "8ball",
    type: "Fun",
    description: "Ask the magic 8-ball a question.",
    format: "`8ball <question>`",
    example: '`8ball I\'m Awesome`',
    require: "None."
}
