import { PhoneValueObject } from "../../../shared/domain/VO/specials/phone"

export class UserPhone extends PhoneValueObject {
  constructor(value: string) {
    super({ name: "User Phone", value })
  }
}
