import { NotFoundError } from "../../../app/errors/httpErrors"
import SQL from "../../../ddbb/query"
import { UserPrimitives } from "../domain/user"
import { UserId } from "../domain/valueObjects"
import { CreateUserDTO } from "./DTOs/createUserDto"
import { ModifyUserDTO } from "./DTOs/modifyUserDTO"
import { UpdateUserDTO } from "./DTOs/updateUserDTO"
import * as QUERIES from "./queries"

export class UserRepository {
  constructor() {}

  // save = {
  //   modify: this.modify,
  //   create: this.create,
  //   update: this.update,
  //   destroy: this.destroy,
  // }

  // check = {
  //   idExist: this.idExist,
  //   // emailExists: this.emailExists,
  // }

  async find(userId?: UserId) {
    if (!userId) return await this.findAll()
    return await this.findById(userId)
  }

  private async findAll() {
    return await SQL.select<UserPrimitives>(QUERIES.getAllUsers())
  }

  private async findById(userId: UserId) {
    const user = await SQL.select<UserPrimitives>(QUERIES.getUserById(userId))
    if (!user) throw new NotFoundError({ message: "ID not exists" })
    return user[0]
  }

  async modify(userId: UserId, modifyUserDto: ModifyUserDTO) {
    const idExists = await this.idExist(userId)
    if (!idExists) throw new NotFoundError({ message: "ID not exists" })
    return await SQL.modify(QUERIES.modifyUser(userId, modifyUserDto))
  }

  async update(userId: UserId, updateUserDto: UpdateUserDTO) {
    const idExists = await this.idExist(userId)
    if (!idExists) throw new NotFoundError({ message: "ID not exists" })
    return await SQL.modify(QUERIES.updateUser(userId, updateUserDto))
  }

  async create(createUserDTO: CreateUserDTO) {
    return await SQL.modify(QUERIES.createNewUser(createUserDTO))
  }

  async destroy(userId: UserId) {
    const idExists = await this.idExist(userId)
    if (!idExists) throw new NotFoundError({ message: "ID not exists" })
    return await SQL.modify(QUERIES.destroyUser(userId))
  }

  async idExist(userId: UserId) {
    return await SQL.check(QUERIES.checkIdExists(userId))
  }

  // private async emailExists(userEmail: UserEmail) {
  //   return await await SQL.check(QUERIES.checkEmailExists(userEmail))
  // }
}
