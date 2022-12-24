import { Controller } from '../../presentation/protocols/controller'

import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      // ...(req.body ? { bodyResp: req.body } : {}),
      ...(req.params || {}),
      ...(req.query || {}),
      ...(req.headers ? { headers: { authorization: req.headers.authorization } } : {}),
      // ...(req.file ? { file: req.file } : {}),
      // eslint-disable-next-line @typescript-eslint/dot-notation
      //usuario: req['usuario'],
      protocol: req.protocol,
      host: req.get('host')
    }
    const httpResponse = await controller.handle(request)
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
