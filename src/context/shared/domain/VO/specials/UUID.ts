import { randomUUID } from "crypto"
import { StringValueObject } from "../primitives/string"

const UUID_REGEX = /^[a-z,0-9,-]{36,36}$/

export class UUID extends StringValueObject {
  constructor({ name, value }: { value: string; name: string }) {
    super({ name, value, contractProps: { regex: UUID_REGEX } })
  }

  static random() {
    return randomUUID()
  }
}
