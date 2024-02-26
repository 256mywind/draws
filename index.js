
const drawWorldArmadillo = require('./draw/draw-armadillo');
const helloWorldBanana = require('./draw/draw-banana');
const helloWorldBees = require('./draw/draw-bees');

// const helloWorldBanana = require('draw-banana')

function run() {
    drawWorldArmadillo();
    helloWorldBanana();
    helloWorldBees();
}  

run()