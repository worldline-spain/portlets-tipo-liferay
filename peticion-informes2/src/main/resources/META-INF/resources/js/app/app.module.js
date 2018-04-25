var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "../../services/shared.module", "primeng-wl/primeng", "primeng-wl/table", "primeng-wl/multiselect", "primeng-wl/inputmask", "primeng-wl/panel", "primeng-wl/checkbox", "./app.component"], function (require, exports, core_1, platform_browser_1, forms_1, http_1, shared_module_1, primeng_1, table_1, multiselect_1, inputmask_1, panel_1, checkbox_1, app_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // The translate loader needs to know where to load i18n files
    // in Ionic's static asset pipeline.
    function HttpLoaderFactory(http) {
        return new shared_module_1.TranslateHttpLoader(http, './o/peticion-informes2/js/assets/i18n/locale-', '.json');
    }
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
                forms_1.FormsModule,
                http_1.HttpModule,
                shared_module_1.SharedModule.forRoot(),
                shared_module_1.BrowserAnimationsModule,
                primeng_1.InputTextModule,
                primeng_1.ButtonModule,
                primeng_1.RadioButtonModule,
                forms_1.FormsModule,
                primeng_1.ChartModule,
                primeng_1.DropdownModule,
                primeng_1.CalendarModule,
                primeng_1.CardModule,
                table_1.TableModule,
                primeng_1.DialogModule,
                multiselect_1.MultiSelectModule,
                inputmask_1.InputMaskModule,
                panel_1.PanelModule,
                checkbox_1.CheckboxModule,
                shared_module_1.TranslateModule.forRoot({
                    loader: {
                        provide: shared_module_1.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.Http]
                    }
                }),
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