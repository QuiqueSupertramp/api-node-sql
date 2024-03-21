import { Surname } from "../../../shared/domain/VO/specials/surname"

export class UserFirstname extends Surname {
  constructor(value: string) {
    super({ name: "User Firstname", value })
  }
}
