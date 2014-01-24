var CBATOOLS = CBATOOLS || {};
CBATOOLS.DEBUG = false;

/* Standard Garber-Irish Implementation  */
CBATOOLS.exec = function (controller, action) {
    "use strict";

    var ns = CBATOOLS_INIT,
        actionOveride = (action === undefined) ? 'init' : action;

    if (controller !== '' && ns[controller] && typeof ns[controller][actionOveride] === 'function') {
        ns[controller][actionOveride]();
    }
};

CBATOOLS.init = function () {
    "use strict";

    var body = document.body,
        controller = body.getAttribute('data-controller'),
        action = body.getAttribute('data-action');

    CBATOOLS.exec('common');
    CBATOOLS.exec(controller);
    CBATOOLS.exec(controller, action);
};

/* Initialisation methods for the HTML Templates */
var CBATOOLS_INIT = {
    common: {
        init: function() {
            "use strict";
        }
    },
    tools: {
        counter: function() {
            "use strict";

            CBATOOLS.tools.init();
            CBATOOLS.anotherModule.log();

            // Start the 'loadie' plugin now to show around 50% has completed (just an ex example)
            $('body').loadie(0.5);
        }
    }
};