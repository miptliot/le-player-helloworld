'use strict';

const path = require('path');

module.exports = {
    entry: {
        'le-player-helloworld' : './source/js/le-player-helloworld.js',
    },

    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: '[name].js',
    },

    module: {
        loaders: [
            {
                test: /(\.js)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components|jquery)/,
                include: path.join(__dirname, 'source', 'js'),
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    },

    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        alias: {
          // For libs from node_modules or bower_components
          //'jquery': 'jquery/dist/jquery.min'
        }
    },
    externals: {
        jquery: "$"
    },
};


