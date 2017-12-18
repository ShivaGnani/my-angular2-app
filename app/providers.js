System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var CategoryListToken, CategoryList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("CategoryListToken", CategoryListToken = new core_1.OpaqueToken('CategoryListToken'));
            exports_1("CategoryList", CategoryList = {
                categories: ['Bevarages', 'Condiments', 'Produce', 'SeaFood', 'Misc']
            });
        }
    }
});
//# sourceMappingURL=providers.js.map