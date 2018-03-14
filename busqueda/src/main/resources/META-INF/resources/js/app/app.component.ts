import { Component } from '@angular/core';
import { DataTable } from 'primeng-wl/primeng';


@Component({
	selector: 'app',
	templateUrl: '/o/busqueda/js/app/app.html'
})
export class AppComponent {

	
	dateFrom: Date;
	dateTo: Date;
	
	valStatus: string;
	vinFilter:string;

	// people: Person[];
	// selectedPerson: Person;

	colors: ValuesDropdown[];
	selectedColor: ValuesDropdown;

	brands: ValuesDropdown[];
	selectedBrand: ValuesDropdown;

	displayDialog: boolean;

    cars: Car[];

    selectedCar: Car;

    newCar: boolean;

    car: Car;

    cols: any[];


	constructor() { 	}

	ngOnInit() {
        // this.people  = [ 
		// 	{"label": "Person1", "value": "1"}, 
		// 	{"label": "Person2", "value": "2"}, 
		// 	{"label": "Person3", "value": "3"}
			
		// ];

		this.colors = [ 
				{label: "Todos", value: null}, 
				{label: "Blanco", value: "Blanco"}, 
				{label: "Negro", value: "Negro"}, 
				{label: "Rojo", value: "Rojo"},
				{label: "Azul", value: "Azul"},
				{label: "Gris", value: "Gris"},
				{label: "Amarillo", value: "Amarillo"},
				{label: "Plata", value: "Plata"}				
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
				"vin":"a1653d4d",
				"status":"alta",
				"brand":"VW",
				"regDate": new Date("01/01/2018"),
				"color":"Blanco",
				"price":10000
			},
			{
				"vin":"ddeb9b10",
				"status":"alta",
				"brand":"Mercedes",
				"regDate": new Date("01/01/2015"),
				"color":"Blanco",
				"price":25000},
			{
				"vin":"d8ebe413",
				"status":"baja",
				"brand":"Jaguar",
				"regDate":new Date("01/01/2012"),
				"color":"Negro",
				"price":30000
			},
			{
				"vin":"aab227b7",
				"status":"alta",
				"brand":"Audi",
				"regDate":new Date("01/01/2011"),
				"color":"Rojo",
				"price":12000
			},
			{
				"vin":"631f7412",
				"status":"baja",
				"brand":"Volvo",
				"regDate":new Date("01/01/2010"),
				"color":"Rojo",
				"price":15500
			},
			{
				"vin":"7d2d22b0",
				"status":"alta",
				"brand":"VW",
				"regDate":new Date("01/01/2018"),
				"color":"Azul",
				"price":40000
			},
			{
				"vin":"50e900ca",
				"status":"baja",
				"brand":"Fiat",
				"regDate":new Date("01/01/2013"),
				"color":"Plata",
				"price":25000
			},
			{
				"vin":"4bbcd603",
				"status":"alta",
				"brand":"Renault",
				"regDate":new Date("01/01/2016"),
				"color":"Amarillo",
				"price":22000
			},
			{
				"vin":"70214c7e",
				"status":"alta",
				"brand":"Renault",
				"regDate":new Date("01/01/2010"),
				"color":"Negro",
				"price":19000
			},
			{
				"vin":"ec229a92",
				"status":"alta",
				"brand":"Audi",
				"regDate":new Date("01/01/2018"),
				"color":"Gris",
				"price":36000
			},
			{
				"vin":"1083ee40",
				"status":"alta",
				"brand":"VW",
				"regDate":new Date("01/01/2001"),
				"color":"Gris",
				"price":215000
			}
			,
			{
				"vin":"1088eee40",
				"status":"baja",
				"brand":"Audi",
				"regDate":new Date("01/01/1998"),
				"color":"Rojo",
				"price":215000
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
	}
	
	showDialogToAdd() {
        this.newCar = true;
        this.car = {};
        this.displayDialog = true;
    }

    save() {
        let cars = [...this.cars];
        if (this.newCar)
            cars.push(this.car);
        else
            cars[this.cars.indexOf(this.selectedCar)] = this.car;

        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        let index = this.cars.indexOf(this.selectedCar);
        this.cars = this.cars.filter((val, i) => i != index);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event:any) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Car): Car {
        let car = {};
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
	}
	
	filterRadioButton(dt:DataTable) {
					
		dt.filter(this.valStatus, 'status','equals');
        
    }
	
	filterDateFrom(dt:DataTable){
		console.log(this.dateFrom );
		dt.filter(this.dateFrom, 'regDate', 'gt');
	}

	filterDateTo(dt:DataTable){
		dt.filter(this.dateTo, 'regDate', 'lt');
	}

	clean(dt:DataTable){
		
		this.vinFilter = null;
		this.valStatus = null;
		this.dateFrom = null;
		this.dateTo = null;
		this.selectedBrand = null;
		this.selectedColor = null;

		dt.reset()
	}
	// search()
	// {
	// 	// método para filtrar el array de datos...

	// }

	// clean()
	// {

	// }
	
}


export interface ValuesDropdown {
    label?:string;
	value?:string;
}



export interface Car{
	vin?:string;
	brand?:string;
	regDate?:Date;
	color?:string;
	price?:number;
	status?:string;
}