import { UUID } from "../../../shared/domain/VO/specials/UUID"
import { UserBirthdate, UserEmail, UserFirstname, UserLastname, UserName, UserPhone } from "../../domain/valueObjects"

interface CreateUserRequest {
  name: string
  firstname: string
  lastname?: string
  email?: string
  phone?: string
  birthdate?: string
}

interface NewUserMapped {
  id: string
  name: string
  firstname: string
  lastname?: string
  email?: string
  phone?: string
  birthdate?: string
  active: boolean
}

export class CreateUserDTO {
  value
  constructor(newUser: CreateUserRequest) {
    this.value = this.mapNewUser(newUser)
  }

  private mapNewUser(newUser: CreateUserRequest) {
    const { name, firstname, lastname, email, phone, birthdate } = newUser

    const newUserMapped: NewUserMapped = {
      id: UUID.random().toString(),
      name: new UserName(name).value,
      firstname: new UserFirstname(firstname).value,
      active: true,
    }

    if (lastname) newUserMapped.lastname = new UserLastname(lastname).value
    if (email) newUserMapped.email = new UserEmail(email).value
    if (phone) newUserMapped.phone = new UserPhone(phone).value
    if (birthdate) newUserMapped.birthdate = new UserBirthdate(birthdate).value.toString()

    return newUserMapped
  }
}
