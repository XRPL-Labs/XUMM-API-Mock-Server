require('dotenv').config()
const ws = require('ws')
const apiFixtures = require('./fixtures/api')
const port = process.env.XUMM_PORT ? process.env.XUMM_PORT : 3000

const express = require('express')
const app = express()
app.use(express.json());

const auth = (req, res, next) => {
  const key = process.env.XUMM_TEST_API_KEY ? process.env.XUMM_TEST_API_KEY : apiFixtures.api.key;
  const secret = process.env.XUMM_TEST_API_SECRET ? process.env.XUMM_TEST_API_SECRET : apiFixtures.api.secret;

  if (req.headers['x-api-key'] !== key || req.headers['x-api-secret'] !== secret) {
    return res.status(403).send(apiFixtures.invalidCredentials)
  }

  next();
}

app.post('/payload', auth, (req, res) => {
  const {txjson, txblob} = req.body;
  if (!txjson && !txblob) {
    return res.sendStatus(400)
  }

  if (txjson && !txjson.TransactionType) {
    return res.sendStatus(400)
  }

  res.send(apiFixtures.payload.created)
})

app.get('/payload/:uuid', auth, (req, res) => {
  const payload = apiFixtures.payload.get

  res.send(req.params.uuid !== payload.meta.uuid ? 404 : payload)
})

app.get('/payload/ci/:identifier', auth, (req, res) => {
  const payload = apiFixtures.payload.get

  res.send(req.params.identifier !== payload.custom_meta.identifier ? 404 : payload)
})

app.delete('/payload/:uuid', auth,  (req, res) => {
  res.send(req.params.uuid !== payload.meta.uuid ? 404 : apiFixtures.payload.cancelled)
})

app.get('/ping', auth, (req, res) => {
  res.send(apiFixtures.ping.pong)
})

app.get('/curated-assets', auth,  (req, res) => {
  res.send(apiFixtures.curatedAssets)
})

app.get('/rates/:currency', auth, (req, res) => {
  const {currency} = req.params
  const result = apiFixtures.rates[currency]
  if (!result) {
    return res.sendStatus(400)
  }

  res.send(result)
})

app.post('/kyc-status', auth, (req, res) => {
  const {user_token} = req.body

  if (!user_token) {
    return res.sendStatus(400)
  }

  res.send(apiFixtures.kycStatus)
})

app.get('/kyc-status/:account', auth, (req, res) => {
  const {account} = req.params
  const status = apiFixtures.kycStatus

  if (status.accountId !== account) {
    return res.sendStatus(404)
  }

  res.send(status)
})

app.get('/xrpl-tx/:txid', auth, (req, res) => {
  const tx = apiFixtures.xrplTx
  res.send(tx.txid !== req.params.txid ? 404 : tx)
})

app.get('/user-token/:token', auth, (req, res) => {
  res.send(fetchTokens([req.params.token]))
})

const fetchTokens = (tokenArr) => {
  const { tokens } = apiFixtures.verifyUserToken
  const result = tokens.filter((token) => tokenArr.includes(token.user_token))

  return {'tokens': result}
}

app.post('/user-tokens', auth, (req, res) => {
  const {tokens} = req.body

  if (!tokens) {
    res.sendStatus(400)
    return
  }

  res.send(fetchTokens(tokens))
})

const server = app.listen(port, () => console.log(`Test server running on port ${port}`))

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

let connections = [];
server.on('connection', connection => {
  connections.push(connection);
  connection.on('close', () => connections = connections.filter(curr => curr !== connection));
});

function shutDown() {
  console.log('Shutting down gracefully');
  server.close(() => {
    console.log('Closed out remaining connections');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);

  connections.forEach(curr => curr.end());
  setTimeout(() => connections.forEach(curr => curr.destroy()), 5000);
}
