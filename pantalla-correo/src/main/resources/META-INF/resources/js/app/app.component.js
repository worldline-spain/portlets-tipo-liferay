var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../services/shared.module", "@angular/forms"], function (require, exports, core_1, shared_module_1, forms_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(translate, liferayService, fb) {
            this.translate = translate;
            this.liferayService = liferayService;
            this.fb = fb;
            this.msgs = [];
            this.initTranslate();
        }
        AppComponent.prototype.ngOnInit = function () {
            this.userform = this.fb.group({
                'name': new forms_1.FormControl('', forms_1.Validators.required),
                'entity': new forms_1.FormControl('', forms_1.Validators.required),
                'email': new forms_1.FormControl('', forms_1.Validators.required),
                'phone': new forms_1.FormControl(''),
                'area': new forms_1.FormControl('', forms_1.Validators.required),
                'detail': new forms_1.FormControl('', forms_1.Validators.required)
            });
            this.areas = [];
            this.areas.push({ label: '', value: '' });
            this.areas.push({ label: 'Value 1', value: '1' });
            this.areas.push({ label: 'Value 2', value: '2' });
            this.areas.push({ label: 'Value 3', value: '3' });
            this.areas.push({ label: 'Value 4', value: '4' });
        };
        AppComponent.prototype.onSubmit = function (value) {
            this.submitted = true;
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Email sent.' });
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
            templateUrl: '/o/pantalla-correo/js/app/app.html'
        }),
        __metadata("design:paramtypes", [shared_module_1.TranslateService,
            shared_module_1.LiferayService,
            forms_1.FormBuilder])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map