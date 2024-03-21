import { ValidationError } from "../../../../app/errors/validationErrors"
import { Contract } from "../contracts/contract"
import { PrimitivesTypes } from "../types/primitives"

export class ValueObject<T extends PrimitivesTypes> {
  readonly value
  protected readonly contract: Contract
  protected readonly name: string

  constructor({ value, contract, name }: { name: string; value: T; contract: Contract }) {
    this.name = name
    this.contract = contract
    this.contract.validate(value)

    if (this.contract.hasErrors())
      throw new ValidationError({
        message: `${this.name} Validation Error`,
        errors: this.contract.errors,
      })

    this.value = value
  }

  equalTo(other: ValueObject<T>) {
    return other.constructor.name === this.constructor.name && other.value === this.value
  }
}
