import { Component } from '@angular/core';
import { TranslateService } from '../../libs/libs';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {Message,SelectItem} from 'primeng-wl/api';

// Declare Liferay 
declare const Liferay: any;

@Component({
	selector: 'app',
	templateUrl: '/o/act-datos-compleja/js/app/app.html'
})
export class AppComponent {

	
	msgs: Message[] = [];

    userform: FormGroup;

    submitted: boolean;

	genders: SelectItem[];
		
    description: string;

	constructor(
		private translate: TranslateService,
		private fb: FormBuilder
	) {	
		//test 		
		console.log(Liferay.ThemeDisplay.getLanguageId());

		this.initTranslate();

	}

	ngOnInit() {
        this.userform = this.fb.group({
			'user': new FormControl(''),
			'userId': new FormControl(''),
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'description': new FormControl(''),
            'gender': new FormControl('', Validators.required)
        });

        this.genders = [];
        this.genders.push({label:'Select Gender', value:''});
        this.genders.push({label:'Male', value:'Male'});
		this.genders.push({label:'Female', value:'Female'});
				
		
    }

    onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
    }


	// resetForm(){
	// 	console.log("reset form");
	// }

	get diagnostic() { return JSON.stringify(this.userform.value); }
		
	// changeLanguage(language: string) {
	// 	this.translate.use(language);
	//   }

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