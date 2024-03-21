import { UserPrimitives } from "../../domain/user"
import { UserEmail } from "../../domain/valueObjects/userEmail"
import { UserName } from "../../domain/valueObjects/userName"
import { UserPhone } from "../../domain/valueObjects/userPhone"
import { UserActive, UserBirthdate, UserFirstname, UserLastname } from "../../domain/valueObjects"

export class ModifyUserDTO {
  value: Partial<Omit<UserPrimitives, "id">>
  constructor(user: Partial<Omit<UserPrimitives, "id">>) {
    this.value = this.mapUserDTO(user)
  }

  private mapUserDTO(user: Partial<Omit<UserPrimitives, "id">>) {
    const userMapped: Partial<Omit<UserPrimitives, "id">> = {}

    if (user.name) userMapped.name = new UserName(user.name).value
    if (user.firstname) userMapped.firstname = new UserFirstname(user.firstname).value
    if (user.lastname) userMapped.lastname = new UserLastname(user.lastname).value
    if (user.email) userMapped.email = new UserEmail(user.email).value
    if (user.phone) userMapped.phone = new UserPhone(user.phone).value
    if (user.birthdate) userMapped.birthdate = new UserBirthdate(user.birthdate).value.toString()
    if (user.active) userMapped.active = new UserActive(user.active).value

    return userMapped
  }
}
