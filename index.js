// Make sure to include these imports:
// import { GoogleGenerativeAI }  FROM "@google/generative-ai";
const {GoogleGenerativeAI} = require('@google/generative-ai');
const express = require('express');
const app = express();
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(express.json());

app.post('/api/content',async (req,res) => {
    try {
        const prompt = req.body.content;
        const result = await model.generateContent(prompt)
        console.log(result.response.text());
        res.status(200).json(result.response.text());
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000,() => {
    console.log('server running on 3000');
})