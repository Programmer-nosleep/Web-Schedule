import moongose from 'mongoose'

const conn = async (): Promise<void> => {
  try {
    if (!process.env.DATABASE_URL)
      throw new Error("Database is not defined from MongoDB atlas or MongoDB Compas.")

    await moongose.connect(process.env.DATABASE_URL)
    console.log("MongoDB is connected")
  } catch (error) {
    console.error("MongoDB connect is fail. can't connected", (error as Error).message)
    process.exit(1)
  }
}

export default conn