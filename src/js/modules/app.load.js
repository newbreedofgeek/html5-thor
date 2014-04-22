(function($A) {
    "use strict";

    $A.load = {}; // extend namespace

    $A.load.init = function() {

        // Start the 'loadie' plugin now to show around 50% has completed (just an example)
        $('body').loadie(0.5);

        setTimeout(function() {
            var titleBox = document.querySelector('.title-box');

            $('body').loadie(1); // example hook of 'loadie' plugin to show progress

            document.querySelector('.bg-one').classList.add('hide');
            titleBox.classList.add('show');

            titleBox.addEventListener('webkitTransitionEnd', function() {
                $APP.showReadme.init();
            }, false );
        }, 1000);
    };

}($APP));
