//Esta é uma função de middleware integrada no Express. Ele analisa os parâmetros de consulta da solicitação recebida.
import { Router } from "express"
import { adaptRoute } from "../../adapters/express-route-adapter"

export default async (router: Router)=>{
   router.get('', adaptRoute())
   router.post('', adaptRoute())
   router.put('', adaptRoute())
   router.delete('', adaptRoute())
}