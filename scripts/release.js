const fs = require('fs');
const semver = require('semver');
const { execSync } = require('child_process');
const packageData = require('../package.json');

const blue = s => '\033[0;34m' + s + '\033[0m';
const yellow = s => '\033[0;33m' + s + '\033[0m';
const red = s => '\033[0;31m' + s + '\033[0m';

console.log('Starting release');
console.log('');

const getBumpType = () => {
  if (process.argv.includes('--major')) {
    return 'major';
  } else if (process.argv.includes('--minor')) {
    return 'minor';
  } else if (process.argv.includes('--patch')) {
    return 'patch';
  }

  console.warn(yellow(`No release type specified. Defaulting to patch.`));
  return 'patch';
};

const updatePackageFile = newVersion => {
  packageData.version = newVersion;
  const fileContent = JSON.stringify(packageData, null, 2) + '\n';
  fs.writeFileSync('package.json', fileContent, 'utf8');
  execSync('cp package.json ./dist/ && cp package-lock.json ./dist/');
  console.log(blue('package.json updated'));
};

const createTag = newVersion => {
  execSync(`git tag ${newVersion} && git push --tags`);
  console.log(blue('Release tagged'));
};

const commitChanges = newVersion => {
  execSync(`git add .`);
  execSync(`git commit -m "Publish ${newVersion}"`);
  execSync(`git push`);
  console.log(blue('Code pushed'));
};

const publishPackage = () => {
  execSync(`(cd dist && npm publish)`);
  console.log(blue('Package published'));
};

const getCurrentPublishedVersion = () => {
  return execSync(`npm view gg-components version`)
    .toString()
    .split('\n')[0];
};

const bumpType = getBumpType();
const currentVersion = packageData.version;
const currentVersionPublished = getCurrentPublishedVersion();
if (currentVersion !== currentVersionPublished) {
  console.warn(
    yellow(
      `Published version (${currentVersionPublished}) does not match package.json version (${currentVersion})`,
    ),
  );
}
const newVersion = semver.inc(currentVersion, bumpType);
console.log(`Publishing version ${newVersion}`);

updatePackageFile(newVersion);
createTag(newVersion);
commitChanges(newVersion);
publishPackage();
console.log('Done');
