import { Contract } from "./contract"
import { MaxLengthCC } from "./contractClauses/maxLength"
import { MinLengthCC } from "./contractClauses/minLengthCC"
import { RegexCC } from "./contractClauses/regexCC"

export interface StringContractProps {
  minLength?: number
  maxLength?: number
  regex?: RegExp
}

export class StringContract extends Contract {
  constructor(props?: StringContractProps) {
    const contract = getStringContract(props)
    super({ type: "string", contract })
  }
}

const getStringContract = (props?: StringContractProps) => {
  if (!props) return

  const contract = []

  const { minLength, maxLength, regex } = props
  if (minLength) contract.push(new MinLengthCC(minLength))
  if (maxLength) contract.push(new MaxLengthCC(maxLength))
  if (regex) contract.push(new RegexCC(regex))

  return contract
}
