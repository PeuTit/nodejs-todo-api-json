import { NextFunction, Request, Response } from "express";

export const notFoundHandler = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const message = { status: "Ressource not found!" };

  res.status(404).json(message);
};
