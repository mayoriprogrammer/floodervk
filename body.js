var BOT1 = new pBot('тут токен'); //

function pBot(token) {
const request = require("request");

var admins = []; //писать онли цифры, без id. Если неск. юзеров, то через запятую. Пример: var admins = [435435, 54646, 435345];
var BOTS_ID = [];

var vk = new ( require('vk-io') );
var fs = require('fs');

var titletext = ['сосать суки', 'патриотическая наоцилизация', 'вагина в жопу - не мать', 'люблю сосать но ха деньги', 'ждите деанон', 'сосать плиз сосать тролли', 'слиты азазаз))'];

var titlespam, textspam, pictures;

vk.setToken(token);
vk.longpoll.start();

var utils = { 
    rand: (x, y) => y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x), 
    randpick: (array) => array[utils.rand(array.length - 1)], 
} 

vk.api.call('users.get')
.then((res) => {
console.log('[Авторизация] Успешно зашел на страницу. Ид: %s', res[0].id);
BOTS_ID.push(res[0].id);
})
console.log('coded by vk.com/mayorihvh'

var random = (x, y) => y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
var rand = (array) => array[random(array.length - 1)];
vk.longpoll.on('message', (message) => {
if(!~admins.indexOf(message.user)) return; //admins
let body = message.text.split(' ');

if(body[0] == '/stopspamtitle'){
	message.send("останавливаю..");
	clearInterval(titlespam);
}

if(body[0] == '/helpme') {
    return message.send(`Мои команды::\n
	😜 Aimbot\n
	/spampictures - начать спам
	/stopspampictures - остановить спам\n
	😜 Visuals\n
	/titlespam [text] - начать спам
	/stopspamtitle - остановить спам\n
	😜 Misc:\n
	/spam [text] - спамить текст
	/stopspam - остановить спам
	`);
}
if(body[0] == '/stopspampictures'){
	message.send("Останавливаю..");
	clearInterval(pictures);
}
if(body[0] == '/spampictures'){
	let chatid = message.chat;
	message.send('вам пиздец');

	pictures = setInterval(() => { 
	vk.upload.chat({chat_id: chatid, source: './media/govno.png'});
}, utils.rand(500, 1000))
}

if(body[0] == '/stopspam'){
	message.send("Останавливаю..");
	clearInterval(textspam);
}
if(body[0] == '/spam'){
	let chatid = message.chat;
	body.shift();
	let pText = body.map(e=>e).join(" ");
	message.send("Обрабатываю...");
	textspam = setInterval(() => { 
	vk.api.messages.send({ chat_id: chatid, message: pText });
}, utils.rand(500, 1000))
}

if(body[0] == '/lock'){
	message.send('заблокировал!');
}

if(body[0] == '/titlespam'){
	let chatid = message.chat;
	body.shift();
	let pTitle = body.map(e=>e).join(" ");
	message.send("Обрабатываю...");
	titlespam = setInterval(() => { 
	vk.api.call('messages.editChat', { chat_id: chatid, title: pTitle });
}, utils.rand(500, 1000))
}

if(body[0] == '!test') {
message.send("работаю");
}
})
}

function getRandomInt(min, max){return Math.round(Math.random() * (max - min)) + min};
Array.prototype.random = function(){return this[Math.floor(this.length * Math.random())];}
Array.prototype.find = function (element) {return this.indexOf(element) == -1?false:true}
Array.prototype.return = (count) => slice(0, count)