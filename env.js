const yargs = require('yargs');

const { example = '1' } = yargs.argv;
const exampleDirs = {
    '1': '1-commons-chunk-vendor-split',
    '2': '2-vendor-dlls',
    '3': '3-lazy-loading-views',
    '4': '4-lazy-loading-views-commons'
}

module.exports = {
    exampleDir: exampleDirs[example]
};
