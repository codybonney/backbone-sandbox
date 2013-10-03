var Slider = (function () {

    function Slider(config) {
	    var self = this;
		self.Models = self._Models();
	    self.Collections = self._Collections();

	    this.config = config;
	    this.slides = new self.Collections.slides(
		    _.map(self.config.slides, function(slide) {
			    return new self.Models.slide(slide);
		    })
	    );
		this.events = this._Events();
    }

	Slider.prototype._Models = function() {
		var self = this;
		return {
			slide : Backbone.Model.extend({

			})
		}
	};

	Slider.prototype._Collections = function() {
		var self = this;
		return {
			slides :  Backbone.Collection.extend({
				model : self.Models.slide
			})
		}
	};

	Slider.prototype._Events = function () {
		this.slides.on('change:background', function(model, color) {
			$('body').css({background: color});
		});
	};

    return Slider;
})();