// module mylist {
interface IProductListController {
	title: string;
}

export class ProductListController implements IProductListController {
	
	title: string;
	
	constructor() {
		this.title = 'asdf';
	}
}

// // move this
// angular
// 	.module('app.pizza')
// 	.controller('ProductListController', ProductListController);
// }