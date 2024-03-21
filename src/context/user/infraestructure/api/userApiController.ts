import { Request, Response } from "express"
import { handleErrors } from "../../../../app/errors/handleErrors"
import { UserId } from "../../domain/valueObjects"
import { CreateUserDTO, ModifyUserDTO, UpdateUserDTO } from "../DTOs"
import { UserService } from "../../application/service"
import { User, UserPrimitives } from "../../domain/user"

export class UserApiController {
  private userService: UserService

  constructor(userService: UserService) {
    this.userService = userService
  }

  findAllUsers = async (_req: Request, res: Response) => {
    try {
      const usersRaw = (await this.userService.find()) as UserPrimitives[]
      const users = usersRaw.map(user => new User(user).value)
      res.status(200).json(users)
    } catch (error) {
      console.log("error:", error)
      handleErrors(error, res)
    }
  }

  findUserById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const userId = new UserId(id)
      const userRaw = (await this.userService.find(userId)) as UserPrimitives
      const user = new User(userRaw)
      res.status(200).json(user.value)
    } catch (error) {
      console.log("error:", error)
      handleErrors(error, res)
    }
  }

  modifyUser = async (req: Request, res: Response) => {
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

  updateUser = async (req: Request, res: Response) => {
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

  createUser = async (req: Request, res: Response) => {
    try {
      const createUserDTO = new CreateUserDTO(req.body)
      const isUserCreated = await this.userService.create(createUserDTO)
      res.status(200).json(isUserCreated)
    } catch (error) {
      console.log("error:", error)
      handleErrors(error, res)
    }
  }

  destroyUser = async (req: Request, res: Response) => {
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
