import express from "express";
import routes from "./routes/crmRoutes.js";
import bodyParser from "body-parser";
// import db from "./db/index";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
// const getAllUsers = async () => {
//   const results = await db.select("*").from("users");
//   return results;
// };

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Node and Express server is running on Port: ${port}`);
});

app.listen(port, async () => {
  console.log("Server Running");
  // const results = await getAllUsers();
  // console.log(results);
});
