const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    maxPoolSize: 10, // Updated from poolSize
    serverSelectionTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 45000, // 45 seconds
  })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


// const mongoose = require("mongoose");
// require("dotenv").config();

// mongoose
//   .connect(process.env.MONGO_DB, {
//     maxPoolSize: 10,
//     serverSelectionTimeoutMS: 30000,
//     socketTimeoutMS: 45000,
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//   })
//   .then(async () => {
//     // Apply indexes on Album collection
//     await mongoose.connection.db.collection('albums').createIndex({ title: 'text', genre: 1 });
//     await mongoose.connection.db.collection('albums').createIndex({ created_at: 1 });
//     console.log("Indexes created successfully");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });
