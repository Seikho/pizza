export = () => routeConfig;

function routeConfig($routeProvider: ng.route.IRouteProvider): void {
	$routeProvider
		.when('/productList',
			{
				templateUrl: '/app/pizza/product/list/list.html',
				controller: 'ProductListController as vm'
			})
		.otherwise('/productList');
}