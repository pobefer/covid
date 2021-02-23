var covid;
function init() {
    covid = new Covid();
    covid.cargarDatos();
}

class Covid {
    urlInicial = "https://covid19.secuoyas.com/api/v1/es/ccaa?codigo=es-as";
    error = "<h2>¡problemas! No puedo obtener información de <a href=''>Covid</a></h2>";
    cargarCovid() {
        $.ajax({
            url: this.urlInicial,
            method: 'GET',
            success: function (datos) {
                console.log(datos)
            },
            error: function () {
                document.write(this.error);
            }
        });
    }
    cargarDatos() {
            this.cargarCovid();
    }
}