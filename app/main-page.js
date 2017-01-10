var view = require('ui/core/view');
var enums = require("ui/enums");

function onNavigatingTo(args) {

    var page = args.object;
}

exports.onNavigatingTo = onNavigatingTo;

exports.tapAccordionItem = function(args) {
    var accordionItem = args.object.parent;

    var classNameCallback = function (child) {
        if (child.cssClasses.has("accordion-content")) {
            if (child.cssClasses.has("accordion-content-active")) {
                child.className = "accordion-content";
            } else {
                child.className = "accordion-content accordion-content-active";
                animateItem(child);
            }
        }

        return true;
    };

    view.eachDescendant(accordionItem, classNameCallback);
}