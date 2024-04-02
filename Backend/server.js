const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
const PORT = 5002;
const multer = require('multer');

// Middleware for handling CORS
app.use(cors());

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

// MongoDB connection URI
const uri = 'mongodb+srv://user1:Chamu123@cluster0.alycqcg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'Ecommerce1'; // Replace 'your_database_name' with your actual database name

// MongoDB client instance and connection pool
let client;

async function connectToMongoDB() {
  try {
    client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      poolSize: 10 // Example: setting pool size to 10 connections
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Middleware function to add MongoDB client to request object
app.use((req, res, next) => {
  req.dbClient = client;
  next();
});

// Function to get database instance
async function getDb() {
  return client.db(dbName);
}

// Route to fetch products
app.get('/getProducts', async (req, res) => {
  try {
    const db = await getDb();
    const products = await db.collection('products').find({}).toArray();
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products from MongoDB:', err);
    res.status(500).json({ error: 'Failed to fetch products from MongoDB' });
  }
});

// Start the server
async function startServer() {
  try {
    await connectToMongoDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();
