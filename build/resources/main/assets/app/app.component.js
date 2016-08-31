(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'coffee-app',
            template: '<p>Angular 2 Coffee Shop</p>'
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
