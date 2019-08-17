const path = require('path');
const { execSync } = require('child_process');

const auxilliaryFiles = ['dist/helpers/_tokens.scss'];

const transpile = file => {
  const outputFile = path.dirname(file);
  const options =
    '--importer=node_modules/node-sass-tilde-importer --include-path=node_modules --include-path=src';
  execSync(`npx node-sass ${options} "${file}" --output="${outputFile}"`);
};

const deleteFile = file => {
  execSync(`rm "${file}"`);
};

console.log('Transpiling dist directory scss files...');
console.log('');

const scssFiles = execSync('find dist -name "*.scss" | grep -v node_modules')
  .toString()
  .split('\n')
  .filter(s => s !== '');

const sourceScssFiles = execSync(
  'find dist -name "*.scss" | grep -v node_modules',
)
  .toString()
  .split('\n')
  .filter(f => {
    let res = true;
    auxilliaryFiles.forEach(aF => {
      if (f === aF) {
        res = false;
      }
    });
    return res;
  })
  .filter(s => s !== '');

sourceScssFiles.forEach(sF => {
  transpile(sF);
});

scssFiles.forEach(sF => {
  deleteFile(sF);
});

console.log('All good.  👍');
process.exit(0);
