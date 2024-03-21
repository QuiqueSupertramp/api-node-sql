import { PrimitivesTypes, PrimitivesValues } from "../../types/primitives"
import { ContractClause } from "./contractClause"

export class TypeCC extends ContractClause {
  constructor(type: PrimitivesValues) {
    super({
      validation: (value: PrimitivesTypes) => {
        if (this.condition === "Date") {
          return value instanceof Date
        }
        return typeof value === this.condition
      },
      condition: type,
      name: "type",
      errorMessage: `must be a ${type}`,
    })
  }
}

export class StringCC extends TypeCC {
  constructor() {
    super("string")
  }
}
