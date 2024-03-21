import { StringValueObject } from "../../../shared/domain/VO/primitives/string"

export class UserName extends StringValueObject {
  constructor(value: string) {
    super({
      name: "UserName",
      value,
      contractProps: {
        minLength: 2,
        maxLength: 30,
      },
    })
  }

  DTO() {
    return this.value
  }
}
