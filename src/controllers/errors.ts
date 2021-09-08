import { NextFunction, Request, Response } from "express";
import HttpException from "../common/http-exception";

export const errorHandler = (
  error: HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = error.statusCode || error.status || 500;

  res.status(status).send(error);
};
