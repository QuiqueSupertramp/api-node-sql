import { Response } from "express"
import { HTTPError, UnknownError } from "./httpErrors"
import { ValidationError } from "./validationErrors"

export const handleErrors = (error: unknown, res: Response) => {
  if (error instanceof ValidationError) return res.status(400).json({ error })
  if (error instanceof HTTPError) return res.status(error.status).json({ error })

  return res.status(500).json({ error: new UnknownError() })
}
