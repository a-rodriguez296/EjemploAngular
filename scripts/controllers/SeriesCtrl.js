angular
    .module("imbdcutre")
    .controller("SeriesCtrl",["$scope","ApiService","$filter",function($scope, ApiService, $filter){


        ApiService.obtenerDatos("tv/airing_today").then(
            function( datos ){
                //Caso exitoso
                //PAra que la vista pueda acceder a cualquier función se debe poner $scope. De lo contrario, nadie puede ver esta función
                //El filtro orberBy se aplica a datos.data.results
                $scope.series = $filter("orderBy")( datos.data.results, "original_name");
            },
            function(){
                //Caso error
                debugger;
            }
        );


    }]);