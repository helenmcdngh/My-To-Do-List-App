angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {
    tasks: [
      {title: "Movies",detail:"Ghostbuster 1 and 2",name: "Bill Murray", dueDate:"05/06/2016", added: new Date()}
        
      , {title: "Movies",detail:"Men in Black 1, 2, 3",name: "Tommy L Jones", dueDate:"07/06/2016", added: new Date()}
    ]
  };
  
  function addTask(title, detail,name, dueDate) {
    data.tasks.push({title, detail, name, dueDate,added: new Date()});
  }

  return {data: data, addTask: addTask};
})
;
