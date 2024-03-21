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
    return await this.userRepository.modify(userId, modifyUserDto)
  }

  async update(userId: UserId, updateUserDto: UpdateUserDTO) {
    return await this.userRepository.update(userId, updateUserDto)
  }

  async create(createUserDTO: CreateUserDTO) {
    return await this.userRepository.create(createUserDTO)
  }

  async destroy(userId: UserId) {
    return await this.userRepository.destroy(userId)
  }
}
