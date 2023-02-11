const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.route");

const { connectDB } = require("./db");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send({ status: "API running!" }));

app.use("/api/user", userRoute);

app.listen(port, () => console.log("Server running on 5000"));
