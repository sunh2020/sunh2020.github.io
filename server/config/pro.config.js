const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/prodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(()=>console.log("Database connection established"))
    .catch(err=>console.log("There was an error", err))