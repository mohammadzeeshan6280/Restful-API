const express = require("express")
require("./db/conn") //database require
const Student = require("./models/students"); // module require

const app = express()
const port = process.env.PORT || 3000


// middleware json object
app.use(express.json());

// app.get("/", (req,res) => {
//    res.send("Hello from the other sides. by zeeshan ansari")
// })

// create a new students
app.post("/students", (req,res) => {
    console.log(req.body);

    const user = new Student(req.body)
    user.save().then(() =>{
        res.status(201).send(user);
    }).catch((e) => {
       res.status(400).send(e);
    })

    // res.send("Hello form the othter sides")

})


app.listen(port, () => {
console.log(`connection is setup at ${port}`);
})



// You DO NOT NEED express.json() and express.urlencoded()
// for GET Requests or DELETE Requests. we only need it for post and put req.

// express.json() is a mehtod inbuilt in express to recognize the incoming
// Request Object as a JSON Object. This method is called as a middleware
// in your application using the code: app.use(express.json())


// req.body ===> Used in POST/PUT request
// req.param ===> Used in properties attached to the url  named route parameters
// req.query ===> Used for earching,sorting, filtering, pagination, e.t.c
