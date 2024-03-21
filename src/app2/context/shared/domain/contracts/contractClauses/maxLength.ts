import { ContractClause } from "./contractClause"

export class MaxLengthCC extends ContractClause {
  constructor(maxLength: number) {
    super({
      validation: value => value && value.length < this.condition,
      condition: maxLength,
      name: "maxLength",
      errorMessage: `Length can't be more than ${maxLength}`,
    })
  }
}
