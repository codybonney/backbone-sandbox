var Basic = (function () {

    function Basic(config) {
        this.config = config;
		this._Events();
    }

	Basic.prototype._Events = function () {
		_.extend(this, Backbone.Events);

		this.on("change:title change:page", function(title) {
			console.log("triggered change: " + title);
			this.config.title = title;
		});

		return this;
	};

    return Basic;
})();

var basic = new Basic({
	title : "My Title",
	page : 1
});

basic.trigger("change:page", "New Title");

console.log(basic);