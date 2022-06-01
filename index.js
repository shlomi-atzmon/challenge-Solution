const fs = require('fs');
const fastify = require('fastify')();
const port = +process.argv[2] || 3000;

const client = require('redis').createClient();
client.on('error', (err) => console.log('Redis Client Error', err));

client.on('ready', () => {
  fastify.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://0.0.0.0:${port}`);
  });
});

const cardsData = fs.readFileSync('./cards.json');
const cards = JSON.parse(cardsData);

fastify.get('/card_add', async (req, res) => {
  const key = `user_id: ${req.query.id}`;

  let cardPos = await client.incr(key);

  let card = cards[cardPos - 1];

  if (!card) {
    return res.send({ id: 'ALL CARDS' });
  }

  return res.send(card);
});

fastify.get('/ready', async (req, res) => {
  res.send({ ready: true });
});

client.connect();
