(function () {
    var Persona = function (id, nombre, edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        
        this.toInsert = function () {

            return {
                nombre: this.nombre,
                edad: this.edad
            };
        }
    };

    WinJS.Namespace.define("Modelo", {
        Persona: Persona
    });
})();