import { Request, Response } from "express"
import { handleErrors } from "../../../../app/errors/handleErrors"
import { UserId } from "../../domain/valueObjects"
import { CreateUserDTO, ModifyUserDTO, UpdateUserDTO } from "../DTOs"
import { UserService } from "../../application/service"

export class UserApiController {
  private userService: UserService
  constructor(userService: UserService) {
    this.userService = userService
  }

  async findAllUsers(_req: Request, res: Response) {
    try {
      const users = await this.userService.find()
      res.status(200).json(users)
    } catch (error) {
      console.log("error:", error)
      handleErrors(error, res)
    }
  }

  async findUserById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const userId = new UserId(id)

      const user = await this.userService.find(userId)
      res.status(200).json(user)
    } catch (error) {
      console.log("error:", error)
      handleErrors(error, res)
    }
  }

  async modifyUser(req: Request, res: Response) {
    try {
      const { id } = req.params
      const userId = new UserId(id)
      const modifyUserDTO = new ModifyUserDTO(req.body)
      const isUserModified = await this.userService.modify(userId, modifyUserDTO)

      res.status(200).json(isUserModified)
    } catch (error) {
      console.log("error:", error)
      handleErrors(error, res)
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params
      const userId = new UserId(id)
      const updateUserDTO = new UpdateUserDTO(req.body)
      const isUserUpdated = await this.userService.update(userId, updateUserDTO)

      res.status(200).json(isUserUpdated)
    } catch (error) {
      console.log("error:", error)
      handleErrors(error, res)
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const createUserDTO = new CreateUserDTO(req.body)
      const isUserCreated = await this.userService.create(createUserDTO)

      res.status(200).json(isUserCreated)
    } catch (error) {
      console.log("error:", error)
      handleErrors(error, res)
    }
  }

  async destroyUser(req: Request, res: Response) {
    try {
      const { id } = req.params
      const userId = new UserId(id)
      const isUserDestroyed = await this.userService.destroy(userId)

      res.status(200).json(isUserDestroyed)
    } catch (error) {
      console.log("error:", error)
      handleErrors(error, res)
    }
  }
}
