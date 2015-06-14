angular
    .module("imbdcutre")
    .service("ApiService", ["$http","Settings", function ($http, Settings){

        this.obtenerDatos = function(ruta){


            return $http.get(Settings.apiUrl + ruta, {

                params:{
                    "api_key":Settings.apiKey,
                    "language": Settings.apiLang
                },

                cache : true
            });
        };



    }]);
