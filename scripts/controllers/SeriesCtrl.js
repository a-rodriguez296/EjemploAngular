angular
    .module("imbdcutre")
    .controller("SeriesCtrl",["$scope","$http","ApiService",function($scope, $http, ApiService){


        ApiService.obtenerDatos("tv/airing_today").then(
            function( datos ){
                //Caso exitoso
                //PAra que la vista pueda acceder a cualquier función se debe poner $scope. De lo contrario, nadie puede ver esta función
                $scope.series = datos.data.results;
            },
            function(){
                //Caso error
                debugger;
            }
        );


    }]);