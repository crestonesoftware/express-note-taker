const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

// serve static files (CSS, JS, HTML) from the public directory

// add static middleware to serve assets from the public folder
//app.use(express.static("public"));
app.use(express.static("public"));



app.listen(PORT, () => {
  console.log(`serving static routes at http://localhost:${PORT}`);
});
