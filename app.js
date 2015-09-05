var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var grid_1 = require('grid');
// Annotation section
var MyAppComponent = (function () {
    function MyAppComponent(friendsService) {
        this.title = 'Cloud Decision Table';
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            appInjector: [FriendsService]
        }),
        angular2_1.View({
            templateUrl: 'views/app.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf, grid_1.GridComponent]
        }), 
        __metadata('design:paramtypes', [FriendsService])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
