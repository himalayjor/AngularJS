'use strict';
angular.module('confusionApp').controller('MenuController', ['$scope', 'menuFactory',function($scope, menuFactory) {
                                                                 $scope.tab = 1;
                                                                 $scope.filtText = '';
                                                                 
                                                                 $scope.showDetails = false;
                                                                 
                                                                 $scope.dishes= menuFactory.getDishes();
                                                                 
                                                                 $scope.select = function(setTab) {
                                                                    $scope.tab = setTab;
                                                                 
                                                                    if (setTab === 2) {
                                                                        $scope.filtText = "appetizer";
                                                                    }
                                                                    else if (setTab === 3) {
                                                                        $scope.filtText = "mains";
                                                                    }
                                                                    else if (setTab === 4) {
                                                                        $scope.filtText = "dessert";
                                                                    }
                                                                    else {
                                                                        $scope.filtText = "";
                                                                    }
                                                                 };
                                                                 
                                                                 $scope.isSelected = function (checkTab) {
                                                                    return ($scope.tab === checkTab);
                                                                 };
                                                                 
                                                                 $scope.toggleDetails = function() {
                                                                    $scope.showDetails = !$scope.showDetails;
                                                                 };
                                                                 
                                                                 }]);
