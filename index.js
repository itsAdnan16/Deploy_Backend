require('dotenv').config();

console.log("chai aur code")
const express = require('express');
const app = express();

const port = process.env.port
const aboutMe = {
  name: "Adnan Hasan",
  age: 21,
  course: "B.Tech CSE (Data Science)",
  college: "Bennett University (bewakoof 🤡)",
  skills: ["JavaScript", "Python", "Node.js", "Express", "MongoDB"],
  interests: ["Football", "History", "Machine Learning", "Web Development"],
  github: "https://github.com/adnanhasan",
  location: "Greater Noida, Uttar Pradesh"
};


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom');
});

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>');
});
app.get('/about',(req,res)=>{
    res.json(aboutMe)
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
