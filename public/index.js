/** Con esto pongo a vigilar algun cambio en el select */
$("select").on("change", function() {
    var mes = $(this).val();
    switch (mes) {
        case "-":
            $("img").attr('src', 'imagenes/meses.jpg');
            break;
        case "0":
            $("img").attr('src', 'imagenes/f-enero.jpg');
            break;
        case "1":
            $("img").attr('src', 'imagenes/f-febrero.jpg');
            break;
        case "2":
            $("img").attr('src', 'imagenes/f-marzo.jpg');
            break;
        case "3":
            $("img").attr('src', 'imagenes/f-abril.jpg');
            break;
        case "4":
            $("img").attr('src', 'imagenes/f-mayo.jpg');
            break;
        case "5":
            $("img").attr('src', 'imagenes/f-junio.jpg');
            break;
        case "6":
            $("img").attr('src', 'imagenes/f-julio.jpg');
            break;
        case "7":
            $("img").attr('src', 'imagenes/f-agosto.jpg');
            break;
        case "8":
            $("img").attr('src', 'imagenes/f-septiembre.jpg');
            break;
        case "9":
            $("img").attr('src', 'imagenes/f-octubre.jpg');
            break;
        case "10":
            $("img").attr('src', 'imagenes/f-noviembre.jpg');
            break;
        case "11":
            $("img").attr('src', 'imagenes/f-diciembre.jpg');
            break;
    };
});