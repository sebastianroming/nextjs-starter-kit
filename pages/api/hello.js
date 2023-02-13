// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(process.version);
  //const country = req.headers.get('x-vercel-ip-country');
  const country = req.headers['x-vercel-ip-country'];
  console.log(country);
  res.status(200).json({ name: 'John Doe', country })
}
