angular
    .module("imbdcutre")
    //Es Scope es obligatorio
    .controller("DetallePelicula",["$scope","Pelicula", function($scope, Pelicula){

        $scope.pelicula = Pelicula.data;

    }]);