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
  const siteTitle = "OducityTech Portfolio";
  const title = "Odumamwen Evans Henry Aisiokuebor";
  res.render(path.join(__dirname, "src/views/home.ejs"), { siteTitle, title });
});

// This route serves the academic page
app.get("/academic", (req, res) => {
  const siteTitle = "OducityTech Portfolio";
  const title = "Academic Background";
  res.render(path.join(__dirname, "src/views/academic.ejs"), {
    siteTitle,
    title,
  });
});

// This route serves the backend-projects page
app.get("/backend-projects", (req, res) => {
  const siteTitle = "OducityTech Portfolio";
  const title = "Backend Projects";
  res.render(path.join(__dirname, "src/views/backend-projects.ejs"), {
    siteTitle,
    title,
  });
});

// This route serves the front-end projects page
app.get("/frontend-projects", (req, res) => {
  const siteTitle = "OducityTech Portfolio";
  const title = "Frontend Projects";
  res.render(path.join(__dirname, "src/views/frontend-projects.ejs"), {
    siteTitle,
    title,
  });
});

// This route serves the full-stack projects page
app.get("/fullstack-projects", (req, res) => {
  const siteTitle = "OducityTech Portfolio";
  const title = "Full-Stack Projects";
  res.render(path.join(__dirname, "src/views/fullstack-projects.ejs"), {
    siteTitle,
    title,
  });
});

// This serve the ai-automation page
app.get("/ai-automation", (req, res) => {
  const siteTitle = "OducityTech Portfolio";
  const title = "AI & Automation";
  res.render(path.join(__dirname, "src/views/ai-automation.ejs"), {
    siteTitle,
    title,
  });
});

// This route serves the certificate page
app.get("/certificates", (req, res) => {
  const siteTitle = "OducityTech Portfolio";
  const title = "Certificates";
  res.render(path.join(__dirname, "src/views/certificates.ejs"), {
    siteTitle,
    title,
  });
});

// This route serves more-projects page
app.get("/more-projects", (req, res) => {
  const siteTitle = "OducityTech Portfolio";
  const title = "More Projects";
  res.render(path.join(__dirname, "src/views/more-projects.ejs"), {
    siteTitle,
    title,
  });
});

// This serves the solar projects page
app.get("/solar-projects", (req, res) => {
  const siteTitle = "OducityTech Portfolio";
  const title = "Solar Projects";
  res.render(path.join(__dirname, "src/views/solar-projects.ejs"), {
    siteTitle,
    title,
  });
});

// This serves the building and construction projects page
app.get("/building-construction", (req, res) => {
  const title = "Building and Construction";
  const siteTitle = "OducityTech Portfolio";
  res.render(path.join(__dirname, "src/views/building-construction.ejs"), {
    title,
    siteTitle,
  });
});

// This route serves the experience page
app.get("/experience", (req, res) => {
  const siteTitle = "OducityTech Portfolio";
  const title = "Experience";
  res.render(path.join(__dirname, "src/views/experience.ejs"), {
    siteTitle,
    title,
  });
});

// This route serves the resume page
app.get("/resume", (req, res) => {
  const siteTitle = "OducityTech Portfolio";
  const title = "Resume";
  res.render(path.join(__dirname, "src/views/resume.ejs"), {
    siteTitle,
    title,
  });
});

// This route serves the contact page
app.get("/contact", (req, res) => {
  const siteTitle = "OducityTech Portfolio";
  const title = "Contact";
  res.render(path.join(__dirname, "src/views/contact.ejs"), {
    siteTitle,
    title,
  });
});
app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});
