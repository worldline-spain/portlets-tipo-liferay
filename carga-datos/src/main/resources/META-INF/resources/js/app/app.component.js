var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../services/shared.module"], function (require, exports, core_1, shared_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(translate, liferayService) {
            this.translate = translate;
            this.liferayService = liferayService;
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
            this.translate.setDefaultLang(this.liferayService.getLanguageLiferay());
            // Set your language here
            this.translate.use(this.liferayService.getLanguageLiferay());
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/carga-datos/js/app/app.html'
        }),
        __metadata("design:paramtypes", [shared_module_1.TranslateService,
            shared_module_1.LiferayService])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map