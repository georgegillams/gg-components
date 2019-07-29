const fs = require('fs');
const { execSync } = require('child_process');

const updateImports = (file, findReplaces) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      let result = data;
      findReplaces.forEach(fr => {
        const splitFile = result.split(fr.find);
        if (splitFile.length === 1) {
          return;
        }
        result = splitFile.join(fr.replace);
      });

      fs.writeFile(file, result, 'utf8', err2 => {
        if (err2) return reject(err2);
        resolve();
      });
    });
  });

console.log('Crunching import paths...');
console.log('');

const findReplaces = [{ find: '.scss', replace: '.css' }];

const jsFiles = execSync('find dist -name "*.js" | grep -v node_modules')
  .toString()
  .split('\n')
  .filter(s => s !== '');

const updatePromises = jsFiles.map(jF => updateImports(jF, findReplaces));

Promise.all(updatePromises).then(() => {
  console.log('All good.  👍');
  process.exit(0);
});
