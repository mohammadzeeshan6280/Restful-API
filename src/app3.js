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

// read the data of registered Students
app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    res.send(e);
  }
});

// get the indivisual Student data using id
app.get("/students/:id", async (req, res) => {
  try {
    // const _id = req.params;
    // console.log(req.params)
    // console.log(req.params.id)
    // res.send(req.params)
    // res.send(req.params.id)

    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    console.log(studentData);

    if (!studentData) {
      return res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});


// Update the Student by it id
app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
        new : true // current new update show
    });
    res.send(updateStudents);
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
