import type { NextApiRequest, NextApiResponse } from 'next'


const patients = [
{ id: '1', name: 'John Doe', age: 32 },
{ id: '2', name: 'Maria Rossi', age: 28 },
{ id: '3', name: 'Amit Sharma', age: 45 },
]


export default function handler(req: NextApiRequest, res: NextApiResponse) {
res.status(200).json(patients)
}