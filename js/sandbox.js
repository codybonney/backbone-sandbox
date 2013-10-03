var Slider = (function () {

    function Slider(config) {
	    var self = this;

	    self.config = config;
		self.models = self._Models();
	    self.collections = self._Collections();
	    self.views = self._Views();

	    this.slides = new self.collections.Slides(
		    _.map(self.config.slides, function(slide) {
			    return new self.models.Slide(slide);
		    })
	    );

	    self.view = new self.views.Slide({
		    model: this.models.Slide
	    });

	    self.view.setElement($('.slide'));

		this.events = this._Events();
    }

	Slider.prototype._Models = function() {
		return {
			Slide: Backbone.Model.extend({

			}, this)
		}
	};

	Slider.prototype._Collections = function() {
		return {
			Slides: Backbone.Collection.extend({
				model: this.models.Slide
			}, this)
		}
	};

	Slider.prototype._Views = function() {
		var self = this;
		return {
			Slide: Backbone.View.extend({
				tagName: "div",

				className: "slide",

				events: {
					"click": function() {
						console.log('clicked');
					}
				},

				initialize: function() {
					//this.listenTo(self.models.Slide, "change:background", this.render);
				},

				render: function() {
					console.log('rendering')
				}

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