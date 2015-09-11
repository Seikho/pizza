require('angular');
require('angular-route');

// var pizzaApp = require('./pizza/pizza');
// var routing = require('./route/route');
var product = require('./product/product');

angular.module('app', [
		'ngRoute'
		, product
		// , routing
	]);

// angular
// 	.module('app')
// 	.controller(routing);

// angular
// 	.module('app')
// 	.config(routing);


// angular.module('app', ['ngRoute', 'pizza']);