(function (angular) {
	'use strict';
	
	var myApp = angular.module('myTodomvc',[]);
	 
	myApp.controller('MainController',['$scope',function($scope){
		
		function getId(){
			var id = Math.random();
			for(var i=0;i<$scope.todos.length;i++){
				if($scope.todos[i].id ===id){
					id = getId();
					break;
				}
			}
			return id;

		}
		$scope.text = '';

		$scope.todos = [
		{id:1, text:'学习', completed:false},
		{id:2, text:'睡觉', completed:false},
		{id:3, text:'玩游戏', completed:true},
		];



		 // 添加todo
	    $scope.add = function() {
	    	if(!$scope.text){
	    		return;
	    	}
	      $scope.todos.push({
	        // 自动增长？
	        id: getId(),
	        // 由于$scope.text是双向绑定的，add同时肯定可以同他拿到界面上的输入
	        text: $scope.text,
	        completed: false
	      });
	      // 清空文本框
	      $scope.text = '';
	    };

		// $scope.add = function() {
		// 		$scope.todos.push(
		// 			{
		// 			id:Math.random(),

		// 			 text:$scope.text, 

		// 			 completed:false
		// 			});

		// 		$scope.text = '';
		// 	};

		 // 处理删除
	  //   $scope.remove = function(id) {
	  //     // 删除谁
	  //     for (var i = 0; i < $scope.todos.length; i++) {
	  //       if ($scope.todos[i].id === id) {
	  //         $scope.todos.splice(i, 1);
	  //         break;
	  //       }
	  //     }
	  //     // $scope.todos
	  //   };


		$scope.remove = function(id){
			// $scope.todos
			for(var i = 0;i<$scope.todos.length;i++){

				if ($scope.todos[i].id===id){
					$scope.todos.splice(i,1);
					break;

				}
			}

		};
		$scope.clear = function() {
	      var result = [];
	      for (var i = 0; i < $scope.todos.length; i++) {
	        if (!$scope.todos[i].completed) {
	          result.push($scope.todos[i]);
	        }
	      }
	      $scope.todos = result;
	    };
		// $scope.clear=function(){
		// 	for(var i = 0;i<$scope.ttodos.length;i++){

		// 		if ($scope.todos[i].completed){
		// 			$scope.todos.splice(i,1);

		// 		}
		// 	}
		// };
		$scope.existCompleted=function(){
			for (var i = 0; i < $scope.todos.length; i++) {
	        	if (!$scope.todos[i].completed) {
	         		 return true;
	      		}
	  		}
	  		return false;
		};
	}]);

})(angular);
