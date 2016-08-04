/*global todomvc */
'use strict';

/**
 * Служба для извлечения сохраненных заданий из локального хранилища.
 */
angular.module('sampleApp').controller('TodoService', []).factory('todoStorage', function () {
    var STORAGE_ID = 'todos-angularjs';

    return {
        get: function () {
            console.log(localStorage)
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        put: function (todos) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
        }
    };
});
