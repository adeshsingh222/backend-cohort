const express = require('express');

const bodyParser = require('body-parser');
const {default: mongoose} = require('mongoose');
const route = require('./routes/route.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://Adesh:LnDEhxK0maoDwQD9@cluster0.r3pzigx.mongodb.net/?retryWrites=true&w=majority",{  
     useNewUrlParser : true
})
.then( () => console.log("Mongodb is connected"))
.catch ( err => console.log(err))
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
