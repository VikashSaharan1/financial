// config/index.js
const defaultConfig = require('../config/default');
const env = process.env.NODE_ENV || 'development';
const environmentConfig = require(`../config/${env}`);

const config = { ...defaultConfig, ...environmentConfig };

export default config;
