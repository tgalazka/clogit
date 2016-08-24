/**
 * Standalone Express server mounting ClogIt
 */

var clogIt = require(__dirname + '/clogit');

var express = require('express');
var morgan = require('morgan');
var favicon = require('serve-favicon');

var standalone = express();

// uncomment after placing your favicon in /public
//standalone.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
standalone.use(morgan('dev'));

standalone.use('/clogit', clogIt);
standalong.listen(8080)
