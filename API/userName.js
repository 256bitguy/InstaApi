const http = require('https');
const name=require(path.join(__dirname,'../name.txt'));

const options = {
	method: 'GET',
	hostname: 'instagram28.p.rapidapi.com',
	port: null,
	path: `/user_info?user_name=${name}`,
	headers: {
		'X-RapidAPI-Key': 'b4c7ee7332msh84c3a520f5700a6p19fd08jsnc03330a293fb',
		'X-RapidAPI-Host': 'instagram28.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();