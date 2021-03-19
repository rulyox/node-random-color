const randomColor = require('../dist');

console.log('Generate 5 random colors');

for(let i = 0; i < 5; i++) {

    const color = randomColor({
        difference: 150,
        considerations: 5
    });

    console.log(color);

}
