import type { NextApiRequest, NextApiResponse } from 'next'
import { patients } from "../../data"


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  {
        const patient = patients.find((p)=> p.id === id);
        if(!patient) {
            return res.status(404).json({ message: "patients not found"})

        } else {
            if(req.method === 'GET') {
                return res.status(200).json(patient.treatments)
            }
        }
           
    }
}
        
