
//Mientras no se llamen dependencias no hay necesidad de poner el array
angular
    .module("imdbcutre")
    .filter("estreno", function(){

        //Un filtro siempre debe recibir un parametro
        //Un filtro siempre debe retornar una funcion
        return function(fecha){

            return "Se estrena en " + fecha;

        };
    });