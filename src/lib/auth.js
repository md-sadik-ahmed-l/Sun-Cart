import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// import dns from "node:dns"
// dns.setServer(['8.8.8.8','8.8.4.4'])

const client = new MongoClient("mongodb://sadik1809Aurl:wernoz-dezZog-3merwy@ac-uvqedmn-shard-00-00.ofc9ngg.mongodb.net:27017,ac-uvqedmn-shard-00-01.ofc9ngg.mongodb.net:27017,ac-uvqedmn-shard-00-02.ofc9ngg.mongodb.net:27017/?ssl=true&replicaSet=atlas-mp6wxk-shard-0&authSource=admin&appName=Cluster0");
const db = client.db();

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },
});