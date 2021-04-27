const express = require('express');

const app = express();
let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

app.get("/", (req, res) => {
    res.send({
        "test": "this is a test"
    });
});
