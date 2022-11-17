// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.query, "query")
  console.log(req.body, "body")
  if (req.method == "GET") res.status(200).json({ name: "Purusottam ray" });
  else if (req.method == "POST") {
   ;
    res
      .status(200)
      .json(req.body.email);
  } else res.status(500).json({ message: "method not allowed" });
}
