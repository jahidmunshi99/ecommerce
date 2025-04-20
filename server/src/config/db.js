const mongoose = require("mongoose");
const config = require("./config");

const dbUrl = config.db.url;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database has been connected");
})
.catch((err) => {
    console.error("Database connection error:", err.message);
});
