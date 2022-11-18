// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { database } from "../../utils/db";
import NextCors from "nextjs-cors"
import {
  setDoc,
  doc,
  getDoc,
  collection,
  query,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import next from "next";
export default async function handler(req, res) {
  console.log(req.query, "query");
  console.log(req.body, "body");
  await NextCors(req, res, {
    // Options
    methods: ['POST',"GET"],
    origin: ['http://localhost:3001/', 'http://localhost:3000/'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
  if (req.method == "GET") {
    const dbInstance = collection(database, "todo");
    const q = query(dbInstance);
    const querySnapshot = await getDocs(q);
    const newArray = [];
    if (!querySnapshot.empty) {
      querySnapshot.forEach((item) => {
        const simple = item.data();
        newArray.push(simple);
      });
      console.log(newArray, "data");
      res.status(200).json({ message: "success", data: newArray });
    }
    else{
        res.status(404).json({message:"files not found"})
    }
  } else res.status(500).json({ message: "method not allowed" });
}
