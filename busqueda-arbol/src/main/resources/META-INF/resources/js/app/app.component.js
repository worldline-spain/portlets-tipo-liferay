var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../../libs/libs"], function (require, exports, core_1, libs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(translate) {
            this.translate = translate;
            this.initTranslate();
            this.languages = [];
            this.languages.push({ label: 'Spanish', value: 'es' });
            this.languages.push({ label: 'English', value: 'en' });
            this.files = [
                {
                    "data": {
                        "name": "Documents",
                        "size": "75kb",
                        "type": "Folder"
                    },
                    "children": [
                        {
                            "data": {
                                "name": "Work",
                                "size": "55kb",
                                "type": "Folder"
                            },
                            "children": [
                                {
                                    "data": {
                                        "name": "Expenses.doc",
                                        "size": "30kb",
                                        "type": "Document"
                                    }
                                },
                                {
                                    "data": {
                                        "name": "Resume.doc",
                                        "size": "25kb",
                                        "type": "Document"
                                    }
                                }
                            ]
                        },
                        {
                            "data": {
                                "name": "Home",
                                "size": "20kb",
                                "type": "Folder"
                            },
                            "children": [
                                {
                                    "data": {
                                        "name": "Invoices",
                                        "size": "20kb",
                                        "type": "Text"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "data": {
                        "name": "Pictures",
                        "size": "150kb",
                        "type": "Folder"
                    },
                    "children": [
                        {
                            "data": {
                                "name": "place.jpg",
                                "size": "90kb",
                                "type": "Picture"
                            }
                        },
                        {
                            "data": {
                                "name": "img.png",
                                "size": "30kb",
                                "type": "Picture"
                            }
                        },
                        {
                            "data": {
                                "name": "city.jpg",
                                "size": "30kb",
                                "type": "Picture"
                            }
                        }
                    ]
                }
            ];
        }
        AppComponent.prototype.initTranslate = function () {
            // Set the default language for translation strings, and the current language.
            this.translate.setDefaultLang('es');
            if (this.translate.getBrowserLang() !== undefined) {
                this.translate.use(this.translate.getBrowserLang());
            }
            else {
                this.translate.use('es'); // Set your language here
            }
        };
        AppComponent.prototype.changeLanguage = function (language) {
            this.translate.use(language);
        };
        AppComponent.prototype.filterTree = function (tt) {
            //tt
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/busqueda-arbol/js/app/app.html'
        }),
        __metadata("design:paramtypes", [libs_1.TranslateService])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map