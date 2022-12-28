/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import path from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { Connection, createConnection } from 'typeorm';
import entities from './models';
import resolvers from './resolvers';

import { APP_SECRET } from './utils/Auth'; 
import jwt from 'jsonwebtoken';

async function main() {
  try {
    dotenv.config();

    // connect database
    const connection: Connection = await createConnection({
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
    });

    if (connection.isConnected) {
      await connection.runMigrations();
      console.log(
        `\n${connection.options.type} database connected to ${connection.options.database}`
      );
    }

    process.on('unhandledRejection', (error: any) => {
      throw new Error(error);
    });

    const app = express();
    const httpServer = http.createServer(app);

    // cors config
    app.use(cors());

    const getUser = (token:string) => {
      try {
          if (token) {
              return jwt.verify(token, APP_SECRET)
          }
          return null
      } catch (error) {
          return null
      }
    }
    // graphql server
    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: resolvers,
        validate: false,
      }),
      context: ({ req }) => {
        const token = req.get('Authorization') || ''
        return { user: getUser(token.replace('Bearer', ''))}
      },
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    const PORT = process.env.PORT || 8080;
    await new Promise<void>((resolve) =>
      // eslint-disable-next-line no-promise-executor-return
      httpServer.listen({ port: PORT }, resolve)
    );
    console.log(`facebook-clone-server running on port ${PORT} 🚀🚀🚀`);
  } catch (error: any) {
    throw new Error(error);
  }
}

main().catch((error) => console.error(error));