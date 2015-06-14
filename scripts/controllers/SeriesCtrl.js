angular
    .module("imbdcutre")
    .controller("SeriesCtrl",["$scope","Series","$filter",function($scope, Series, $filter){

        $scope.series = $filter("orderBy")( Series.data.results, "original_name");
    }]);