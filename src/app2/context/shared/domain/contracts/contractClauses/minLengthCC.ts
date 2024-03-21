import { ContractClause } from "./contractClause"

export class MinLengthCC extends ContractClause {
  constructor(minLength: number) {
    super({
      validation: value => value && value.length >= this.condition,
      condition: minLength,
      name: "minLength",
      errorMessage: `Length must be at lest ${minLength}`,
    })
  }
}
