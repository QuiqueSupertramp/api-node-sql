import { UserEmail } from "../domain/valueObjects"
import { UserId } from "../domain/valueObjects/userId"
import { CreateUserDTO } from "./DTOs/createUserDto"
import { ModifyUserDTO } from "./DTOs/modifyUserDTO"
import { UpdateUserDTO } from "./DTOs/updateUserDTO"

const userProps = "BIN_TO_UUID(id) id,name, firstname, lastname, email, phone, birthdate, active"

export const getAllUsers = () => ({
  query: `SELECT ${userProps} FROM users`,
})

export const getUserById = (userId: UserId) => ({
  query: `
    SELECT ${userProps} FROM users
    WHERE id = UUID_TO_BIN(?)
    LIMIT 1`,
  values: [userId.value],
})

export const modifyUser = (userId: UserId, modifyUserDto: ModifyUserDTO) => {
  return {
    query: "UPDATE users SET ? WHERE id = UUID_TO_BIN(?)",
    values: [modifyUserDto.value, userId.value],
  }
}
export const updateUser = (userId: UserId, updateUserDto: UpdateUserDTO) => {
  return {
    query: "UPDATE users SET ? WHERE id = UUID_TO_BIN(?)",
    values: [updateUserDto.value, userId.value],
  }
}

export const createNewUser = (createUserDTO: CreateUserDTO) => {
  const { id, name, firstname, lastname, email, phone, birthdate } = createUserDTO.value
  return {
    query: `INSERT INTO users (id, name, firstname, lastname, email, phone, birthdate) VALUES (UUID_TO_BIN(?),?,?,?,?,?,?)`,
    values: [id, name, firstname, lastname, email, phone, birthdate],
  }
}

export const checkIdExists = (userId: UserId) => {
  return {
    query: `SELECT id FROM users WHERE id = UUID_TO_BIN(?) LIMIT 1`,
    values: [userId.value],
  }
}
export const checkEmailExists = (userEmail: UserEmail) => {
  return {
    query: `SELECT id FROM users WHERE email = '?' LIMIT 1`,
    values: [userEmail.value],
  }
}

export const destroyUser = (userId: UserId) => {
  return {
    query: "DELETE FROM users WHERE id = UUID_TO_BIN(?)",
    values: [userId.value],
  }
}
