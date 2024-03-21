import { StringValueObject } from "../primitives/string"

const EMAIL_REGEX =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

export class EmailValueObject extends StringValueObject {
  constructor({ value, name }: { value: string; name: string }) {
    super({
      name,
      value,
      contractProps: {
        regex: EMAIL_REGEX,
      },
    })
  }
}
