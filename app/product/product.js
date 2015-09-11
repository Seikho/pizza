var listController = require('./list/list.controller');
module.exports = function () {
    angular.module('app.product', [])
        .controller('ProductListController', listController);
    // .controller('ProductListController', stuff);
    // .controller('ProductListController', mylist.ProductListController);
    // .controller('ProductListController', ProductListController);
};
//# sourceMappingURL=product.js.map