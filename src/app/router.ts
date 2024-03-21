import { Router } from "express"
import userRouter from "../context/user/infraestructure/api/userRouter"

const apiRouter = Router()

apiRouter.use("/users", userRouter)

apiRouter.use("*", (_, res) => res.status(404).json({ error: { message: "This endpoint not exist" } }))

export default apiRouter
