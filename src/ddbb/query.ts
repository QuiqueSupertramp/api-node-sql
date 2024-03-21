import { ResultSetHeader, RowDataPacket } from "mysql2"
import { pool } from "./connection"

export interface Query {
  query: string
  values?: any[]
}

const select = async <T>({ query, values }: Query): Promise<T[] | null> => {
  const results = await pool.query(query, values)
  const data = results[0] as RowDataPacket

  if (!data?.length) return null
  return data as T[]
}

const check = async ({ query, values }: Query): Promise<boolean> => {
  const results = await pool.query(query, values)
  const data = results[0] as RowDataPacket

  return data.length > 0
}

const modify = async ({ query, values }: Query): Promise<boolean> => {
  const results = await pool.query(query, values)
  const data = results[0] as ResultSetHeader

  return data.affectedRows > 0
}

// TODO
// const transaction = async <T>(query: () => Res<T>): Res<T> => {
//   let conn

//   try {
//     conn = await pool.getConnection()
//     await conn.beginTransaction()

//     const { data, error } = await query()

//     if (error) {
//       conn.rollback()
//       return { error }
//     }

//     conn.commit()
//     return { data }
//   } catch (error) {
//     if (conn) await conn.rollback()
//     if (error instanceof CustomError) return error
//     throw new CustomError()
//   } finally {
//     if (conn) conn.release()
//   }
// }

const SQL = { select, check, modify }

export default SQL
