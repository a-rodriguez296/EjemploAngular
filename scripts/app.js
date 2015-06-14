

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
            templateUrl: "views/Peliculas.html",


            resolve : {
                //Antes de llevarme a la vista html va a resolver lo que este aca dentro
                //Inyección del ApiService
                //Lo que se establece en el return siempre devuelve promesas
                Peliculas : ["ApiService", function(ApiService){

                    return ApiService.obtenerDatos("movie/upcoming");
                }]

            }
        });
        $routeSegmentProvider.segment("series", {
                controller: "SeriesCtrl",
                templateUrl: "views/Series.html"

        });

        $routeProvider.otherwise({
            redirectTo: "/peliculas"
        });

    }]);