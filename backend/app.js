import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js"; // Make sure you have this file correctly set up
import reservationRouter from "./routes/reservationRoute.js"; // Adjust the import as needed
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config();

// Log allowed frontend URL for debugging
console.log("Allowed frontend URL:", process.env.FRONTEND_URL);

// CORS configuration
app.use(
  cors({
    origin: function(origin, callback) {
      const allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["POST", "GET", "OPTIONS"],
    credentials: true,
  })
);


// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/v1/reservation", reservationRouter);

// Test route
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  });
});

// Connect to the database
dbConnection();

// Middleware for error handling
app.use(errorMiddleware);

// Export the app
export default app;
