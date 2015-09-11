var listController = require('./list/list.controller');

export = () => {
	angular.module('app.product', [])
		.controller('ProductListController', listController);
		// .controller('ProductListController', stuff);
		// .controller('ProductListController', mylist.ProductListController);
		// .controller('ProductListController', ProductListController);
	
}