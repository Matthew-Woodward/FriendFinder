let express = require("express");
let path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});

require('./app/routing/htmlRoutes.js')(app);

require('./app/routing/apiRoutes.js')(app);
