import app from "./app";
import "./database";

app.listen(app.get("port"));

console.log("Server en el puerto", app.get("port"));
