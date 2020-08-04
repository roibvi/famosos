var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.post("/", function(req, res) {
    /**Con esto le hago el javascript detecte el html y lo interprete, si no lo plasmaria como texto */
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    /** Ahora vamos a recoger los datos del formulario. */
    var nombre = req.body.nombre;
    var mes = req.body.mes.val();
    var anio = Number(req.body.anio);


});


app.listen(3000, function() {
    console.log("hola mundo!");
});