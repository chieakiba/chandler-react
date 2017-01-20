//For server
require('babel-core/register')({ presets: ['es2015', 'react'] });
require('babel-polyfill');
require('import-export');
require('./server/app');

const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const react = require('react');
const reactDOMServer = require('react-dom/server');

const renderToString = reactDOMServer.renderToString;
