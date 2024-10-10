import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

import { errorHandler } from "./middleware/errorHandler.js";
import { ENV_VARS } from "./config/envVars.js";
import quizRoutes from "./routes/quizRoutes.js";
import submissionRoutes from "./routes/submissionRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api/quizzes", quizRoutes);
app.use("/api/submissions", submissionRoutes);

app.use(errorHandler);

const PORT = ENV_VARS.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB();
});
