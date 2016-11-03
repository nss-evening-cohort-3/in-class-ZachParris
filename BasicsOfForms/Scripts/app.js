var app = angular.module("BasicsOfForms", [])

app.controller("FormController", ["$scope", function ($scope) {
    $scope.formSubmit = function (event) {

        var form = $("#myform").serialize();
        console.log();


        event.preventDefault();

    };
}]);