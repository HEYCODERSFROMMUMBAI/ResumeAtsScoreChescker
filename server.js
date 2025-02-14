const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const connectDB = require('./models/connectdb')

app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ATS Score Dashboard</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background: linear-gradient(135deg, #4facfe, #00f2fe);
                color: #fff;
                text-align: center;
            }
            .dashboard {
                background-color: rgba(255, 255, 255, 0.1);
                padding: 40px;
                border-radius: 15px;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
            }
            .dashboard h1 {
                margin-bottom: 20px;
            }
            .dashboard p {
                margin: 10px 0;
            }
        </style>
    </head>
    <body>
        <div class="dashboard">
            <h1>Welcome to the ATS Score Dashboard</h1>
            <p>Monitor ATS scores, track keyword matches, and analyze resumes here.</p>
            <p>Stay tuned for more insights!</p>
        </div>
    </body>
    </html>
    `);
});

app.use('/api/resumespares', require('./routes/resumeRoute'))



const startServer = async () => {


    app.listen(port, () => {
        console.log(`server is running on http://localhost:${port}`)
    })

}

startServer()
connectDB()