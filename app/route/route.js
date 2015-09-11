function routeConfig($routeProvider) {
    $routeProvider
        .when('/productList', {
        templateUrl: '/app/pizza/product/list/list.html',
        controller: 'ProductListController as vm'
    })
        .otherwise('/productList');
}
module.exports = function () { return routeConfig; };
//# sourceMappingURL=route.js.map