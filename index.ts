import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import corsOptions from "./src/app/config/corsConfig"
import apiRouter from "./src/app/router"

dotenv.config()

const app = express()
app.disable("x-powered-by")

app.use(express.json())
app.use(cors(corsOptions))

app.use(apiRouter)

const PORT = process.env.PORT || 4000

const server = app.listen(PORT, async () => {
  if (!server) console.log(`Error listening on port ${PORT}`)
  else console.log(`Server on http://localhost:${PORT}`)
})
