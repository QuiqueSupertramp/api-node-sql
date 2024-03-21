import { Router } from "express"
import userApiController from "./dependencies"

const userRouter = Router()

userRouter
  .get("/", userApiController.findAllUsers)
  .get("/:id", userApiController.findUserById)
  .patch("/:id", userApiController.modifyUser)
  .put("/:id", userApiController.updateUser)
  .post("/", userApiController.createUser)
  .delete("/destroy/:id", userApiController.destroyUser)

export default userRouter
