export class ContractClause {
  private readonly validation
  readonly condition
  readonly name
  readonly errorMessage

  constructor({
    validation,
    condition,
    name,
    errorMessage,
  }: {
    name: string
    condition?: any
    validation: (value: any) => boolean
    errorMessage: string
  }) {
    this.validation = validation
    this.condition = condition
    this.name = name
    this.errorMessage = errorMessage
  }

  validate(value: any) {
    return this.validation(value)
  }
}
