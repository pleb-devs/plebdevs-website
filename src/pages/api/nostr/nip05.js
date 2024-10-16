import { runMiddleware, corsMiddleware } from "@/utils/corsMiddleware";

const nostrData = {
    names: {
      plebdevs:
        "f33c8a9617cb15f705fc70cd461cfd6eaf22f9e24c33eabad981648e5ec6f741"
    }
  };
  
  export default async function Nip05(req, res) {
    await runMiddleware(req, res, corsMiddleware);

    return res.status(200).json(nostrData);
}