angular
    .module("imbdcutre")
    .service("ApiService", ["$http", function ($http){

        this.obtenerDatos = function(ruta){


            return $http.get("https://api.themoviedb.org/3/" + ruta, {

                params:{
                    "api_key":"826b523c417cbb888744b13031d846c2",
                    "language": "es"
                },

                cache : true
            });
        };
    }]);
