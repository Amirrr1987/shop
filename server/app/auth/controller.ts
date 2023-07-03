import { log } from "console"
import { Request, Response, NextFunction } from "express"
import model from './model'

export default new class Controller {
  async login(req: Request, res: Response, next: NextFunction) {
    await log(req)
  }
  async register(req: Request, res: Response, next: NextFunction) {
    await log(req)
  }
}