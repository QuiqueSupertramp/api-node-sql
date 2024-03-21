import { ValueObject } from ".."
import { Contract } from "../../contracts/contract"

export interface BooleanContract {
  type: "boolean"
}

export class BooleanValueObject extends ValueObject<boolean> {
  constructor({ name, value }: { name: string; value: boolean | 1 | 0 }) {
    super({
      name,
      value: typeof value === "boolean" ? value : value > 0,
      contract: new Contract({ type: "boolean" }),
    })
  }
}
