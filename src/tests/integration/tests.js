module('Other JS Libraries');

// Check if we are using the exact correct library of jQuery
test('JQuery 2.1.0 Test', 1, function() {
    stop();

    var testPassed = false;

    if (jQuery.fn.jquery  == '2.1.0') {
        testPassed = true;
    }

    if (testPassed) {
        ok(testPassed, "Passed!");
    }
    else {
        ok(testPassed, "Error!");
    }

    start();
});
