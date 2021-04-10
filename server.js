const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// connect to db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const contactRoutes = require("./routes/contact");
const courseRoutes = require("./routes/course");
<<<<<<< Updated upstream
const courseDescRoutes = require("./routes/courseDescription");
=======
const commentsRoutes = require("./routes/comment");
>>>>>>> Stashed changes
// app middlewares
app.use(morgan("dev"));

// app.use(cors()); // allows all origins
if ((process.env.NODE_ENV = "development")) {
  app.use(cors({ origin: `http://localhost:3000` }));
}
app.use(express.json());
// middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", contactRoutes);
app.use("/api", courseRoutes);
<<<<<<< Updated upstream
app.use("/api", courseDescRoutes);
=======
app.use("/api", commentsRoutes);

>>>>>>> Stashed changes
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
