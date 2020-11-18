const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Setup cors origin
app.use(require("cors")());

//Bring route
app.use("/user", require("./routes/user"));

//Setup Error Handlers
const errorHandlers = require('./handlers/errorHandlers');
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);

if(process.env.ENV === "DEVELOPMENT"){
    app.use(errorHandlers.developmentErrors);
}else{
    app.use(errorHandlers.productionErrors);
}

module.exports = app;