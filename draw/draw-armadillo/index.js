const cowsay = require('cowsay');
function drawWorldArmadillo() {
  console.log(cowsay.say({ text: "hello world", f: "armadillo" }));
}
module.exports = drawWorldArmadillo;
