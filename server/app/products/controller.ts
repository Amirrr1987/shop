import { pick } from "lodash"
import { Request, Response, NextFunction } from "express"
import model from './model'
import { compare, genSalt, hash } from "bcrypt"
import { Product } from "./dto"
import { log } from "console"
export default new class Controller {
  async getAll(req: Request, res: Response, next: NextFunction) {
    let products: any = await model.find()
    res.status(200).send({
      message: 'products list!',
      success: true,
      status: 200,
      data: products
    })
  }
  async getOne(req: Request, res: Response, next: NextFunction) {
    let product: any = await model.findById(req.params.id)
    if (!product) {
      return res.status(401).send({ message: 'Your product not found!' })
    }
    log(product)
    res.status(200).send({
      message: 'one product found!',
      success: true,
      status: 201,
      data: product
    })

  }
  async createOne(req: Request, res: Response, next: NextFunction) {
    let product: any = await model.findOne({ title: req.body.title })
    if (!!product) {
      return res.status(401).send({ message: 'Your product are registered!' })
    }
    product = await model.create(req.body)
    res.status(201).send(product)

  }
  async updateOne(req: Request, res: Response, next: NextFunction) {
    let product: any = await model.findByIdAndUpdate(req.params.id, req.body)
    if (!product) {
      return res.status(401).send({ message: 'Your product not found!' })
    }
    res.status(201).send({
      message: 'your product update!',
      success: true,
      status: 201,
      data: product
    })

  }
  async deleteOne(req: Request, res: Response, next: NextFunction) {
    let product: any = await model.findByIdAndRemove(req.params.id)
    if (!product) {
      return res.status(401).send({ message: 'Your product not found!' })
    }
    res.status(201).send({
      message: 'your product remove from database!',
      success: true,
      status: 201,
    })
  }
}