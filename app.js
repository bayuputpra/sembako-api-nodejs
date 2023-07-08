import express from "express";
import sembakoRoute from "./routes/sembakoRoute.js"

const app = express();

app.use(express.json());

app.use('/sembakoo', sembakoRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json(
    {
        code: 500,
        status: "internal server error",
        message: err.message 
    });
});

app.listen(3000, () => console.log('Server is running on port 3000'));