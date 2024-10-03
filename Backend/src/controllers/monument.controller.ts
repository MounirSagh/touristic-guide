import { Request, Response } from "express";
import { prisma } from '../utils/db';


export async function getMonumentController(req: Request, res: Response) {
    const { monument_name } = req.params
    try {
  
        const monument = await prisma.monument.findUnique({
            where: {
                name: monument_name,
            }
        });

        if (!monument) {
            return res.status(404).json({ message: 'User not found' });
        }

  
        res.status(200).send(monument)
  
    } catch (error) {
  
      res.status(500).send(error)
  
    }
  
  }