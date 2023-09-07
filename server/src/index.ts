import app from "./app";
import { PORT } from "./config";
import { connectDB } from "./db";

connectDB()

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
