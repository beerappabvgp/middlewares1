import express from "express";

const app = express();

app.use((req, res, next) => {
    console.log("req: ", req);
    console.log("server recieved the request ...", req.url);
    next();
});

// http:localhost:5000/health
app.get("/health", async (req, res) => {
    try {
        console.log("/health api");
        res.status(200).json({
            msg: "This is to check health of server ... "
        });
    } catch (error) {
        console.log(error);
    }
});

app.use((req, res, next) => {
    console.log("server recieved the request middleware 2 ...", req.url);
    next();
});

app.get("/test", async (req, res) => {
    try {
        console.log("/test api");
        res.status(200).json({
            msg: "This is for testing purposes ... "
        });
    } catch (error) {
        console.log(error);
    }
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});