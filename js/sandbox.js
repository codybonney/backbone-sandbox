var Slider = (function () {

    function Slider(config) {
	    var self = this;
	    this.config = config;
	    this.slides = new this.Slides;

	    _.each(this.config.slides, function(slide, i) {
		    self.slides.add(new self.Slide(slide));
	    });

		this.events = this._Events();
    }

	Slider.prototype.Slide = Backbone.Model.extend({
		promptColor: function() {
			var cssColor = prompt("Please enter a CSS color:");
			this.set({
				color: cssColor
			});
		}
	});

	Slider.prototype.Slides = Backbone.Collection.extend({
		model : this.Slide
	});

	Slider.prototype._Events = function () {
		this.slides.on('change:color', function(model, color) {
			$('body').css({background: color});
		});
	};

    return Slider;
})();