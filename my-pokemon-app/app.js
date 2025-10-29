const fs = require('node:fs');

const content = 'RAAAAAAAAAAAAAAAAA 6 7!';

fs.writeFile('testing.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

fs.readFile('testing.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});