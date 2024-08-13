const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/students-api",{
}).then(() => {
    console.log("connection is successful")
}).catch((e) => {
    console.log("No connection")
})

// useCreateIndex : true,
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useFindAndModify: false
