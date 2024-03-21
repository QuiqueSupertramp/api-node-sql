import { ContractClause } from "./contractClause"

export class RegexCC extends ContractClause {
  constructor(regex: RegExp) {
    super({
      validation: value => regex.test(value),
      name: "regex",
      errorMessage: `Not valid format`,
    })
  }
}
