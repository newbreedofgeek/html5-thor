module('Unit Tests');


test('Testing Namespace extention pattern used in app', 1, function() {
    // Pause the test
    stop();

    var testPassed = false;

    var DUMMY_NS = DUMMY_NS || {};

    (function(NAMESPACE) {
        "use strict";

        NAMESPACE.anotherModule = {
            log : function() {
                console.log('I\'m another Module');
            }
        };

    }(DUMMY_NS));

    if(typeof DUMMY_NS.anotherModule.log === 'function') {
        testPassed = true;
    }

    ok(testPassed, "Passed! Namespace extention pattern seems to work well.");

    start();
});

module('Integration Tests');

test('Testing YepNope based script loading', 1, function() {
    // Pause the test
    stop();

    var testPassed = false;

    yepnope({
        load: ["timeout=100!resource/yepnope-test-1.js", "timeout=100!resource/yepnope-test-2.js"],
        complete: function() {
            if((DUMMY_NS.moduleOne && typeof DUMMY_NS.moduleOne.log === 'function') && (DUMMY_NS.moduleTwo && typeof DUMMY_NS.moduleTwo.log === 'function')) {
                testPassed = true;
            }

            ok(testPassed, "Passed! YepNope works well for us.");
            start();
        }
    });
});