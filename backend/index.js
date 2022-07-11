const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const router = express.Router();
const path = require("path");
const PORT = process.env.PORT || 5000
const cors = require('cors');
const bodyParser = require('body-parser');


dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next)=>{
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000")
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
//   // res.header("Access-Control-Allow-Headers", 
//   //             "X-PINGOTHER, Content-Type, Authorization")
//   app.use(cors())
//   next()
// })

app.use(cors())
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Conectado ao Mongo");
  }
);
app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
  console.log(`Aplicativo rodando na porta: ${PORT}. http://localhost:${PORT}`);
});
