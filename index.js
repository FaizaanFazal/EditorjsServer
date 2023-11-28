const express = require("express");
const cors = require("cors");
const path = require("path");
const csvRoutes = require("./routes/csvRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/uploadImage", csvRoutes);
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(3001, () => {
  console.log("App is running on PORT 3001");
});
