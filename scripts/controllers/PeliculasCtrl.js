angular
    .module("imbdcutre")
    .controller("PeliculasCtrl",["$scope","Peliculas", function($scope, Peliculas){

        //Caso exitoso
        //PAra que la vista pueda acceder a cualquier función se debe poner $scope. De lo contrario, nadie puede ver esta función
        $scope.peliculas = Peliculas.data.results;



    }]);

