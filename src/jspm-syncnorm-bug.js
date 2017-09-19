import 'proxy-agent'
import 'http-proxy-agent'
import 'pac-proxy-agent'
import 'https-proxy-agent'
import 'get-uri'
import 'body-parser'
import 'finalhandler'
import 'send'
import 'mailgun-js'
import 'follow-redirects'
import 'superagent'
import 'mocha'
import express from 'express';
let app = express();

app.get('/', (req, res) => {
  res.sendStatus(200);
});

let server = app.listen(process.env.PORT || '3000', function () {
  console.log('App listening on port %s', server.address().port);
});
