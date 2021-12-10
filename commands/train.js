const brain = require("brain.js");
const dataset = require("../json/spout-dataset.json");
const fs = require("fs");

const net = new brain.recurrent.LSTM({
  hiddenLayers: [100, 100],
  //outputSize: 294,
});

net.train(dataset, {
  iterations: 30,
  log: true,
  callback: () => {
    console.log(new Date());
    console.log("");
  },
});

fs.writeFile("json/spout-model.json", JSON.stringify(net.toJSON()), (err) =>
  console.error(err)
);
