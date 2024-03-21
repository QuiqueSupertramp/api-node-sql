import {
  UserActive,
  UserBirthdate,
  UserEmail,
  UserFirstname,
  UserId,
  UserLastname,
  UserName,
  UserPhone,
} from "./valueObjects"

export interface UserPrimitives {
  id: string
  name: string
  firstname: string
  lastname?: string
  email?: string
  phone?: string
  birthdate?: string
  active?: boolean
  // roles: UserRoles
}

export class User {
  readonly id: UserId
  readonly name: UserName
  readonly firstname: UserFirstname
  readonly lastname?: UserLastname
  readonly email?: UserEmail
  readonly phone?: UserPhone
  readonly birthdate?: UserBirthdate
  readonly active?: UserActive
  // roles: UserRoles

  constructor(user: UserPrimitives) {
    this.id = new UserId(user.id)
    this.name = new UserName(user.name)
    this.firstname = new UserFirstname(user.firstname)
    this.lastname = user.lastname ? new UserLastname(user.lastname) : undefined
    this.email = user.email ? new UserEmail(user.email) : undefined
    this.phone = user.phone ? new UserPhone(user.phone) : undefined
    this.birthdate = user.birthdate ? new UserBirthdate(user.birthdate) : undefined
    this.active = user.active ? new UserActive(user.active) : undefined
  }

  public get value(): UserPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      firstname: this.firstname.value,
      lastname: this.lastname?.value,
      email: this.email?.value,
      phone: this.phone?.value,
      birthdate: this.birthdate?.value.toLocaleDateString(),
      active: this.active?.value,
    }
  }
}
