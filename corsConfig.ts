import { CorsOptions } from "cors"

const ACCEPTED_ORIGINS = ["http://localhost:3000"]

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    return callback(new Error("Not allowed by CORS"))
  },
}

export default corsOptions
