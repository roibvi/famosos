/**Con esto traigo el servidor expres */
var express = require("express");
var app = express();
/** Con esto hago que se comprueben los formularios. */
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
/**Con esto hago que el servidor busque todos los archivos estaticos de la página. */
app.use(express.static("public"));
/** Con esto le digo que debe mostrar el al acceder al servidor. */
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
/** Con esto ya cojo los datos del formulario y hago cosas con ellos.  */
app.post("/", function(req, res) {
    /**Con esto le hago el javascript detecte el html y lo interprete, si no lo plasmaria como texto */
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    /** Ahora vamos a recoger los datos del formulario. */
    var nombre = req.body.nombre;
    var mes = Number(req.body.mes);
    var anio = Number(req.body.anio);
    /**array con los nombres de los famosos */
    var famosos = ["Mete algo idiota", "Jessica Biel", "Rihana", "NPI1", "Kristen Stewart", "Megan Fox", "Natalie Portman", "Arianna Grande", "Cara Delavigne", "NPI2", "Chastaine", "NPI3", "NPI4"];
    /** Calculo la edad en años con una resta */
    var edad = 2020 - anio;
    /**Mostrar resultado final */
    res.write("<h1> Felicidades " + nombre + "</h1>");
    res.write("<h2> naciste el mismo mes que " + famosos[mes] + "</h2>");
    res.write("<h3> Este año cumpliras " + edad + "</h3>");
    res.write("<h4>años si el coronovirus lo permite.</h4>");
    res.send();

});


app.listen(3000, function() {
    console.log("hola mundo!");
});