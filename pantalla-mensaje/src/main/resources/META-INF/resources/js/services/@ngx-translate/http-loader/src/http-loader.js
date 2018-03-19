define(["require", "exports", "rxjs/add/operator/map"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TranslateHttpLoader = (function () {
        function TranslateHttpLoader(http, prefix, suffix) {
            if (prefix === void 0) { prefix = "/assets/i18n/"; }
            if (suffix === void 0) { suffix = ".json"; }
            this.http = http;
            this.prefix = prefix;
            this.suffix = suffix;
        }
        /**
         * Gets the translations from the server
         * @param lang
         * @returns {any}
         */
        TranslateHttpLoader.prototype.getTranslation = function (lang) {
            return this.http.get("" + this.prefix + lang + this.suffix)
                .map(function (res) { return res.json(); });
        };
        return TranslateHttpLoader;
    }());
    exports.TranslateHttpLoader = TranslateHttpLoader;
});
//# sourceMappingURL=http-loader.js.map