var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../../libs/libs"], function (require, exports, core_1, libs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(translate) {
            this.translate = translate;
            this.uploadedFiles = [];
            this.initTranslate();
            this.listItems = [];
            this.listItems.push({ label: 'Item 1', value: '1' });
            this.listItems.push({ label: 'Item 2', value: '2' });
            this.listItems.push({ label: 'Item 3', value: '3' });
        }
        AppComponent.prototype.onUpload = function (event) {
            for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
                var file = _a[_i];
                this.uploadedFiles.push(file);
            }
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
        };
        AppComponent.prototype.initTranslate = function () {
            // Set the default language for translation strings, and the current language.
            //this.translate.setDefaultLang('es');
            this.translate.setDefaultLang(Liferay.ThemeDisplay.getLanguageId());
            if (Liferay.ThemeDisplay.getLanguageId() !== undefined) {
                this.translate.use(Liferay.ThemeDisplay.getLanguageId());
            }
            else {
                this.translate.use('es_ES'); // Set your language here
            }
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/carga-datos/js/app/app.html'
        }),
        __metadata("design:paramtypes", [libs_1.TranslateService])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map