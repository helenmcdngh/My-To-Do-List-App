angular.module('starter.controllers', [])


.controller('TasksCtrl', function($scope, Task) {
  $scope.data = Task.data;
})

.controller('AddTaskCtrl', function($scope, Task) 
{
    var data = {newTask:"", detail:"",  name:"", dueDate:""};
    
    function addTask() 
    {
        Task.addTask(data.newTask, data.detail,  data.name, data.dueDate);
    data.newTask = "";
    data.detail = "";
    data.name = "";
    data.dueDate = "";
  }
  
  $scope.data = data;
  $scope.addTask = addTask;
})

;
