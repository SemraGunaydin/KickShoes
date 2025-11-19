require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const Shoe = require("./models/shoe.model");
const shoes = require("./db.json").shoes;

console.log("MONGO_URL:", process.env.MONGO_URL); // test satırı

const seedDatabase = async () => {
  try {
    // ✅ SADECE bu satır olmalı
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Connected to MongoDB");

    await Shoe.deleteMany({});
    console.log("Cleared existing shoes");

    await Shoe.insertMany(shoes);
    console.log("Seeded shoes successfully");

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();