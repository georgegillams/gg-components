const path = require('path');
const { execSync } = require('child_process');

const transpile = file => {
  const outputFile = path.dirname(file);
  const options =
    '--importer=node_modules/node-sass-tilde-importer --include-path=node_modules --include-path=src';
  execSync(`npx node-sass ${options} "${file}" --output="${outputFile}"`);
};

console.log('Transpiling build directory scss files...');
console.log('');

const scssFiles = execSync('find build -name "*.scss" | grep -v node_modules')
  .toString()
  .split('\n')
  .filter(s => s !== '');

scssFiles.forEach(sF => {
  transpile(sF);
});

console.log('All good.  👍');
process.exit(0);
