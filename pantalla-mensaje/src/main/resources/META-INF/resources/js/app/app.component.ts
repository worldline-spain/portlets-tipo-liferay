import { Component } from '@angular/core';
import { TranslateService } from '../../libs/libs';

// Declare Liferay 
declare const Liferay: any;

@Component({
	selector: 'app',
	templateUrl: '/o/pantalla-mensaje/js/app/app.html'
})
export class AppComponent {

	caption = 'Hello world!';

	constructor(
		private translate: TranslateService
	) {
		this.initTranslate();
	}

	initTranslate() {
		// Set the default language for translation strings, and the current language.
		//this.translate.setDefaultLang('es');
		this.translate.setDefaultLang(Liferay.ThemeDisplay.getLanguageId());

		if (Liferay.ThemeDisplay.getLanguageId() !== undefined) {
			this.translate.use(Liferay.ThemeDisplay.getLanguageId());
		} else {
			this.translate.use('es_ES'); // Set your language here
		}
	}
}