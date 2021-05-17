import { Router } from 'express'
import UserController from './controllers/UserController'

const router = Router()

router.get("/users", UserController.getAll)
router.get("/users/:id", UserController.getOne)
router.post("/users", UserController.create)
router.put("/users/:id", UserController.update)

export default router