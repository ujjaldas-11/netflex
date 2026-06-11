require("dotenv").config
    
const express = require('express');
const app = express()

const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.json({
        message: "hello ujjal, app is running!",
        status: 200
    })
})

// app.get('/api/users', (req, res)=> {
//     res.json([
//         {id: 1, name: "Coder"},
//         {id: 2, name: "Charlie"},
//         {id: 3, name: "Nalayak"}
//     ]);
// });

// app.get('/api/profile/:username', (req, res) => {

//     res.json({
//         message: `welcome to ${req.params.username}s profile!`
//     })

//     // res.send(`welcome to ${req.params.username}'s profile!`)
// })


const connectToDB = require("./src/config/db")

connectToDB();

app.listen(PORT, ()=> {
    console.log(`app liseting on ${PORT}`);
    
})