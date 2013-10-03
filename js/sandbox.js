var Basic = (function () {

    function Basic(config) {
        this.config = config;
	    this.model = new this._Model;

		this._Events();
    }

	Basic.prototype._Model = Backbone.Model.extend({
		promptColor: function() {
			var cssColor = prompt("Please enter a CSS color:");
			this.set({color: cssColor});
		}
	});

	Basic.prototype._Events = function () {

		this.model.on('change:color', function(model, color) {
			$('body').css({background: color});
		});

		return this;
	};

    return Basic;
})();