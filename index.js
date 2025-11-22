import express from 'express'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;  // PORT

app.use(express.json()); // important to read JSON from Postman

/*
    app.get
    app.post
    app.put
    app.delete
    app.patch
*/

// BODY-PARSER
app.use(bodyParser.urlencoded({extended:true}))

//HOME router
app.get('/', (req, res) => { // HOME
    res.send('Hello from Express!');
})

// JSON show router.
app.get('/user', (req, res) => {
    const user = {
        "name": "Subham",
        "age": 22,
        "email": "subham@gmail.com"
    };
    res.send(user);
});

let user = {}; // this will store the data sent from Postman

// PUT → send JSON from Postman
app.post("/getuser", (req, res) => {
    user = req.body;          // store incoming JSON data
    console.log("Received:", user); // show in console
    res.json({ message: "Data received", user });
});

// GET → show stored data on browser
app.get("/getuser", (req, res) => {
    res.json(user);
});

// POST from yt

app.post('/reg', (req,res) =>{
    const objForReg = req.body;
    console.log(objForReg);

    res.status(200).json({
        success:true,
        message:"Account created successfully."
    });
});

app.listen(port, () => {
    console.log(`Server listning at port http://localhost:${port}`);
});