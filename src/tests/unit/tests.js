module('Demo Unit Tests for app.readme');

test('showReadme ajax call Test', function () {
    "use strict";

    stop();

    $APP.showReadme.getReadme(function(response) {
        ok(true, 'Success');
        start();
    }, function() {
        ok(false, 'Error');
        start();
    });
});

module('Other Tests');

test( 'Unit test 1', function() {
    ok( 1 == '1', 'Example test' );
});

