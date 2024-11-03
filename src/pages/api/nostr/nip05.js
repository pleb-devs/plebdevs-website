import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD', 'OPTIONS'],
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: ['X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Content-Type', 'Date', 'X-Api-Version']
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
  // Run the CORS middleware
  await runMiddleware(req, res, cors);

  // Set CORS headers explicitly as well
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Handle the actual request
  if (req.method === 'GET') {
    const name = req.query.name;
    if (name && nostrData.names[name]) {
      return res.json({
        names: {
          [name]: nostrData.names[name]
        }
      });
    }
    return res.json(nostrData);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
