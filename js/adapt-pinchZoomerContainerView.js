define([
    'backbone',
    'coreJS/adapt',
    'extensions/adapt-pinchZoomer/js/jquery.zoom'
], function(Backbone, Adapt, zoom) {

    var pinchZoomerContainerView = Backbone.View.extend({

        className: 'pinchZoomerContainer',

        events: {
            'click .pinchZoomer': 'activatePinchZoomer'
        },

        initialize: function(options) {

            this.listenTo(Adapt, 'remove', this.remove);
            this.render();
            console.log("after render")
        },

        activatePinchZoomer: function(event) {
            
            var $currentTarget=$(event.currentTarget);
            console.log($currentTarget)
            var targetImage=$(event.currentTarget).find('img')[0].src;
            $currentTarget.zoom({url : targetImage });
           
        },

        render: function() {
            var data = this.model.toJSON();
            var template = Handlebars.templates["pinchZoomer"];
            this.$el.html(template(data));
            return this;
        }

    });
    return pinchZoomerContainerView;
});
