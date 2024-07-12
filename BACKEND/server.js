const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/validationRoutes");
const postRoutes = require("./routes/postRoutes");

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

const db = mongoose.connect(
  "mongodb+srv://vvvarshithnagubandi:vvv123@cluster0.7xijtyq.mongodb.net/socialmedia"
);

app.use("/socialMedia/user", userRoutes);
app.use("/socialMedia/authToken", authRoutes);
app.use("/socialMedia/posts", postRoutes);

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
