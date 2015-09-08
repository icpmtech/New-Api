angular.module('Model3DApp', [])
    .controller('Model3DCtrl', function ($scope, $http) {
        $scope.id = 0;
        $scope.title = "loading model...";
        $scope.WorkFlowState = 0;
        $scope.Name = "";
        $scope.TypeFile = "";

        $scope.answer = function () {
            return $scope.correctAnswer ? 'correct' : 'incorrect';
        };

        $scope.nextQuestion = function () {
            $scope.id = 0;
            $scope.title = "loading model...";
            $scope.WorkFlowState = [];
            $scope.Name = "";
            $scope.TypeFile = "";

            $http.get("api/Model_3D").success(function (data, status, headers, config) {
                
               
                $scope.id = data.id;
                $scope.title = data.title;
                $scope.WorkFlowState = data.WorkFlowState;
                $scope.Name = data.Name;
                $scope.TypeFile = data.TypeFile;
            }).error(function (data, status, headers, config) {
                $scope.title = "Oops... something went wrong";
                $scope.working = false;
            });
        };

        $scope.sendAnswer = function (option) {
           

            $http.post('api/Model_3D', { 'id': option.id, 'title': option.title }).success(function (data, status, headers, config) {
                $scope.correctAnswer = (data === "true");
                $scope.working = false;
            }).error(function (data, status, headers, config) {
                $scope.title = "Oops... something went wrong";
                $scope.working = false;
            });
        };
    });