const express = require("express")
const app = express()

const PORT = process.env.PORT || 3001

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json())

require("./routes/api")(app);
require("./routes/view")(app);

app.listen(PORT, () => {
    console.log(`PORT Listening ON ${PORT}`)
})