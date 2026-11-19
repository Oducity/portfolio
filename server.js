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

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Tell express where to find templates
app.set("views", path.join(__dirname, "src/views"));

/** Define routes */
// Serve the home.html file for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/home.html"));
});

// This route serves the academic page
app.get("/academic", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/academic.html"));
});

// This route serves the backend-projects page
app.get("/backend-projects", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/backend-projects.html"));
});

// This route serves the front-end projects page
app.get("/frontend-projects", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/frontend-projects.html"));
});

// This route serves the full-stack projects page
app.get("/fullstack-projects", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/fullstack-projects.html"));
});

// This route serves the certificate page
app.get("/certificates", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/certificates.html"));
});

// This route serves more-projects page
app.get("/more-projects", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/more-projects.html"));
});

// This route serves the experience page
app.get("/experience", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/experience.html"));
});

// This route serves the resume page
app.get("/resume", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/resume.html"));
});

// This route serves the contact page
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/contact.html"));
});
app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});
