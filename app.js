const fs = require("fs");
let process = require('process');
const funcionDeTareas = require("./funcionDeTareas");


let tareasJson = fs.readFileSync("tareas.json", "utf8");
let tareasJs = JSON.parse(tareasJson);

let accion = (process.argv[2]);

funcionDeTareas (accion, tareasJs);