const express = require("express")

const app = express();
const PORT = 3000;

app.get("/ping", (req, res) => {
    res.json({
      status: 200,
    });
})

export function keepAlive() {
    app.listen(PORT, () => {
        console.log("App is listening on port: " + PORT);
    })
}