require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

// database
const connectDB = require("./db/connect");

//  routers
// const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");
// const reviewRouter = require("./routes/reviewRoutes");
const orderRouter = require("./routes/orderRoute");

// middleware
// const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.JWT_SECRET));

// app.use("/api/v1/", authRouter);
app.use("/api/v1/", userRouter);
app.use("/api/v1/", productRouter);
// app.use("/api/v1/", reviewRouter);
app.use("/api/v1/", orderRouter);

// app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
