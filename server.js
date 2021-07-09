const express = require("express");
const path = require("path");

const PORT = 8000;
const app = express();

//MIddleware para css
app.use(express.static(path.join(__dirname, "public")));

//1. Definiendo en donde se ubicará el directorio views
app.set("views", path.join(__dirname, "views"));
//2. Definiendo el motor que usaremos
app.set("view engine", "ejs");

//Middleware de aplicacion
app.get("/", (req, res, next) => {
  res.render("pages/home", { title: "Inicio" });
});

app.listen(PORT, () => {
  console.log(`El servidor esta escuchando sobre el puerto ${PORT}`);
});
