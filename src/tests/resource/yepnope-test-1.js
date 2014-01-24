var DUMMY_NS = DUMMY_NS || {};

(function(NAMESPACE) {
    "use strict";

    NAMESPACE.moduleOne = {
        log : function() {
            console.log('I\'m Module One');
        }
    };

}(DUMMY_NS));