(function($A) {
    "use strict";

    $A.showReadme = {}; // extend namespace

    $A.showReadme.init = function() {
        var showReadme = document.querySelector('.showReadme');

        document.querySelector('.showReadme').addEventListener('click', function() {

            var titleBox = document.querySelector('.title-box');

            titleBox.classList.add('collapse');

            titleBox.addEventListener('webkitTransitionEnd', function() {
                $('.holder').addClass('large');
                $('.holdReadme').show();
                $('.holdReadme').addClass('show');
            }, false );
        })

        showReadme.classList.add('show');

        showReadme.addEventListener('webkitTransitionEnd', function() {
            $APP.showReadme.getReadme(function(response) {
                document.querySelector('.holdReadme').innerHTML = response;
            }, function() {
                document.querySelector('.holdReadme').innerHTML = 'Sorry, the documentation is only available in Development mode (When in Grunt "Serve") due to file size / app optimisation considerations';
            });
        }, false );
    };

    $A.showReadme.getReadme = function(onDone, onError) {
        $.when($.ajax({url : '/docs/readme.html'})).then(function(response) {
            onDone(response);
        }, function() {
            onError();
        });
    };

}($APP));
