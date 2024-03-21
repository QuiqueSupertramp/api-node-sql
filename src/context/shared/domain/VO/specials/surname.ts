import { StringValueObject } from "../primitives/string"

export class Surname extends StringValueObject {
  constructor({ value, name }: { value: string; name: string }) {
    super({
      name,
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
