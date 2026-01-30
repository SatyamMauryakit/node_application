import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send('Hello, My name is Satyam Maurya and I am a Full Stack Web Developer');
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

