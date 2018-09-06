import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as graphqlHTTP from 'express-graphql';
// @ts-ignore
// import * as parse from 'parse-server';

dotenv.config();
import './db';
import schema from './schema';

const app = express();
const port = process.env.PORT || 4000;

// const api = parse.ParseServer({
//   databaseURI: process.env.MONGO_URI,
//   appId: process.env.PARSE_APP_ID,
//   masterKey: process.env.PARSE_MASTER_KEY
// });

app.use('*', cors());
// app.use('/parse', api);
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.use('/', (req, res) => {
  res.send('hello health check!');
});

app.listen(port, async () => {
  console.log(`Express app at http://localhost:${port}/graphql`);
});
