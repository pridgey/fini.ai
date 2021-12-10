const brain = require("brain.js");
const model = require("./../json/spout-model.json");
const prompt = require("prompt-sync")({ sigint: true });

const net = new brain.recurrent.LSTM({
  hiddenLayers: [100, 100],
  outputSize: 294,
});

net.fromJSON(model);

let inp = "";

while (inp !== "-exit") {
  inp = prompt("Input:");
  console.log("Out:", net.run(inp));
}
