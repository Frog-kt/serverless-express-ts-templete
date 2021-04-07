import express, { Request, Response, NextFunction } from 'express'

export async function example(req: Request, res: Response, next: NextFunction) {
  res.status(200).send('example')
}
