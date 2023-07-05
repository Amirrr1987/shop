import { Router } from 'express'
import validator from "./validator"
import controller from "./controller"
const router = Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', validator.createOne, controller.createOne)
router.put('/:id', validator.updateOne, controller.updateOne)
router.delete('/:id', controller.deleteOne)

export default router