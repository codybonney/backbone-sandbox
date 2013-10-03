var Basic = (function () {

    function Basic(config) {
        this.config = config;
		this._Events();
    }

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

console.log(basic);