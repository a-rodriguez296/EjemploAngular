angular
    .module("imbdcutre")
    .controller("PeliculasCtrl",["$scope","$http",function($scope, $http){



        var url = "https://api.themoviedb.org/3/movie/upcoming";
        // API key.
        url += "?api_key=826b523c417cbb888744b13031d846c2";
        // Idioma de la información.
        url += "&language=es";


        $http.get( url)
            .then(
                function( datos ){

                    //Caso exitoso
                    //PAra que la vista pueda acceder a cualquier función se debe poner $scope. De lo contrario, nadie puede ver esta función
                    $scope.peliculas = datos.data.results;
                },
                function(){

                    //Caso error
                }
        );



    }]);

