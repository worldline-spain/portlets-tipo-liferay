import { Component } from '@angular/core';
import { TranslateService, LiferayService } from '../services/shared.module';


@Component({
	selector: 'app',
	templateUrl: '/o/formulario-dinamico/js/app/app.html'
})
export class AppComponent {

  caption = 'Hello world!';
	data: any;
	values: string[];

	constructor(
		private translate: TranslateService,
		private liferayService: LiferayService
	) {
    this.data = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'My First dataset',
					backgroundColor: '#42A5F5',
					borderColor: '#1E88E5',
					data: [65, 59, 80, 81, 56, 55, 40]
				},
				{
					label: 'My Second dataset',
					backgroundColor: '#9CCC65',
					borderColor: '#7CB342',
					data: [28, 48, 40, 19, 86, 27, 90]
				}
			]
		}
    this.initTranslate();
	}

	initTranslate() {
		// Set the default language for translation strings, and the current language.
		this.translate.setDefaultLang(this.liferayService.getLanguageLiferay());

		// Set your language here
		this.translate.use(this.liferayService.getLanguageLiferay());
	}
}
