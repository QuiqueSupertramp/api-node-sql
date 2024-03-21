import { Router } from "express"
import { UserRepository } from "../repository"
import { UserService } from "../../application/service"
import { UserApiController } from "./userApiController"

const userRouter = Router()

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userApiController = new UserApiController(userService)

userRouter.get("/", async (req, res) => await userApiController.findAllUsers(req, res))

userRouter.get("/:id", async (req, res) => await userApiController.findUserById(req, res))

userRouter.patch("/:id", async (req, res) => await userApiController.modifyUser(req, res))

userRouter.put("/:id", async (req, res) => await userApiController.updateUser(req, res))

userRouter.post("/", async (req, res) => await userApiController.createUser(req, res))

userRouter.delete("/destroy/:id", async (req, res) => await userApiController.destroyUser(req, res))

export default userRouter
