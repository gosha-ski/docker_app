const express = require("express");

const app = express();

app.get("/docker", (request, response) => {
	response.send("okey docker");
});

app.listen(8080, () => {
	console.log("server works");
});
