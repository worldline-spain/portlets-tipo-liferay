var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "primeng-wl/primeng", "primeng-wl/fileupload", "../../libs/libs", "quill", "./app.component", "chart.js/dist/Chart.min"], function (require, exports, core_1, platform_browser_1, forms_1, http_1, primeng_1, fileupload_1, libs_1, Quill, app_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window['Quill'] = Quill;
    // The translate loader needs to know where to load i18n files
    // in Ionic's static asset pipeline.
    function HttpLoaderFactory(http) {
        return new libs_1.TranslateHttpLoader(http, './o/carga-datos/js/assets/i18n/locale-', '.json');
    }
    exports.HttpLoaderFactory = HttpLoaderFactory;
    var AppModule = (function () {
        function AppModule() {
        }
        // Avoid bootstraping any component statically because we need to attach to
        // the portlet's DOM, which is different for each portlet instance and,
        // thus, cannot be determined until the page is rendered (during runtime).
        AppModule.prototype.ngDoBootstrap = function () { };
        return AppModule;
    }());
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                libs_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                primeng_1.GrowlModule,
                primeng_1.PanelModule,
                primeng_1.DropdownModule,
                primeng_1.InputTextModule,
                primeng_1.InputTextareaModule,
                primeng_1.ButtonModule,
                primeng_1.CardModule,
                fileupload_1.FileUploadModule,
                libs_1.TranslateModule.forRoot({
                    loader: {
                        provide: libs_1.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.Http]
                    }
                })
            ],
            declarations: [app_component_1.AppComponent],
            entryComponents: [app_component_1.AppComponent],
            bootstrap: [],
            providers: [],
            exports: []
        })
    ], AppModule);
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map