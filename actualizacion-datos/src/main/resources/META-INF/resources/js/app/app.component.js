var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../../libs/libs", "@angular/forms"], function (require, exports, core_1, libs_1, forms_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(translate, fb) {
            this.translate = translate;
            this.fb = fb;
            this.msgs = [];
            this.initTranslate();
        }
        AppComponent.prototype.ngOnInit = function () {
            this.userform = this.fb.group({
                'firstname': new forms_1.FormControl('', forms_1.Validators.required),
                'lastname': new forms_1.FormControl('', forms_1.Validators.required),
                'password': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])),
                'description': new forms_1.FormControl(''),
                'gender': new forms_1.FormControl('', forms_1.Validators.required)
            });
            this.genders = [];
            this.genders.push({ label: 'Select Gender', value: '' });
            this.genders.push({ label: 'Male', value: 'Male' });
            this.genders.push({ label: 'Female', value: 'Female' });
            this.languages = [];
            this.languages.push({ label: 'Spanish', value: 'es' });
            this.languages.push({ label: 'English', value: 'en' });
        };
        AppComponent.prototype.onSubmit = function (value) {
            this.submitted = true;
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
        };
        Object.defineProperty(AppComponent.prototype, "diagnostic", {
            get: function () { return JSON.stringify(this.userform.value); },
            enumerable: true,
            configurable: true
        });
        AppComponent.prototype.initTranslate = function () {
            // Set the default language for translation strings, and the current language.
            this.translate.setDefaultLang('es');
            if (this.translate.getBrowserLang() !== undefined) {
                this.translate.use(this.translate.getBrowserLang());
            }
            else {
                this.translate.use('es'); // Set your language here
            }
        };
        AppComponent.prototype.changeLanguage = function (language) {
            this.translate.use(language);
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/actualizacion-datos/js/app/app.html'
        }),
        __metadata("design:paramtypes", [libs_1.TranslateService,
            forms_1.FormBuilder])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map