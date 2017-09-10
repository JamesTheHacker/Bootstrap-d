const path = require('path');

module.exports = {
    devPort: 1337,
    devHost: 'localhost',
    entry: path.join(__dirname, '../src/js/main.js'),
    dist: path.join(__dirname, '../dist'),
    index: path.join(__dirname, '../src/index.html'),
    js: 'app.js',
    css: 'app.css',
    sassIncludes: [ 
        path.join(__dirname, '../src/css')
    ]
};
