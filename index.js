const Discord = require('discord.js'); 
const bot = new Discord.Client();
//подключаем файл конфигурации
let config = require('./botconfig.json'); 
//"достаём" токен и префикс
let token = config.token; 
let prefix = config.prefix;
//создаём ссылку-приглашение для бота
bot.on('ready', () => { 
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => { 
        console.log(link);
    });
    
    //Статус бота
    bot.user.setPresence({
        status: 'online',
        activity: {
            name: 'на twitch (+help) ',
            type: "STREAMING",
            url: "https://www.twitch.tv/bratishkinoff" // <<< //
        }
    });
});

//команда, и то, что она должна выполнить
bot.on('message', msg => {
    
    //Проверка связи

    if (msg.content === prefix + 'Меня слышно?' || msg.content === prefix + 'меня слышно?') {
        msg.reply('Слава богу, что да!!!)')
        msg.react('\uD83C\uDF74');
    }
        //рандомизатор сл. чисел

    if (msg.content === prefix + 'Я красивый?' || msg.content === prefix + 'я красивый?') {
        msg.react('\uD83C\uDF74');
        function Krasivii() {
    
             return Math.floor(Math.random()*2);
        }    
        Krasivii();
        if (Krasivii() === 0)
           msg.reply('Да, я обожаю тебя!!!');
        else
            msg.reply('Нет, но дело не в тебе, правда(');
            
        }

    //+help

    if (msg.content === prefix + 'help') {
        msg.reply("Приветствую, я HustBot-работяга. =) Я прямой потомок сокрушителя counting channel ziest и создан для удовлетворения вашей цифровой похоти на площадке Discord. Если вы напишите [+help_com], то узрите все доступные на данный момент команды бота. Благодаря умственным способностям Hustandant'a Node.js и java Script")   
        msg.react('\uD83C\uDF74');
    }

    //+help_com

    if (msg.content === prefix + 'help_com') {
        msg.reply("Доступные команды: 1.[+help]-краткое описание бота.  2.[+Я красивый? or +я красивый?]-тест на красоту и мнение самого честного бота в мире!!!  3.[+Монетка or +монетка]-игра в подбрасывание монетки(не пытайтесь выбить ребро;D)  4.[+Меня слышно? or +меня слышно?]-проверка связи в дискорде.  5.[+Phonk or +phonk or +Фонк or +фонк or +Пхонк or +пхонк]-бот выдаст пока единственную фотографию (В разработке) из потока Hustandant'a.  6.[+фонк = сила]-бот ответит вам самой лучшей реакцией, которую мог добавить создатель.  7.[+фонк идеал]-создателю было одиноко, когда никто не поддерживал эту реакцию, поэтому я постараюсь утешать его и вас)")
        msg.react('\uD83C\uDF74');
    }
    //Испытание удачи с монеткой

    if (msg.content === prefix + 'Монетка' || msg.content === prefix + 'монетка') {
        msg.react('\uD83C\uDF74');
        function Krasivii() {

            return Math.floor(Math.random()*2);
        }    
        Krasivii();
        if (Krasivii() === 0)
            msg.reply('Орел');
        else
            msg.reply('Решка');
        
    }

    //Добавление фото к сообщению

    if (msg.content === prefix + 'Phonk' || msg.content === prefix + 'phonk' || msg.content === prefix + 'фонк' || msg.content === prefix + 'Фонк' || msg.content === prefix + 'пхонк' || msg.content === prefix + 'Пхонк') {
        msg.reply("держи, друг мой)", {files: ["https://cs11.pikabu.ru/post_img/big/2020/01/17/11/1579285061178741442.jpg"]});
        msg.react('\uD83C\uDF74');
    }
});

//Эмодзи к сообщению
bot.on('message', message => {
	if (message.content === '+фонк = сила') {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'phonk');
        message.react(reactionEmoji);
    }
    if (message.content === '+фонк идеал') {
        message.react('\uD83C\uDDF5')
			.then(() => message.react('\uD83C\uDDED'))
            .then(() => message.react('\uD83C\uDDF4'))
            .then(() => message.react('\uD83C\uDDF3'))
            .then(() => message.react('\uD83C\uDDF0'))
            .then(() => message.react('\uD83C\uDDEE'))
            .then(() => message.react('\uD83C\uDDE9'))
            .then(() => message.react('\uD83C\uDDEA'))
            .then(() => message.react('\uD83C\uDDE6'))
            .then(() => message.react('\uD83C\uDDF1'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});
bot.login(token);