import { Request, Response, NextFunction } from "express";
import { productSchema } from "./dto";

export default new class Validator {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const { success, error }: any = await productSchema.safeParseAsync(req.body)
    if (!success) {
      return res.status(400).send(error.issues)
    }
    next()
  }
  async getOne(req: Request, res: Response, next: NextFunction) {
    const { success, error }: any = await productSchema.safeParseAsync(req.params)
    if (!success) {
      return res.status(400).send(error.issues)
    }
    next()
  }
  async createOne(req: Request, res: Response, next: NextFunction) {
    const { success, error }: any = await productSchema.safeParseAsync(req.body)
    if (!success) {
      return res.status(400).send(error.issues)
    }
    next()
  }
  async updateOne(req: Request, res: Response, next: NextFunction) {
    const { success, error }: any = await productSchema.safeParseAsync(req.body)
    if (!success) {
      return res.status(400).send(error.issues)
    }
    next()
  }
  async deleteOne(req: Request, res: Response, next: NextFunction) {
    const { success, error }: any = await productSchema.safeParseAsync(req.body)
    if (!success) {
      return res.status(400).send(error.issues)
    }
    next()
  }
}