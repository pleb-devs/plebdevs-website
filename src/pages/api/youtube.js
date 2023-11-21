// /api/youtube
const youtubeApiKey = process.env.YOUTUBE_API_KEY

export default async function handler(req, res) {
  switch(req.query.q) {
    case 'workshops':
      const ytPlaylistItems = 'https://www.googleapis.com/youtube/v3/playlistItems'
      const part = 'snippet';
      const workshopsPlaylistId = 'PL22m-Ibz1G_Tkrl1_D-0PWzzL-7sc0Bx1';

      const workshops = await fetch(`${ytPlaylistItems}?part=${part}&playlistId=${workshopsPlaylistId}&key=${youtubeApiKey}`);

      const workshopsData = await workshops.json();
      res.status(200).json(workshopsData);
      break;
    default:
      res.status(400).json({ message: 'Bad Request' });
      break;
  }
}