import { runMiddleware, corsMiddleware } from "@/utils/corsMiddleware";

const nostrData = {
    names: {
      plebdevs:
        "f33c8a9617cb15f705fc70cd461cfd6eaf22f9e24c33eabad981648e5ec6f741"
    }
  };
  
  export default async function Nip05(req, res) {
    await runMiddleware(req, res, corsMiddleware);

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    // Set CORS headers explicitly
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return res.status(200).json(nostrData);
}
