const { getQuote } = require("./../data");
const fs = require("fs");

const result = [];

const iterations = 10_000;

for (let i = 0; i < iterations; i++) {
  result.push(getQuote());
}

fs.writeFile("json/spout-dataset.json", JSON.stringify(result), (err) =>
  console.error(err)
);
