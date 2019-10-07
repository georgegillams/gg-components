const path = require('path');
const { exec, execSync } = require('child_process');

const auxilliaryFiles = ['dist/helpers/_tokens.scss'];

const transpile = file => {
  return new Promise(resolve => {
    const outputFile = path.dirname(file);
    const options =
      '--importer=node_modules/node-sass-tilde-importer --include-path=node_modules --include-path=src';
    exec(
      `npm run node-sass -- ${options} "${file}" --output="${outputFile}"`,
      null,
      () => {
        resolve();
      },
    );
  });
};

const deleteFile = file => {
  execSync(`rm "${file}"`);
};

console.log('Transpiling `dist` directory scss files...');
console.log('');

const scssFiles = execSync('find dist -name "*.scss" | grep -v node_modules')
  .toString()
  .split('\n')
  .filter(s => s !== '');

const sourceScssFiles = JSON.parse(JSON.stringify(scssFiles)).filter(f => {
  let res = true;
  auxilliaryFiles.forEach(aF => {
    if (f === aF) {
      res = false;
    }
  });
  return res;
});

transpilationTasks = sourceScssFiles.map(sF => transpile(sF));

Promise.all(transpilationTasks).then(() => {
  scssFiles.forEach(sF => {
    deleteFile(sF);
  });

  console.log('All good.  👍');
  process.exit(0);
});
