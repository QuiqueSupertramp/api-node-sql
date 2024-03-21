import { NotFoundError } from "../../../app/errors/httpErrors"
import SQL from "../../../../ddbb/query"
import { UserPrimitives } from "../domain/user"
import { UserId } from "../domain/valueObjects"
import { CreateUserDTO } from "./DTOs/createUserDto"
import { ModifyUserDTO } from "./DTOs/modifyUserDTO"
import { UpdateUserDTO } from "./DTOs/updateUserDTO"
import * as QUERIES from "./queries"

export class UserRepository {
  constructor() {}

  save = {
    modify: this.modify,
    create: this.create,
    update: this.update,
    destroy: this.destroy,
  }

  check = {
    idExist: this.idExist,
    // emailExists: this.emailExists,
  }

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

  private async modify(userId: UserId, modifyUserDto: ModifyUserDTO) {
    return await SQL.modify(QUERIES.modifyUser(userId, modifyUserDto))
  }

  private async update(userId: UserId, updateUserDto: UpdateUserDTO) {
    return await SQL.modify(QUERIES.updateUser(userId, updateUserDto))
  }

  private async create(createUserDTO: CreateUserDTO) {
    return await SQL.modify(QUERIES.createNewUser(createUserDTO))
  }

  private async destroy(userId: UserId) {
    return await SQL.modify(QUERIES.destroyUser(userId))
  }

  private async idExist(userId: UserId) {
    return await SQL.check(QUERIES.checkIdExists(userId))
  }

  // private async emailExists(userEmail: UserEmail) {
  //   return await await SQL.check(QUERIES.checkEmailExists(userEmail))
  // }
}

// const userRepository: UserRepository = {
//   find: {
//     all: async () => await SQL.select<UserPrimitives>(QUERIES.getAllUsers()),
//     byId: async id => {
//       const user = await SQL.select<UserPrimitives>(QUERIES.getUserById(id))
//       if (!user) throw new NotFoundError({ message: "ID not exists" })
//       return user[0]
//     },
//   },
//   save: {
//     update: async (userId, updateUserDto) => await SQL.modify(QUERIES.updateUser(userId, updateUserDto)),
//     create: async user =>
//     destroy: async userId => await SQL.modify(QUERIES.destroyUser(userId)),
//   },
//   check: {
//     idExist: async userId => await SQL.check(QUERIES.checkIdExists(userId)),
//     emailExists: async userEmail => await SQL.check(QUERIES.checkEmailExists(userEmail)),
//   },
// }

// export default userRepository
