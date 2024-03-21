import { BooleanValueObject } from "../../../shared/domain/VO/primitives/boolean"

export class UserActive extends BooleanValueObject {
  constructor(value: boolean | 1 | 0) {
    super({ name: "User Active", value })
  }
}
