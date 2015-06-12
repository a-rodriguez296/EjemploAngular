

//Crear Modulo angular
//En el array van las dependencias que quiero usar
//Setter
angular.module("imbdcutre",["ngRoute","route-segment","view-segment"]);

//Getter
//angular.module("imdbcutre")


//Configuración Routing
angular
.module("imbdcutre")
.config(["$routeSegmentProvider","$routeProvider", function ($routeSegmentProvider,$routeProvider) {

        $routeSegmentProvider.when( "/peliculas", "peliculas" );
        $routeSegmentProvider.when( "/series", "series" );

        $routeSegmentProvider.segment( "peliculas", {
            controller: "PeliculasCtrl",
            templateUrl: "views/Peliculas.html"
        });
        $routeSegmentProvider.segment("series", {
                controller: "SeriesCtrl",
                templateUrl: "views/Series.html"

        });

        $routeProvider.otherwise({
            redirectTo: "/peliculas"
        });

    }]);