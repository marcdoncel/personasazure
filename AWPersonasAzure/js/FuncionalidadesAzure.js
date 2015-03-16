(function () {
    var cliente = new WindowsAzure.MobileServiceClient(
        "https://awnotepad.azure-mobile.net/",
        "dpRuizzhXZcJOEFKRujsFLigRMUTHQ39");

    var registro = function (usuario) {
        var tabla = cliente.getTable("persona");
        tabla.insert(usuario.toInsert()).done(
            function (res) {


                if (res.id) {
                    //WinJS.Navigation.back(1);
                    new Windows.UI.Popups.
                       MessageDialog
                        ("Persona creada correctamente")
                        .showAsync();

                }
                else {
                    new Windows.UI.Popups.
                        MessageDialog("Error al insertar persona").showAsync();
                }
            }
        );


    };

    var busqueda = function (edad) {
        var tabla = cliente.getTable("persona");
        return tabla.where({ edad: edad }).read();

    };


    function GetPersonas(nom) {
        var tabla = cliente.getTable("persona");
        return tabla.where({ nombre: nom}).read();
    }

    function AddPersona(persona) {
        var tabla = cliente.getTable("persona");
        return tabla.insert(persona.toInsert());

    }

    WinJS.Namespace.define("Azure", {
        registro: registro,
        Persona: GetPersonas,
        Busqueda: busqueda,
        AddPersona: AddPersona


    });

})();