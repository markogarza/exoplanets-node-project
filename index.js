const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

fs.createReadStream('kepler_data.csv')
  .on('data', (data) => {
    console.log(data);
    results.push(data);
  })
  .on('error', (err) => {
    return console.log(err);
  })
  .on('end', (end) => {
    console.log(`this is the end: ${end}`);
  });
