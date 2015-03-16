(function () {

    var eventos = function () {
        document.getElementById("cmdAddPers").addEventListener("click",
            function () {

                /* var pos = {
                     x: 100,
                     y: 100,
                     width: 200,
                     height: 300
                 };
                 addBloc.showForSelectionAsync(pos);*/

                var fl = document.getElementById("AltaPersFly").winControl;
                fl.show(document.getElementById("cmdAddPers"), "top");
            });
        document.getElementById("btnAddPersFly").addEventListener("click",

            function () {
                var perso = new Modelo.Persona(undefined,
                    document.getElementById("txtNomAddPers").value,
                    document.getElementById("txtEdadAddPers").value);

                Azure.AddPersona(perso).done(function (res) {

                    Datos.Persona.push(res);

                });

            });


    }

    function initBar() {
        eventos();
    }

    WinJS.Namespace.define("Acciones", {
        appBar: initBar

    });

})();