import { EmailValueObject } from "../../../shared/domain/VO/specials/email"

export class UserEmail extends EmailValueObject {
  constructor(value: string) {
    super({ name: "User Email", value })
  }
}
