require("../src/db/connection");
const express = require("express");
const cors = require("cors");
const testRouter = require("../src/test/testRoutes");
const userRouter = require("../src/user/userRoutes");
const mpRouter = require("../src/missingPerson/missingPersonRoutes");
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use(testRouter);
app.use(userRouter);
app.use(mpRouter);

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
