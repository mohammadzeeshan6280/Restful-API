const express = require("express")
const router = new express.Router();
const Student = require("../../models/students")

/*
// 2. we nedd to define the router
router.get("/zeeshan", (req,res) => {
    res.send("Hello how are you");
})
*/

// read the data of registered Students
router.get("/students", async (req, res) => {
    try {
      const studentsData = await Student.find();
      res.send(studentsData);
    } catch (e) {
      res.send(e);
    }
  });
  
  // get the indivisual Student data using id
  router.get("/students/:id", async (req, res) => {
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
  
  // Detele the students by it id
  router.delete("/students/:id", async (req, res) => {
    try {
      // const id = req.params.id;
      const deleteStudent = await Student.findByIdAndDelete(req.params.id);
      if (!req.params.id) {
        return res.status(400).send();
      }
      res.send(deleteStudent);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  // Update the Student by it id
  router.patch("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
          new : true
      });
      res.send(updateStudents);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  


module.exports = router;