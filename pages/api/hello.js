// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  console.log(process.version);
  //const country = req.headers.get('x-vercel-ip-country');
  const country = await req.headers.get('x-vercel-ip-country');
  console.log(country);
  res.status(200).json({ name: 'John Doe', country })
}
