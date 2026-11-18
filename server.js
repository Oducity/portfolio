import express from "express";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NODE_ENV = process.env.NODE_ENV?.toLocaleLowerCase() || "production";
const PORT = process.env.PORT || 3000;

const app = express();

/** Configure Express app */
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});
