import entities from './models';

module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'facebook-clone',
    synchronize: true,
    logging: true,
    cache: true,
    dropSchema: false,
    entities: entities,
  };