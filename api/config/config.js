import config from './config.json';

// the default env is production, which for heroku
const env = process.env.NODE_ENV || 'development';
console.log('env *******', env);

if (env === 'development' || env === 'test') {
  // Object.keys() gets the object and return it as an array
  const envConfig = config[env];
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
