import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'OPTIONS'],
  origin: '*',
  optionsSuccessStatus: 200
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const nostrData = {
  names: {
    plebdevs: "f33c8a9617cb15f705fc70cd461cfd6eaf22f9e24c33eabad981648e5ec6f741"
  }
};

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.json(nostrData);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
