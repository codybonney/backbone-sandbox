var Basic = (function () {

    function Basic(config) {
        this.config = config;
    }

    Basic.prototype.output = function () {
        return this;
    };

    return Basic;
})();

var basic = new Basic({
	something : "else"
});

console.log(basic.output());


_.extend(basic, Backbone.Events);

basic.on("alert", function(msg) {
	console.log('triggered ' + msg)
});

basic.trigger("alert", "an event");