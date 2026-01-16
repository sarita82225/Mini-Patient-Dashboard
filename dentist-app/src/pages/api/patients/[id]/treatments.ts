import type { NextApiRequest, NextApiResponse } from 'next'

const treatments: Record<string, any[]> = {
  '1': [
    { id: 1, type: 'Cleaning', date: '2024-01-10' },
    { id: 2, type: 'Filling', date: '2024-03-05' },
  ],
  '2': [{ id: 1, type: 'Whitening', date: '2024-02-20' }],
  '3': [{ id: 1, type: 'Root Canal', date: '2024-01-15' }],
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  res.status(200).json(treatments[id as string] || [])
}