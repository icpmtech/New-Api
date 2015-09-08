angular.module('Model3DApp', [])
    .controller('Model3DCtrl', function ($scope, $http) {
        $scope.id = 0;
       
        $scope.WorkFlowState = [];
        $scope.Name = "Loading";
        $scope.TypeFile = "";

        $scope.answer = function () {
            return $scope.TypeFile ;
        };

        $scope.nextQuestion = function () {
            $scope.id = 0;
            $scope.Name = "loading model...";
            $scope.WorkFlowState = [];
           
            $scope.TypeFile = "";

            $http.get("api/Model_3D").success(function (data, status, headers, config) {
                
               
                $scope.id = data.id;
              
                $scope.WorkFlowState = data.WorkFlowState;
                $scope.Name = data.Name;
                $scope.TypeFile = data.TypeFile;
            }).error(function (data, status, headers, config) {
                $scope.Name = "Oops... something went wrong";
              
            });
        };

        $scope.sendAnswer = function (option) {s
           

            $http.post('api/Model_3D', { 'id': option.id, 'title': option.Name }).success(function (data, status, headers, config) {
                $scope.correctAnswer = (data === "true");
               
            }).error(function (data, status, headers, config) {
                $scope.Name = "Oops... something went wrong";
                
            });
        };
    });