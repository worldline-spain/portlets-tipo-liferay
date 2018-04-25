var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../../services/shared.module"], function (require, exports, core_1, shared_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(translate, liferayService) {
            this.translate = translate;
            this.liferayService = liferayService;
            this.initTranslate();
            this.cols = [
                { field: 'reportType', header: 'reportType' },
                { field: 'numWorkers', header: 'numWorkers' },
                { field: 'numCasualties', header: 'numCasualties' },
                { field: 'numNewWorkers', header: 'numNewWorkers' },
                { field: 'tamDays', header: 'tamDays' },
                { field: 'realDays', header: 'realDays' },
                { field: 'incidence', header: 'incidence' },
                { field: 'jpt', header: 'jpt' },
                { field: 'absenteeismRate', header: 'absenteeismRate' },
                { field: 'companyCost', header: 'companyCost' },
                { field: 'workerCost', header: 'workerCost' },
            ];
        }
        AppComponent.prototype.ngOnInit = function () {
            this.autonomies = [
                { label: "Todas", value: null },
                { label: "Autonomía 1", value: "1" },
                { label: "Autonomía 2", value: "2" },
                { label: "Autonomía 3", value: "3" },
                { label: "Autonomía 4", value: "4" },
                { label: "Autonomía 5", value: "5" }
            ];
            this.provinces = [
                { label: "Todas", value: null },
                { label: "Provincia 1", value: "1" },
                { label: "Provincia 2", value: "2" },
                { label: "Provincia 3", value: "3" },
                { label: "Provincia 4", value: "4" },
                { label: "Provincia 5", value: "5" }
            ];
            this.periods = [
                { label: "Todas", value: null },
                { label: "Período 1", value: "1" },
                { label: "Período 2", value: "2" },
                { label: "Período 3", value: "3" },
                { label: "Período 4", value: "4" },
                { label: "Período 5", value: "5" }
            ];
            this.cifs = [
                { label: "Todas", value: null },
                { label: "Cif 1", value: "1" },
                { label: "Cif 2", value: "2" },
                { label: "Cif 3", value: "3" },
                { label: "Cif 4", value: "4" },
                { label: "Cif 5", value: "5" }
            ];
            this.data = [
                {
                    "reportType": "febrero",
                    "numWorkers": 1000,
                    "numCasualties": 10,
                    "numNewWorkers": 5,
                    "tamDays": 8,
                    "realDays": 20,
                    "incidence": 3,
                    "jpt": 7,
                    "absenteeismRate": 2,
                    "companyCost": 5000,
                    "workerCost": 1000
                },
                {
                    "reportType": "febrero",
                    "numWorkers": 1000,
                    "numCasualties": 10,
                    "numNewWorkers": 5,
                    "tamDays": 8,
                    "realDays": 20,
                    "incidence": 3,
                    "jpt": 7,
                    "absenteeismRate": 2,
                    "companyCost": 5000,
                    "workerCost": 1000
                },
                {
                    "reportType": "marzo",
                    "numWorkers": 1000,
                    "numCasualties": 10,
                    "numNewWorkers": 5,
                    "tamDays": 8,
                    "realDays": 20,
                    "incidence": 3,
                    "jpt": 7,
                    "absenteeismRate": 2,
                    "companyCost": 5000,
                    "workerCost": 1000
                }
            ];
        };
        AppComponent.prototype.clean = function (dt) {
            // this.vinFilter = null;
            // this.valStatus = null;
            // this.dateFrom = null;
            // this.dateTo = null;
            // this.selectedBrand = null;
            // this.selectedColor = null;
            // this.tableFiltered = Object.assign([], this.cars);
            // dt.reset()
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
            templateUrl: '/o/peticion-informes2/js/app/app.html'
        }),
        __metadata("design:paramtypes", [shared_module_1.TranslateService,
            shared_module_1.LiferayService])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map