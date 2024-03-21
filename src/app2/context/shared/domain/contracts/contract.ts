import { PrimitivesValues } from "../types/primitives"
import { ContractClause } from "./contractClauses/contractClause"
import { DefinedCC } from "./contractClauses/definedCC"
import { TypeCC } from "./contractClauses/typeCC"

export class Contract {
  contract: ContractClause[]
  errors: Record<string, string>

  constructor({ type, contract }: { type: PrimitivesValues; contract?: ContractClause[] }) {
    this.errors = {}
    this.contract = [new DefinedCC(), new TypeCC(type)]
    if (contract) this.contract = [...this.contract, ...contract]
  }

  validate(value: any) {
    this.contract.forEach(c => {
      const e = c.validate(value)
      if (!e) this.errors[c.name] = c.errorMessage
    })
  }

  hasErrors() {
    return Object.values(this.errors).length
  }
}
