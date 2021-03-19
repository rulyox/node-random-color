const randomColor = require('../dist');
const http = require('http');

const generateHtml = () => {

    let colorBlocks = '';

    for(let i = 0; i < 5; i++) {

        const color = randomColor({
            difference: 150,
            considerations: 5
        });

        const block = `<div style="width: 100px; height: 100px; margin: 10px; background: ${color};"></div>`;
        colorBlocks += block;

    }

    return (
        '<!DOCTYPE html> <html>' +
        '<head> <title>node-random-color Visualization</title> </head>' +
        '<body style="display: flex; flex-direction: column; align-items: center;">' +
        '<div style="font-size: 30px; font-weight: bold; margin-bottom: 10px;">node-random-color Visualization</div>' +
        '<div style="display: flex; flex-direction: row;">' + colorBlocks + '</div>' +
        '<div style="margin-top: 10px;"><button onclick="location.reload();">Refresh</button></div>' +
        '</body>' +
        '</html>'
    );

};

http.createServer((request, response) => {

    const html = generateHtml();

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': html.length
    });

    response.end(html);

}).listen(8080);

console.log('Running web server on port 8080!');
console.log('http://localhost:8080');
