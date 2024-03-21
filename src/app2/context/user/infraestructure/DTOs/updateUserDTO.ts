import { UserBirthdate, UserEmail, UserFirstname, UserLastname, UserName, UserPhone } from "../../domain/valueObjects"

interface UpdateUserRequest {
  name: string
  firstname: string
  lastname?: string
  email?: string
  phone?: string
  birthdate?: string
}

interface UpdateUserMapped {
  name: string
  firstname: string
  lastname?: string
  email?: string
  phone?: string
  birthdate?: string
  active: boolean
}

export class UpdateUserDTO {
  value
  constructor(updateUser: UpdateUserRequest) {
    this.value = this.mapUpdateUser(updateUser)
  }

  private mapUpdateUser(newUser: UpdateUserRequest) {
    const { name, firstname, lastname, email, phone, birthdate } = newUser

    const updateUserMapped: UpdateUserMapped = {
      name: new UserName(name).value,
      firstname: new UserFirstname(firstname).value,
      active: true,
    }

    if (lastname) updateUserMapped.lastname = new UserLastname(lastname).value
    if (email) updateUserMapped.email = new UserEmail(email).value
    if (phone) updateUserMapped.phone = new UserPhone(phone).value
    if (birthdate) updateUserMapped.birthdate = new UserBirthdate(birthdate).value.toString()

    return updateUserMapped
  }
}
