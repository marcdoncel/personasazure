// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/buscar/buscar.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        buscar: function () {

            Azure.Busqueda(document.getElementById("txtEdadBus").value).done(
                function (res) {
                    var ctx = document.getElementById("resultado");
                    ctx.innerHTML = "";
                    for (var i = 0; i < res.length; i++) {
                        ctx.innerHTML += res[i].nombre + "    " + res[i].edad + "<br />";

                    }


                }
            );


        },
        ready: function (element, options) {
            // TODO: Initialize the page here.
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();
