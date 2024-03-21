import { ValueObject } from ".."
import { StringContract, StringContractProps } from "../../contracts/stringContract"

export class StringValueObject extends ValueObject<string> {
  constructor({ value, contractProps, name }: { name: string; value: string; contractProps?: StringContractProps }) {
    super({ name, value, contract: new StringContract(contractProps) })
  }

  DTO() {}

  static capitalize(value: string) {
    if (!value) return

    const [firstWord, ...restOfWords] = value.split(" ")
    const [firstLetter, ...restOfLetters] = firstWord.split("")

    const firstLetterCapitalize = firstLetter.toUpperCase()
    const firstWordCapitalize = [firstLetterCapitalize, ...restOfLetters].join("")

    return [firstWordCapitalize, ...restOfWords].join(" ")
  }
}
