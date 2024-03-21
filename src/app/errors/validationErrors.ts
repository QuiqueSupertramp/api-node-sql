import { PrimitivesValues } from "../../context/shared/domain/types/primitives"

export type ValidationErrorParams = Partial<ValidationError>
export type CustomErrorParams = Pick<ValidationErrorParams, "message" | "contract">
export interface ExpectedError {
  get: PrimitivesValues
  expected: PrimitivesValues
}
export type ValidationErrorTypes = string | number | RegExp | ExpectedError

export class ValidationError {
  public readonly message: string
  public value?: any
  public readonly errors?: { [key: string]: ValidationErrorTypes }
  public readonly contract?: { [key: string]: any }

  constructor(params?: ValidationErrorParams) {
    this.message = params?.message ?? "Validation error"
    this.value = params?.value
    this.errors = params?.errors
    this.contract = params?.contract
  }
}
