yepnope({
    both: ["js/modules/_init.js", "js/modules/counter.js", "js/modules/anotherModule.js"],
    complete: function() {

        "use strict";

        CBATOOLS.init();
    }
});