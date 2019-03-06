export default {
  development: {
    username: 'postgres',
    password: 'password',
    database: 'meals-dev',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432,
  },
  test: {
    username: 'postgres',
    password: 'password',
    database: 'meals-test',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432,
  },
  production: {
    username: 'postgres',
    password: 'password',
    database: 'meals-prod',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
