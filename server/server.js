const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;


require('./config/pro.config')

app.use(cors());
app.use(express.json())
// app.use(express.urlencoded({extended: true}))

require('./routes/pro.routes')(app);

app.listen(port, () => {
    console.log("Listening at port ${port} for request to respond to.")
})