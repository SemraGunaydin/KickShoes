const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth"); // veya ./routes/auth — dosya adına göre
const shoeRoutes = require("./routes/shoe"); // 👈 BURAYI EKLEDİK

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/shoes", shoeRoutes); // 👈 BURAYI EKLEDİK

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));