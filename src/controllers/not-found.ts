import { NextFunction, Request, Response } from "express";

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = { status: "Ressource not found!" };

  res.status(404).json(message);
};
