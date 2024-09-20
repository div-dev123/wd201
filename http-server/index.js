const http = require("http");
const fs = require("fs");
const minimist = require("minimist");

// Parse command line arguments using minimist
const args = minimist(process.argv.slice(2));

// Set port from command-line argument or default to 3000
const port = args.port || 3000;

let homeContent = "";
let projectContent = "";
let registrationContent = "";

// Read home.html
fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

// Read project.html
fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

// Read registration.html
fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registrationContent = registration;
});

// Create the HTTP server
http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });

    // Route based on the requested URL
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(registrationContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
