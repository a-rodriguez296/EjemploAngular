angular
    .module("imbdcutre")
    .controller("NavegacionCtrl",["$scope","$routeSegment",function($scope, $routeSegment){


        $scope.rutaEsPeliculas = function(){

            //Averiguar cual es el route-segment en el que estoy
            return $routeSegment.startsWith("peliculas");
        }

        $scope.rutaEsSeries = function(){

            //Averiguar cual es el route-segment en el que estoy
            return $routeSegment.startsWith("series");
        }

    }]);
