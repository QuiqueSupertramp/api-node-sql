import { DateValueObject } from "../../../shared/domain/VO/primitives/date"

export class UserBirthdate extends DateValueObject {
  constructor(value: string) {
    super({ name: "User Birthdate", value })
  }
}
