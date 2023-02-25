import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./Database/conn.js";

const app = express();

// middle wares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(morgan("x-powered-by"));

const port = 8080;

// http get request
app.get("/", (req, res) => {
  res.status(201).json("Home Get request");
});

// start only after mongo db valid connection
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection...!");
  });
