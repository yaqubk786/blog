import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/route.js";
const port = 5000;

const app = express();





app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/blog",postRoutes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})