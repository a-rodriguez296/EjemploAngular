

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

        // Se utiliza :id para decir que esa parte de la dirección es dinámica
        $routeSegmentProvider.when( "/peliculas/:id/detalles","detalle_pelicula")


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

            },
            resolveFail : {

                //Acá entra si falla cualquiera de las promesas

            }
        });
        $routeSegmentProvider.segment("series", {
                controller: "SeriesCtrl",
                templateUrl: "views/Series.html",
                resolve : {
                    Series : ["ApiService", function(ApiService){

                        return ApiService.obtenerDatos("tv/airing_today");
                    }]
                }

        });



        $routeSegmentProvider.segment("detalle_pelicula", {

            
        });

        $routeProvider.otherwise({
            redirectTo: "/peliculas"
        });

    }]);