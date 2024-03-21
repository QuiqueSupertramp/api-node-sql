import { DateValueObject } from "../../../shared/domain/VO/primitives/date"

export class UserBirthdate extends DateValueObject {
  constructor(value: Date | string) {
    super({ name: "User Birthdate", value })
  }
}
