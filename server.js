const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// Default index directory
app.use(
    express.static(
        path.resolve(__dirname, "dist/"),
        {index: "userouterinstead"}
    )
)

// send the user to index html page inspite of the url
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
})

app.listen(port);
