(function(NAMESPACE) {
    "use strict";

    NAMESPACE.tools = {};

    NAMESPACE.tools.init = function() {
        var initialValue = 14;
        var targetValue = 15;
        var sliderWidth = 150;
        var sliderStepWidth = sliderWidth / targetValue;

        var toolSetup = function(newInitialValue) {
            initialValue = newInitialValue;

            if(initialValue >= 0 && initialValue <= targetValue) {
                // initial state reset
                $('.brokerage-tool').fadeIn();
                $('.pointer').show();
                $('.status').show();
                $('.checked').hide();
                $('.goal-flag').removeClass('glow');

                $('.dyn-count').text('$' + (targetValue - initialValue));
                $('.dyn-target-count').text('$' + targetValue);
                $('.dyn-pointer-val').text('$' + initialValue);

                // delay animation so it looks nice
                setTimeout(function() {
                    $('body').loadie(1); // exaple hook of 'loadie' plugin to show progress

                    $('.title-box').animate({
                        opacity: 1,
                        top: -1530
                    }, 1000);


                    $('.bar-inner').css('width', sliderStepWidth * initialValue);
                    $('.pointer').css('left', sliderStepWidth * initialValue);

                    $(".pointer").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {

                        if(parseInt(initialValue) === targetValue) {
                            $('.pointer').fadeOut();
                            $('.status').fadeOut();
                            $('.checked').fadeIn();
                            $('.goal-flag').addClass('glow');
                        }
                        else {
                            $('.dyn-pointer-val').text('$' + initialValue); // force a redraw as there is a bug in css3 transitions where symbols are blurred (i.e. the $ is blurred)
                        }
                    });
                }, 1000);
            }
            else {
                alert('Error! Outside acceptable range of 0 - 15');
            }
        };

        toolSetup(initialValue);

        // DEBUG
        $('#new-val').on('change', function() {
            toolSetup($(this).val());
        });
    };

}(CBATOOLS));
