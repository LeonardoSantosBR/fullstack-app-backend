//import { HttpResponse } from "../protocols/http";

import { ServerError } from "../errors/server-error";
import { UnauthorizedError } from "../errors/unauthorized-error";

export const badRequest = (error: Error) => ({
  statusCode: 400,
  body: error,
});

export const forbidden = (error: Error) => ({
  statusCode: 403,
  body: error,
});

export const unauthorized = () => ({
  statusCode: 401,
  body: new UnauthorizedError(),
});

export const unauthorizedInform = (error) => ({
  statusCode: 401,
  body: { message: error },
});

export const serverError = (error: Error) => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const sucess = (data: any) => ({
  statusCode: 200,
  body: data,
});

export const noContent = () => ({
  statusCode: 204,
  body: null,
});

export const notFound = (data: any) => ({
  statusCode: 404,
  body: data,
});
