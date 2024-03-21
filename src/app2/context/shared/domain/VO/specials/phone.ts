import { StringValueObject } from "../primitives/string"

const PHONE_REGEX = /^[76]{1}[0-9]{8}$/

export class PhoneValueObject extends StringValueObject {
  constructor({ value, name }: { value: string; name: string }) {
    super({
      name,
      value,
      contractProps: {
        regex: PHONE_REGEX,
      },
    })
  }
}
