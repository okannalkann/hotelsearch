const app = require("./service/app");
require("dotenv").config();

app.listen(process.env.PORT || 3000, (error) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }

    console.log("Server is running!");
});