import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send(```Hello, my name is Satyam Maurya.
I am an aspiring DevOps Engineer with hands-on experience in Linux, Git, Docker, Jenkins, GitHub Actions, and AWS EC2. I have worked on deploying a Node.js application using Docker and automated the deployment process using CI/CD pipelines with GitHub Actions and Jenkins.

I am comfortable working with Docker Compose, managing servers through SSH, and troubleshooting real-world DevOps issues such as build failures, SSH authentication errors, and container deployment problems.

As a fresher, I focus on learning by doing and continuously improving my practical skills. I am eager to work in a DevOps environment where I can contribute, learn from experienced engineers, and grow as a professional.```);
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

