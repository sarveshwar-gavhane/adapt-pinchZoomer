define([
    'backbone',
    'coreJS/adapt',
    './adapt-pinchZoomerContainerView'
], function(Backbone, Adapt, pinchZoomerContainerView) {

       function onComponentViewPostRender (pinchZoomerComponentView) {

            var pinchZoomerComponentData = pinchZoomerComponentView.model.get('_pinchZoomer') || {};
            if(pinchZoomerComponentData._isEnabled !== true) return ;

                if(Adapt.device.screenSize === "small") {
                    var $pinchZoomerView = new pinchZoomerContainerView({model: new Backbone.Model(pinchZoomerComponentData)}).$el;
                    var $componentBody = pinchZoomerComponentView.$el.find('.component-widget');
                    $componentBody.wrap($pinchZoomerView);
                }
      }

    Adapt.on("componentView:postRender", function(pinchZoomerComponentView) {
        var courseData = Adapt.course.get('_pinchZoomer');
        if (courseData && courseData._isEnabled) {
              onComponentViewPostRender(pinchZoomerComponentView);
        }
    });

});

