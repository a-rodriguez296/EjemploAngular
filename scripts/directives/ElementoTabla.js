angular
    .module("imbdcutre")
    .directive("elementoTabla", function(){

        return{

            //Esto quiere decir que esta directiva se puede usar como atributo y Elemento
            restric : "AE",
            templateUrl: "views/ElementoTabla.html",
            replace: true,
            scope : {

                model : "="
            },
            link : function( scope ){


            }
        };

    });