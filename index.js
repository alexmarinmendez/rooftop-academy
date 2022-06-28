const utils = require ("./utils.js");
require('dotenv').config();

const { token } = process.env;
utils.fetchBlocks(token);