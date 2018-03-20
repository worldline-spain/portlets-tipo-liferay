/**
 * Angular loader only used in development by local web server.
 *
 * This file emulates what Liferay achieves using 'angular-loader.ts',
 * invoking main object with the name/selector of the root
 * node to bootstrap main component (AppComponent) in it.
 */
define(["require", "exports", "./main", "font-awesome/css/font-awesome.min.css", "primeng-wl/resources/themes/omega/theme.css", "primeng-wl/resources/primeng.min.css", "../css/main.css"], function (require, exports, main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    main_1.default('demo-app');
});
//# sourceMappingURL=debug.loader.js.map