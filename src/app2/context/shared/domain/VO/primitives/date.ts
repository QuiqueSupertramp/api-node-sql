import { ValueObject } from ".."
import { Contract } from "../../contracts/contract"

export class DateValueObject extends ValueObject<Date> {
  constructor({ value, name }: { value: Date | string; name: string }) {
    super({ name, value: new Date(value), contract: new Contract({ type: "Date" }) })
  }
}
