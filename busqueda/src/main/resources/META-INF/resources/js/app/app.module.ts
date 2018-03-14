import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '../../libs/animations/src/animations';
import 'chart.js/dist/Chart.min'


import { InputTextModule, ButtonModule, RadioButtonModule,ChartModule, DropdownModule, CalendarModule, 
	CardModule, DialogModule} from 'primeng-wl/primeng';

import { TableModule } from 'primeng-wl/table';
import { MultiSelectModule } from 'primeng-wl/multiselect';  
import {InputMaskModule} from 'primeng-wl/inputmask';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		InputTextModule,
		ButtonModule,
		RadioButtonModule,
		FormsModule,
		ChartModule,
		DropdownModule,
		CalendarModule,
		CardModule,
		TableModule,
		DialogModule,
		MultiSelectModule,
		InputMaskModule

	],
	declarations: [AppComponent],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [],
	exports: []
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() { }
}