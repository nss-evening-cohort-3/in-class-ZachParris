var app = angular.module("BasicsOfForms", []);

app.controller("FormController", function ($scope) {
    
        $scope.formSubmit = function (event) {
                //alert("Form Submit called!");
                var form = $("#myform").serialize();
                console.log(form);
        
        
        
                event.preventDefault();
            };
});