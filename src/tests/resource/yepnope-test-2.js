var DUMMY_NS = DUMMY_NS || {};

(function(NAMESPACE) {
    "use strict";

    NAMESPACE.moduleTwo = {
        log : function() {
            console.log('I\'m Module Two');
        }
    };

}(DUMMY_NS));