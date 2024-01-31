const express = require("express");
require("./db/conn"); //database require
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// app.get("/", (req,res) => {
//    res.send("Hello from the other sides. by zeeshan ansari")
// })

/*
// create a new students
app.post("/students", (req, res) => {
  console.log(req.body);

  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
  // res.send("Hello form the othter sides")
});

*/

app.post("/students", async (req, res) => {
  try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
  } catch (e) {
        res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});

// You DO NOT NEED express.json() and express.urlencoded()
// for GET Requests or DELETE Requests. we only need it for post and put req.

// express.json() is a mehtod inbuilt in express to recognize the incoming
// Request Object as a JSON Object. This method is called as a middleware
// in your application using the code: app.use(express.json())
