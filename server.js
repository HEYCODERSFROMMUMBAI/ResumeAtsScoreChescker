const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const startServer = async () => {


    app.listen(port, () => {
        console.log(`server is running on http://localhost:${port}`)
    })
}

startServer()
