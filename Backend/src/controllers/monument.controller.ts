import { Request, Response } from "express";
import { prisma } from '../utils/db';


export async function getMonumentController(req: Request, res: any) {
    const { monument_name }: any = req.query
    try {
  
        const monument: any = await prisma.monument.findUnique({
            where: {
                name: monument_name,
            }
        });
        if (!monument) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log(monument)
        res.status(200).send(monument)
  
    } catch (error) {
  
      res.status(500).send(error)
  
    }
  
}

export async function getSuggestionsController(req: Request, res: any) {
    const { Monument_city }: any = req.query
    try {
  
        const monument: any = await prisma.monument.findMany({
            where: {
                city: Monument_city,
            }
        });
        if (!monument) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log(monument)
        res.status(200).send(monument)
  
    } catch (error) {
  
      res.status(500).send(error)
  
    }
  
}