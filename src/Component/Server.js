// Import required modules
const express = require("express"); // Express framework for handling HTTP requests
const cors = require("cors"); // Middleware to enable Cross-Origin Resource Sharing
const bodyParser = require("body-parser"); // Middleware to parse JSON request bodies
const mongoose = require("mongoose"); // ODM library for MongoDB

// Create an Express server instance
const server = express();

// Step 1: Connect to MongoDB
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demo"); // Connect to MongoDB
  console.log("Connected to MongoDB"); // Log success message
}

// Step 2: Call the function and handle any connection errors
main().catch((err) => console.log("MongoDB Connection Error:", err));

// Step 3: Define User Schema (structure of user data in the database)
const userSchema = new mongoose.Schema({
  name: String, // User's full name
  email: String, // User's email
  password: String, // User's password (should be encrypted in production)
  grade: String, // User's grade (e.g., 10, 11, 12)
  interests: String, // User's career interests
});

// Step 4: Define User Model (to interact with the "users" collection in MongoDB)
const User = mongoose.model("User", userSchema);

// Step 5: Middleware setup
server.use(cors()); // Enable CORS to allow frontend to communicate with the backend
server.use(bodyParser.json()); // Enable JSON body parsing for incoming requests

// Step 6: Create User API (Endpoint to register a new user)
server.post("/bolgdata", async (req, res) => {
  try {
    const newUser = new User(req.body); // Create a new user instance with request data
    const doc = await newUser.save(); // Save user data to MongoDB
    console.log("User saved:", doc); // Log saved user data
    res.json({ message: "User registered successfully!", user: doc }); // Send success response
  } catch (error) {
    console.error("Error saving user:", error); // Log any error that occurs
    res.status(500).json({ error: "Failed to register user" }); // Send error response
  }
});

// Step 7: Start the server on port 9090
server.listen(3050, () => {
  console.log("✅ Server running on port 9090"); // Log that server is running
});
