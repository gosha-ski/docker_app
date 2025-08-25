const express = require("express");

const app = express();

app.get("/docker", (request, response) => {
	response.send("okey docker");
});

app.get("/remote", (request, response) => {
	response.send("Hello world");
});

app.listen(8080, () => {
	console.log("server works");
});
