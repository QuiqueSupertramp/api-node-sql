import { UserService } from "../../application/service"
import { UserRepository } from "../repository"
import { UserApiController } from "./userApiController"

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userApiController = new UserApiController(userService)

export default userApiController
