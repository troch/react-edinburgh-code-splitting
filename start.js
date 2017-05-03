const del = require('del');
const path = require('path');
const express = require('express');

const { exampleDir } = require('./env');

const build = require(`./${exampleDir}/build`);

del('./dist')
    .then(() => {
        build(() => {
            const app = express();

            app.use(express.static('./dist'));

            app.get('*', (req, res) => {
                res.sendFile(path.join(__dirname, 'dist', 'index.html'));
            });

            app.listen(9000, '0.0.0.0', function(err) {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log('Listening at http://localhost:9000');
            });
        });
    })
    .catch((err) => console.error(err));
