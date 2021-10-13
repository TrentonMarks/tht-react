/* Source and licensing information for the line(s) below can be found at http://tht-react.dd:8083/core/assets/vendor/jquery.ui/ui/disable-selection-min.js. */
/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.fn.extend({disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(n+".ui-disableSelection",(function(e){e.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}});var n}));
/* Source and licensing information for the above line(s) can be found at http://tht-react.dd:8083/core/assets/vendor/jquery.ui/ui/disable-selection-min.js. */