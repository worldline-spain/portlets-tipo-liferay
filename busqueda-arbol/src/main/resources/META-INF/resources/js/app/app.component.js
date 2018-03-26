var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../services/shared.module"], function (require, exports, core_1, shared_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(translate, liferayService, applicationRef) {
            this.translate = translate;
            this.liferayService = liferayService;
            this.applicationRef = applicationRef;
            this.initTranslate();
            this.languages = [];
            this.languages.push({ label: 'Spanish', value: 'es_ES' });
            this.languages.push({ label: 'English', value: 'en_US' });
            this.files = [
                {
                    data: {
                        name: 'Documents',
                        size: '75kb',
                        type: 'Folder'
                    },
                    type: 'root',
                    children: [
                        {
                            data: {
                                'name': 'Work',
                                'size': '55kb',
                                'type': 'Folder'
                            },
                            children: [
                                {
                                    data: {
                                        name: 'Expenses.doc',
                                        size: '30kb',
                                        type: 'Document'
                                    }
                                },
                                {
                                    data: {
                                        name: 'Resume.doc',
                                        size: '25kb',
                                        type: 'Document'
                                    }
                                }
                            ]
                        },
                        {
                            data: {
                                name: 'Home',
                                size: '20kb',
                                type: 'Folder'
                            },
                            children: [
                                {
                                    data: {
                                        name: 'Invoices',
                                        size: '20kb',
                                        type: 'Text'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    data: {
                        name: 'Pictures',
                        size: '150kb',
                        type: 'Folder'
                    },
                    type: 'root',
                    children: [
                        {
                            data: {
                                name: 'place.jpg',
                                size: '90kb',
                                type: 'Picture'
                            }
                        },
                        {
                            data: {
                                name: 'img.png',
                                size: '30kb',
                                type: 'Picture'
                            }
                        },
                        {
                            data: {
                                name: 'city.jpg',
                                size: '30kb',
                                type: 'Picture'
                            }
                        }
                    ]
                }
            ];
            this.treefiltered = JSON.parse(JSON.stringify(this.files));
            /**
             * Liferay stops the propagation of the event.
             * We have to force change detection, so that component property values
             * that have changed get propagated to the DOM
             */
            this.applicationRef.tick();
        }
        AppComponent.prototype.initTranslate = function () {
            // Set the default language for translation strings, and the current language.
            this.translate.setDefaultLang(this.liferayService.getLanguageLiferay());
            // Set your language here
            this.translate.use(this.liferayService.getLanguageLiferay());
        };
        AppComponent.prototype.changeLanguage = function (language) {
            this.translate.use(language);
        };
        AppComponent.prototype.search = function () {
            var _this = this;
            this.treefiltered = [];
            if (this.treeSearch) {
                var treecopy = JSON.parse(JSON.stringify(this.files));
                treecopy.forEach(function (node) {
                    if (node.data.name.toLowerCase().includes(_this.treeSearch.toLowerCase())) {
                        _this.treefiltered.push(node);
                    }
                    else {
                        _this.searchRecursive(node, _this.treefiltered);
                    }
                });
            }
            else {
                this.treefiltered = JSON.parse(JSON.stringify(this.files));
            }
        };
        AppComponent.prototype.searchRecursive = function (node, treefiltered) {
            var _this = this;
            if (node.data.name.toLowerCase().includes(this.treeSearch.toLowerCase())) {
                //Base case-> Child with a match found 
                return node;
            }
            else {
                // Recursive case
                if (node.children) {
                    //Save children of the current parent
                    var children = node.children;
                    //Remove children from parent
                    node.children = [];
                    //for each child saved
                    children.forEach(function (nodeChildren) {
                        //If child found -> NodeTree, else
                        var childFound = _this.searchRecursive(nodeChildren, treefiltered);
                        if (childFound) {
                            // Push child into the parent
                            node.children.push(childFound);
                        }
                    });
                    // If node.type is root and the node has childen
                    if (node.type === "root" && node.children.length) {
                        //Push root node on the result array
                        treefiltered.push(node);
                        //If it is NOT root and the node has childen
                    }
                    else if (node.children.length) {
                        //return node to be allocated on the parent childen array
                        return node;
                    }
                }
                else {
                    // node without match with the user input
                    return;
                }
            }
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/busqueda-arbol/js/app/app.html'
        }),
        __metadata("design:paramtypes", [shared_module_1.TranslateService,
            shared_module_1.LiferayService,
            core_1.ApplicationRef])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map