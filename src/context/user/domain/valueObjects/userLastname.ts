import { Surname } from "../../../shared/domain/VO/specials/surname"

export class UserLastname extends Surname {
  constructor(value: string) {
    super({ name: "User Lastname", value })
  }
}
