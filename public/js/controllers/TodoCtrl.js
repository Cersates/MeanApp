'use strict';

//Наш единственный контроллер
angular.module('TodoCtrl', []).controller('TodoController', function TodoCtrl($scope, $location, todoStorage) {
	var todos = $scope.todos = todoStorage.get();

	$scope.$watch('todos', function () {
			todoStorage.put(todos);
	}, true);

	if ($location.path() === '') {
		$location.path('todo');
	}

	$scope.location = $location;

	// $scope.$watch('location.path()', function (path) {
	// 	$scope.statusFilter = (path === '/active') ?
	// 		{ completed: false } : (path === '/completed') ?
	// 		{ completed: true } : null;
	// });

	$scope.addTodo = function () {
		if (!$scope.newTodo.length) {
			return;
		}

		todos.push({
			title: $scope.newTodo,
			completed: false
		});

		$scope.newTodo = '';
	};

	$scope.editTodo = function (todo) {
		$scope.editedTodo = todo;
	};

	$scope.doneEditing = function (todo) {
		$scope.editedTodo = null;
		if (!todo.title) {
			$scope.removeTodo(todo);
		}
	};

	$scope.removeTodo = function (todo) {
		todos.splice(todos.indexOf(todo), 1);
	};

	$scope.clearCompletedTodos = function () {
		$scope.todos = todos = todos.filter(function (val) {
			return !val.completed;
		});
	};

	$scope.markAll = function (completed) {
		todos.forEach(function (todo) {
			todo.completed = completed;
		});
	};
});
