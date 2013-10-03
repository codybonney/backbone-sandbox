var Basic = (function () {

    function Basic(config) {
        this.config = config;
		this._Events();
	    this.model = new this._Model
	    this.model.on('change:color', function(model, color) {
		    console.log('changing color');
		    console.log(model);
		    console.log(color);
	    	$('body').css({background: color});
	    });
    }

	Basic.prototype._Model = Backbone.Model.extend({
		promptColor: function() {
			var cssColor = prompt("Please enter a CSS color:");
			this.set({color: cssColor});
		}
	});

	Basic.prototype._Events = function () {
		_.extend(this, Backbone.Events);

		this.on({
			"change:title": this.updateTitle,
			"change:page": this.updatePage
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

basic.trigger("change:title", "My New Title");
basic.trigger("change:page", 2);

basic.model.set({
	color: '#000000'
});

basic.model.promptColor();