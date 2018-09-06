import * as mongoose from 'mongoose';

const uri = process.env.DB_URI || '';
const colorCyan = '\x1b[36m%s\x1b[0m';
const colorRed = '\x1b[31m';

mongoose.connect(uri);
const db: mongoose.Connection = mongoose.connection;

db.once('open', () => {
  console.log(colorCyan, 'connected to mongo');
});

db.on('error', () => {
  console.log(colorRed, 'mongo connection error');
});
