import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
})
const KEY = 'portfolio:views'

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')

  try {
    if (req.method === 'POST') {
      const count = await redis.incr(KEY)
      return res.status(200).json({ count })
    }

    if (req.method === 'GET') {
      const count = (await redis.get(KEY)) ?? 0
      return res.status(200).json({ count: Number(count) })
    }

    res.setHeader('Allow', 'GET, POST')
    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Failed to update views' })
  }
}