var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent() {
        }
        AppComponent.prototype.ngOnInit = function () {
            // this.people  = [ 
            // 	{"label": "Person1", "value": "1"}, 
            // 	{"label": "Person2", "value": "2"}, 
            // 	{"label": "Person3", "value": "3"}
            // ];
            this.colors = [
                { label: "Todos", value: null },
                { label: "Blanco", value: "Blanco" },
                { label: "Negro", value: "Negro" },
                { label: "Rojo", value: "Rojo" },
                { label: "Azul", value: "Azul" },
                { label: "Gris", value: "Gris" },
                { label: "Amarillo", value: "Amarillo" },
                { label: "Plata", value: "Plata" }
            ];
            this.brands = [
                { label: 'Todas', value: null },
                { label: 'Audi', value: 'Audi' },
                { label: 'BMW', value: 'BMW' },
                { label: 'Fiat', value: 'Fiat' },
                { label: 'Honda', value: 'Honda' },
                { label: 'Jaguar', value: 'Jaguar' },
                { label: 'Mercedes', value: 'Mercedes' },
                { label: 'Renault', value: 'Renault' },
                { label: 'VW', value: 'VW' },
                { label: 'Volvo', value: 'Volvo' }
            ];
            this.cars = [
                {
                    "vin": "a1653d4d",
                    "status": "alta",
                    "brand": "VW",
                    "regDate": new Date("01/01/2018"),
                    "color": "Blanco",
                    "price": 10000
                },
                {
                    "vin": "ddeb9b10",
                    "status": "alta",
                    "brand": "Mercedes",
                    "regDate": new Date("01/01/2015"),
                    "color": "Blanco",
                    "price": 25000
                },
                {
                    "vin": "d8ebe413",
                    "status": "baja",
                    "brand": "Jaguar",
                    "regDate": new Date("01/01/2012"),
                    "color": "Negro",
                    "price": 30000
                },
                {
                    "vin": "aab227b7",
                    "status": "alta",
                    "brand": "Audi",
                    "regDate": new Date("01/01/2011"),
                    "color": "Rojo",
                    "price": 12000
                },
                {
                    "vin": "631f7412",
                    "status": "baja",
                    "brand": "Volvo",
                    "regDate": new Date("01/01/2010"),
                    "color": "Rojo",
                    "price": 15500
                },
                {
                    "vin": "7d2d22b0",
                    "status": "alta",
                    "brand": "VW",
                    "regDate": new Date("01/01/2018"),
                    "color": "Azul",
                    "price": 40000
                },
                {
                    "vin": "50e900ca",
                    "status": "baja",
                    "brand": "Fiat",
                    "regDate": new Date("01/01/2013"),
                    "color": "Plata",
                    "price": 25000
                },
                {
                    "vin": "4bbcd603",
                    "status": "alta",
                    "brand": "Renault",
                    "regDate": new Date("01/01/2016"),
                    "color": "Amarillo",
                    "price": 22000
                },
                {
                    "vin": "70214c7e",
                    "status": "alta",
                    "brand": "Renault",
                    "regDate": new Date("01/01/2010"),
                    "color": "Negro",
                    "price": 19000
                },
                {
                    "vin": "ec229a92",
                    "status": "alta",
                    "brand": "Audi",
                    "regDate": new Date("01/01/2018"),
                    "color": "Gris",
                    "price": 36000
                },
                {
                    "vin": "1083ee40",
                    "status": "alta",
                    "brand": "VW",
                    "regDate": new Date("01/01/2001"),
                    "color": "Gris",
                    "price": 215000
                },
                {
                    "vin": "1088eee40",
                    "status": "baja",
                    "brand": "Audi",
                    "regDate": new Date("01/01/1998"),
                    "color": "Rojo",
                    "price": 215000
                }
            ];
            // 	{"vin":"6e0da3ab","status":"alta","brand":"Volvo","regDate":"01/01/1987","color":"Amarillo","price":32000},
            // 	{"vin":"5aee636b","status":"alta","brand":"Jaguar","regDate":"01/01/1995","color":"Rojo","price":20000},
            // 	{"vin":"7cc43997","status":"alta","brand":"Jaguar","regDate":"01/01/1984","color":"Negro","price":14000},
            // 	{"vin":"88ec9f66","status":"baja","brand":"Honda","regDate":"01/01/1989","color":"Blanco","price":36000},
            // 	{"vin":"f5a4a5f5","status":"alta","brand":"BMW","regDate":"01/01/1986","color":"Azul","price":28000},
            // 	{"vin":"15b9a5c9","status":"alta","brand":"Mercedes","regDate":"01/01/1986","color":"Negro","price":14000},
            // 	{"vin":"f7e18d01","status":"alta","brand":"Mercedes","regDate":"01/01/1991","color":"Blanco","price":25000},
            // 	{"vin":"cec593d7","status":"alta","brand":"VW","regDate":"01/01/1992","color":"Negro","price":36000},
            // 	{"vin":"d5bac4f0","status":"baja","brand":"Renault","regDate":"01/01/2001","color":"Azul","price":25000},
            // 	{"vin":"56b527c8","status":"alta","brand":"Jaguar","regDate":"01/01/1990","color":"Amarillo","price":52000},
            // 	{"vin":"1ac011ff","status":"alta","brand":"Audi","regDate":"01/01/1966","color":"Negro","price":45000},
            // 	{"vin":"fc074185","status":"alta","brand":"BMW","regDate":"01/01/1962","color":"Rojo","price":54000},
            // 	{"vin":"606ba663","status":"alta","brand":"Honda","regDate":"01/01/1982","color":"Negro","price":22000},
            // 	{"vin":"d05060b8","status":"alta","brand":"Mercedes","regDate":"01/01/2003","color":"Azul","price":15000},
            // 	{"vin":"46e4bbe8","status":"alta","brand":"Mercedes","regDate":"01/01/1986","color":"Rojo","price":18000},
            // 	{"vin":"c29da0d7","status":"alta","brand":"BMW","regDate":"01/01/1983","color":"Blanco","price":32000},
            // 	{"vin":"24622f70","status":"alta","brand":"VW","regDate":"01/01/1973","color":"Negro","price":36000},
            // 	{"vin":"7f573d2c","status":"alta","brand":"Mercedes","regDate":"01/01/1991","color":"Negro","price":21000},
            // 	{"vin":"b69e6f5c","status":"alta","brand":"Jaguar","regDate":"01/01/1993","color":"Azul","price":16000}
            // ];
            this.cols = [
                { field: 'vin', header: 'Vin' },
                { field: 'regDate', header: 'Fecha Matrícula' },
                { field: 'brand', header: 'Marca' },
                { field: 'color', header: 'Color' },
                { field: 'status', header: 'Estado' },
            ];
        };
        AppComponent.prototype.showDialogToAdd = function () {
            this.newCar = true;
            this.car = {};
            this.displayDialog = true;
        };
        AppComponent.prototype.save = function () {
            var cars = this.cars.slice();
            if (this.newCar)
                cars.push(this.car);
            else
                cars[this.cars.indexOf(this.selectedCar)] = this.car;
            this.cars = cars;
            this.car = null;
            this.displayDialog = false;
        };
        AppComponent.prototype.delete = function () {
            var index = this.cars.indexOf(this.selectedCar);
            this.cars = this.cars.filter(function (val, i) { return i != index; });
            this.car = null;
            this.displayDialog = false;
        };
        AppComponent.prototype.onRowSelect = function (event) {
            this.newCar = false;
            this.car = this.cloneCar(event.data);
            this.displayDialog = true;
        };
        AppComponent.prototype.cloneCar = function (c) {
            var car = {};
            for (var prop in c) {
                car[prop] = c[prop];
            }
            return car;
        };
        AppComponent.prototype.filterRadioButton = function (dt) {
            dt.filter(this.valStatus, 'status', 'equals');
        };
        AppComponent.prototype.filterDateFrom = function (dt) {
            console.log(this.dateFrom);
            dt.filter(this.dateFrom, 'regDate', 'gt');
        };
        AppComponent.prototype.filterDateTo = function (dt) {
            dt.filter(this.dateTo, 'regDate', 'lt');
        };
        AppComponent.prototype.clean = function (dt) {
            this.vinFilter = null;
            this.valStatus = null;
            this.dateFrom = null;
            this.dateTo = null;
            this.selectedBrand = null;
            this.selectedColor = null;
            dt.reset();
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/busqueda/js/app/app.html'
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map