angular.module('ProductCtrl', []).controller('ProductController', function ($scope, $location, productStorage) {
    var products = $scope.products = productStorage.get();

    productStorage.get().then(function (productArray) {
        console.log("ProductCtrl.js: productStorage.get return ", productArray);
        products = $scope.products = productArray;
    });
    console.log("ProductCtrl.js: var products is now = ", products);

    if ($location.path() === '') {
        $location.path('/');
    }

    $scope.addProduct = function () {

        if ((typeof $scope.newProduct == "undefined") || ($scope.newProduct == '')) {
            return;
        }

        console.log("ProductCtrl: try to add newProduct ", $scope.newProduct);

        productStorage.create($scope.newProduct);
        productStorage.get().then(function (productArray) {
            console.log("ProductCtrl.js: productStorage.get return ", productArray);
            products = $scope.products = productArray;
        });

        $scope.newProduct = '';
    };

});
