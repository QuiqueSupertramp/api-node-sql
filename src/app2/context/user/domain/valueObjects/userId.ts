import { UUID } from "../../../shared/domain/VO/specials/UUID"

export class UserId extends UUID {
  constructor(value: string) {
    super({ value, name: "User ID" })
  }
}
