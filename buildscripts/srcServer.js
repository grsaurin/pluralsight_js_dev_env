import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {"id":1,"firstName":"Bob", "lastName":"Smith", "email":"bob@gmmail.com"},
    {"id":2,"firstName":"Tammy", "lastName":"Norton", "email":"tnorton@gmmail.com"},
    {"id":3,"firstName":"Tina", "lastName":"Lee", "email":"lee.tina@gmmail.com"}
  ]);
});

app.listen(port, (err) => {
  if(err){
    console.log(err); // eslint-disable-line no-console
  }
  else{
    open('http://localhost:' + port);
  }
});
