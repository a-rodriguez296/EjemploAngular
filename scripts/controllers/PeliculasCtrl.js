angular
    .module("imbdcutre")
    .controller("PeliculasCtrl",["$scope","$http","ApiService", function($scope, $http, ApiService){


        ApiService.obtenerDatos("movie/upcoming").then(
            function( datos ){


                //Caso exitoso
                //PAra que la vista pueda acceder a cualquier función se debe poner $scope. De lo contrario, nadie puede ver esta función
                $scope.peliculas = datos.data.results;
            },
            function(){
                debugger;
                //Caso error
            }

        );
    }]);

