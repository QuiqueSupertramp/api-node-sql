import { NotFoundError } from "../../../app/errors/httpErrors"
import { UserId } from "../domain/valueObjects/userId"
import { CreateUserDTO, ModifyUserDTO, UpdateUserDTO } from "../infraestructure/DTOs"
import { UserRepository } from "../infraestructure/repository"

export class UserService {
  private userRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async find(userId?: UserId) {
    return await this.userRepository.find(userId)
  }

  async modify(userId: UserId, modifyUserDto: ModifyUserDTO) {
    const idExist = await this.userRepository.check.idExist(userId)
    if (!idExist) throw new NotFoundError({ message: "ID not exists" })

    return await this.userRepository.save.modify(userId, modifyUserDto)
  }

  async update(userId: UserId, updateUserDto: UpdateUserDTO) {
    const idExist = await this.userRepository.check.idExist(userId)
    if (!idExist) throw new NotFoundError({ message: "ID not exists" })

    return await this.userRepository.save.update(userId, updateUserDto)
  }

  async create(createUserDTO: CreateUserDTO) {
    return await this.userRepository.save.create(createUserDTO)
  }

  async destroy(userId: UserId) {
    const idExist = await this.userRepository.check?.idExist(userId)
    if (!idExist) throw new NotFoundError({ message: "ID not exists" })

    return await this.userRepository.save.destroy(userId)
  }
}

// const userService = {
//   find: {
//     all: async () => {
//       const users = await userRepository.find.all()
//       if (!users) throw new NotFoundError({ message: "Not Users" })

//       return users.map(user => new User(user))
//     },
//     byId: async (userId: UserId) => {
//       const user = await userRepository.find.byId(userId)
//       if (!user) throw new NotFoundError({ message: "ID not exists" })

//       return new User(user).value
//     },
//   },
//   save: {
//     update: async (userId: UserId, updateUserDTO: UpdateUserDTO) => {
//       const idExist = await userRepository.check?.idExist(userId)
//       if (!idExist) throw new NotFoundError({ message: "ID not exists" })

//       return await userRepository.save.update(userId, updateUserDTO)
//     },
//     create: async (createUserDTO: CreateUserDTO) => {
//       return await userRepository.save.create(createUserDTO)
//     },
//     destroy: async (userId: UserId) => {
//       const idExist = await userRepository.check?.idExist(userId)
//       if (!idExist) throw new NotFoundError({ message: "ID not exists" })

//       return await userRepository.save.destroy(userId)
//     },

//     //  TODO
//     // deleteUser: async userId => {
//     //   const idExist = await userRepository.check?.idExist(userId)
//     //   if (!idExist) throw new NotFoundError({ message: "ID not exists" })
//     //   const res = await repo.updateUser({ userId, body: { active: false } })
//     //   if (res.error) return res
//     //   if (res.data.affectedRows === 0) return customErrors.ID_NOT_EXISTS(userId)
//     //   return { data: true }
//     // },
//   },
// }

// export default userService
