import { PrimitivesValues } from "../../types/primitives"
import { ContractClause } from "./contractClause"

export class DefinedCC extends ContractClause {
  constructor() {
    super({
      name: "defined",
      validation: (value: PrimitivesValues) => value && value !== null && value !== undefined,
      errorMessage: `must be defined`,
    })
  }
}
