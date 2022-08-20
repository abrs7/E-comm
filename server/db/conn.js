const mongoose = require('mongoose');

const db = process.env.MONGO_URI;

mongoose.connect(db, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log("error occurs"
    ,e);
})