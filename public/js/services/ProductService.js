angular.module('sampleApp').controller('ProductService', []).factory('productStorage', ['$http', function ($http) {
    var STORAGE_ID = 'products-angularjs';

    return {
        get: function () {
            var result;
            result = $http.get('/api/prod/')
                .then(function (ll) {
                    return ll.data;
                })
                .catch(function (err) {
                    console.log(err)
                });
            console.log("ProductService.js: get-function return ", result);

            return result;
        },

        create: function (productData) {

            console.log("-ProjectService.js: Try to add new product - " + productData)

            return $http.post('/api/prod/', {title: productData})
                .then(function (ll) {
                    return ll;
                })
                .catch(function (err) {
                    console.log(err)
                });
        }

    };
}]);
