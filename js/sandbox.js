var Slider = (function () {

    function Slider(config) {
	    var self = this;

	    self.config = config;
		self.models = self._Models();
	    self.collections = self._Collections();

	    this.slides = new self.collections.Slides(
		    _.map(self.config.slides, function(slide) {
			    return new self.models.Slide(slide);
		    })
	    );
		this.events = this._Events();
    }

	Slider.prototype._Models = function() {
		return {
			Slide: Backbone.Model.extend({

			}, this)
		}
	};

	Slider.prototype._Collections = function() {
		var self = this;
		return {
			Slides: Backbone.Collection.extend({
				model: self.models.Slide
			}, this)
		}
	};

	Slider.prototype._Events = function () {
		this.slides.on('change:background', function(model, color) {
			$('body').css({background: color});
		});
	};

    return Slider;
})();