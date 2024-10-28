import mongoose from "mongoose";

export const dbConnection = () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error("MONGO_URI is not defined. Please check your environment variables.");
    return;
  }

  mongoose
    .connect(mongoUri, {
      dbName: "RESERVATIONS",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error(`Some error occurred while connecting to the database: ${err}`);
    });
};
