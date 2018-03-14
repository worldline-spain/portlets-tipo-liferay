import { Component } from '@angular/core';
import { TranslateService } from '../../libs/libs';

import {TreeNode} from 'primeng-wl/api';
import { TreeTable } from 'primeng-wl/primeng';
import {Message,SelectItem} from 'primeng-wl/api';

@Component({
	selector: 'app',
	templateUrl: '/o/busqueda-arbol/js/app/app.html'
})
export class AppComponent {

	
	files: TreeNode[];
    textFilter: string;
    
    languages: SelectItem[];

	constructor(
		private translate: TranslateService
	) {
        this.initTranslate();
        
        this.languages = [];
		this.languages.push({label:'Spanish',value:'es'});
		this.languages.push({label:'English',value:'en'});

		this.files = [  
            {  
                "data":{  
                    "name":"Documents",
                    "size":"75kb",
                    "type":"Folder"
                },
                "children":[
                    {  
                        "data":{  
                            "name":"Work",
                            "size":"55kb",
                            "type":"Folder"
                        },
                        "children":[  
                            {  
                                "data":{  
                                    "name":"Expenses.doc",
                                    "size":"30kb",
                                    "type":"Document"
                                }
                            },
                            {  
                                "data":{  
                                    "name":"Resume.doc",
                                    "size":"25kb",
                                    "type":"Document"
                                }
                            }
                        ]
                    },
                    {  
                        "data":{  
                            "name":"Home",
                            "size":"20kb",
                            "type":"Folder"
                        },
                        "children":[  
                            {  
                                "data":{  
                                    "name":"Invoices",
                                    "size":"20kb",
                                    "type":"Text"
                                }
                            }
                        ]
                    }
                ]
            },
            {  
                "data":{  
                    "name":"Pictures",
                    "size":"150kb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"place.jpg",
                            "size":"90kb",
                            "type":"Picture"
                        }
                    },
                    {  
                        "data":{  
                            "name":"img.png",
                            "size":"30kb",
                            "type":"Picture"
                        }
                    },
                    {  
                        "data":{  
                            "name":"city.jpg",
                            "size":"30kb",
                            "type":"Picture"
                        }
                    }
                ]
            }
        ];
	}

	initTranslate() {
		// Set the default language for translation strings, and the current language.
		this.translate.setDefaultLang('es');

		if (this.translate.getBrowserLang() !== undefined) {
			this.translate.use(this.translate.getBrowserLang());
		} else {
			this.translate.use('es'); // Set your language here
		}
	}

	changeLanguage(language: string) {
		this.translate.use(language);
	  }


	filterTree(tt:TreeTable)
	{
		//tt
	}
}