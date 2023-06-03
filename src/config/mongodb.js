import { MongoClient } from "mongodb";
import { env } from "./enviroment";

let dbInstance = null;

export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  //Connect the client to the server
  await client.connect();

  //A sign clientDB to our dbInstance
  dbInstance = client.db(env.DATABASE_NAME);
};

//Get db instance
export const getDB = () => {
  if (!dbInstance) throw new Error("Must connect to DB first!");
  return dbInstance;
};

// const listDatabases = async (client) => {
//   const databaseList = await client.db().admin().listDatabases();
//   console.log(databaseList);
//   console.log("Your databases: ");
//   databaseList.databases.forEach((db) => console.log(` - ${db.name}`));
// };
