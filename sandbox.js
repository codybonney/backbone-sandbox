var Basic = (function () {

    function Basic(config) {
        this.config = config;
		this._bindAlerts();
    }

	Basic.prototype._bindAlerts = function () {
		_.extend(this, Backbone.Events);
		this.on("alert", function(msg) {
			console.log('triggered ' + msg)
		});
		return this;
	};

    Basic.prototype.output = function () {
        return this;
    };

    return Basic;
})();

var basic = new Basic({
	something : "else"
});

console.log(basic.output());

basic.trigger("alert", "an event");