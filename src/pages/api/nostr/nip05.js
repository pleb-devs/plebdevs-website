import { runMiddleware, corsMiddleware } from "@/utils/corsMiddleware";

const nostrData = {
    names: {
      plebdevs:
        "f33c8a9617cb15f705fc70cd461cfd6eaf22f9e24c33eabad981648e5ec6f741"
    },
    relays: {
      "f33c8a9617cb15f705fc70cd461cfd6eaf22f9e24c33eabad981648e5ec6f741": ["wss://relay.snort.social", "wss://relay.damus.io", "wss://nostr.mutinywallet.com", "wss://nos.lol"]
    }
  };
  
  export default async function Nip05(req, res) {
    await runMiddleware(req, res, corsMiddleware);
    
    const requestedName = req.query.name;
  
    if (!requestedName) {
      return res.status(404).json({ error: "Name not found" });
    }
  
    // Convert the requested name to lowercase for the lookup
    const normalizedRequestedName = requestedName.toLowerCase();
  
    // Find the matching key in nostrData.names (case-insensitive)
    const matchingNameKey = Object.keys(nostrData.names).find(
      key => key.toLowerCase() === normalizedRequestedName
    );
  
    if (!matchingNameKey) {
      return res.status(404).json({ error: "Name not found" });
    }
  
    const publicKeyForName = nostrData.names[matchingNameKey];
  
    const responseObject = {
      names: {
        [matchingNameKey]: publicKeyForName
      }
    };
  
    // Optionally add relays if they exist for the given name
    if (nostrData.relays[publicKeyForName]) {
      responseObject.relays = {
        [publicKeyForName]: nostrData.relays[publicKeyForName]
      };
    }
  
    return res.status(200).json(responseObject);
  }