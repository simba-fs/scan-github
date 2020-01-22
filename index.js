const request = require('request');
const length = 3;
const char = 'abcdefghijklmnopqrstuvwxyz'.split('');
function start(name, result){
//	console.log(name.length);
	if(name.length >= length) return result.push(name);

	for(let i of char){
		start(name + i, result);
	}
}
/*
request('https://github.com/simba-fs')
	.on('response', (data) => {
		console.log(data.statuscode);
	});
*/
var names = [];
start('x', names);
names.forEach((item) => {
	request(`https://github.com/${item}`)
		.on('response', (data) => {
			if(data.statusCode == 404) console.log(`https://github.com/${item}`);
		});
});
