var Basic = (function () {

    function Basic(config) {
        this.config = config;
	    this.model = new this._Model;
		this._events();
    }

	Basic.prototype._Model = Backbone.Model.extend({
		promptColor: function() {
			var cssColor = prompt("Please enter a CSS color:");
			this.set({color: cssColor});
		}
	});

	Basic.prototype._events = function () {

		this.model.on('change:color', function(model, color) {
			console.log('changing color');
			console.log(model);
			console.log(color);
			$('body').css({background: color});
		});

		return this;
	};

	Basic.prototype.updateTitle = function(title) {
		this.config.title = title;
	};

	Basic.prototype.updatePage = function(page) {
		this.config.page = page;
	};

    return Basic;
})();

var basic = new Basic({
	title : "My Title",
	page : 1
});

basic.model.set({
	color: '#000000'
});

//basic.model.promptColor();