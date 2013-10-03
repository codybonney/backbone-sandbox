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