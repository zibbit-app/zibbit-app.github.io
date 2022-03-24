(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var router_1 = __webpack_require__(186);

var AppRemoteManager_1 = __webpack_require__(523);

var AppComponent =
/** @class */
function () {
  function AppComponent(appRemote, zone, router) {
    var _this = this;

    this.zone = zone;
    this.router = router;
    this.isBusy = false;
    this.notices = [];
    this.showHeader = true;
    this.showFooter = true;
    appRemote.setRemotable(this);
    this.router.events.subscribe(function (event) {
      if (event instanceof router_1.NavigationEnd) {
        var isHomePage = event['url'] == '/home' || event['url'] == '/';
        _this.showHeader = !isHomePage; //this.showFooter = !isHomePage;
      }
    });
  }

  AppComponent.prototype.setBusyIndicator = function (isVisible) {
    console.log("in set busy");
    this.isBusy = isVisible;
  };

  AppComponent.prototype.setNotices = function (notices) {
    var _a;

    console.log("in notices");

    (_a = this.notices).push.apply(_a, notices);
  };

  AppComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "app-ui",
    template: __webpack_require__(524),
    styles: [__webpack_require__(525)]
  }), __metadata("design:paramtypes", [AppRemoteManager_1.AppRemoteManager, core_1.NgZone, router_1.Router])], AppComponent);
  return AppComponent;
}();

exports.AppComponent = AppComponent;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(50);

var DownloadsComponent =
/** @class */
function () {
  function DownloadsComponent(prodInfoService) {
    this.prodInfoService = prodInfoService;
  }

  Object.defineProperty(DownloadsComponent.prototype, "latest", {
    get: function () {
      return this.installers[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DownloadsComponent.prototype, "images", {
    get: function () {
      var imgs = this.prodInfoService.imageUrlDict;
      return imgs;
    },
    enumerable: true,
    configurable: true
  });

  DownloadsComponent.prototype.ngOnInit = function () {
    this.setDownloads(); //this.setCards();
  };

  DownloadsComponent.prototype.setDownloads = function () {
    this.installers = this.prodInfoService.getInstallers();
  };

  DownloadsComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "downloads-page-ui",
    template: __webpack_require__(556),
    styles: [__webpack_require__(557)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], DownloadsComponent);
  return DownloadsComponent;
}();

exports.DownloadsComponent = DownloadsComponent;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var AppConfig_1 = __webpack_require__(254);

var platform_browser_1 = __webpack_require__(58);

var ProductInfoService_1 = __webpack_require__(50);

var HomeComponent =
/** @class */
function () {
  function HomeComponent(prodInfoService, _sanitizer) {
    this.prodInfoService = prodInfoService;
    this._sanitizer = _sanitizer;
    this.exhibits = ["frog", "robot", "waterlily"];
    this.productImgUrl = this.prodInfoService.GetProductImage();
  }

  Object.defineProperty(HomeComponent.prototype, "images", {
    get: function () {
      var imgs = this.prodInfoService.imageUrlDict;
      return imgs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HomeComponent.prototype, "demoLink", {
    get: function () {
      var link = this.prodInfoService.demoLink;
      return this._sanitizer.bypassSecurityTrustResourceUrl(link);
    },
    enumerable: true,
    configurable: true
  });

  HomeComponent.prototype.menuClickHandler = function () {
    var menu = document.getElementById('collapseMobileMenu');
    menu.classList.remove("show");
  };

  HomeComponent.prototype.style = function () {
    var test = "linear-gradient(to left, rgba(245, 246, 252, 0.1), rgba(245, 246, 252, 0.9)),url(\"" + this.productImg() + "\")";
    var style = {
      'background-image': test //'background-image': `url(${this.productImg()})`
      // 'background-image': 'url("https://getsatisfaction.com/corp/img/product/five_obstacles.png"), linear-gradient(red, yellow)',

    };
    return style;
  };

  HomeComponent.prototype.scroll = function (id) {
    var el = document.getElementById(id);
    el.scrollIntoView({
      behavior: "smooth"
    });
  };

  HomeComponent.prototype.productImg = function () {
    var test = this.prodInfoService.GetProductImage();
    return test;
  };

  HomeComponent.prototype.ngOnInit = function () {
    this.setImageUrls();
    this.setCards();
    this.config = new AppConfig_1.AppConfig();
    this.imageDir = this.config.getUploadsPath() + '/main/word-icon.svg';
    this.benefits = this.prodInfoService.getBenefits();
    this.summaryBenefit = this.prodInfoService.getSummaryBenefit();
    this.pdfUrl = this.config.getUploadsPath() + '/samplePdfs/sample_affidavit.pdf';
  };

  HomeComponent.prototype.setImageUrls = function () {
    this.slideUrls = this.prodInfoService.getImageUrls();
  };

  HomeComponent.prototype.setCards = function () {
    this.cards = this.prodInfoService.getCards();
  };

  HomeComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "home-page-ui",
    template: __webpack_require__(565),
    styles: [__webpack_require__(566)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService, platform_browser_1.DomSanitizer])], HomeComponent);
  return HomeComponent;
}();

exports.HomeComponent = HomeComponent;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(50);

var LearnComponent =
/** @class */
function () {
  function LearnComponent(prodInfoService) {
    var _this = this;

    this.prodInfoService = prodInfoService;
    this.chapters = [];
    this.images = prodInfoService.imageUrlDict;
    prodInfoService.tutorial.forEach(function (steps, key) {
      var chapter = {
        title: key,
        steps: steps
      };

      _this.chapters.push(chapter);
    }); // this.imgAddExhibits = prodInfoService.getImage('get-started.PNG');
    // this.imgZibbitBar = prodInfoService.getImage('get-started.PNG');
  }

  LearnComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "learn-page-ui",
    template: __webpack_require__(568),
    styles: [__webpack_require__(569)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], LearnComponent);
  return LearnComponent;
}();

exports.LearnComponent = LearnComponent;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var IocRegistrations_1 = __webpack_require__(519);

var awilix_1 = __webpack_require__(249);

var GateKeeperClient_1 = __webpack_require__(255);

var Bootstrapper =
/** @class */
function () {
  function Bootstrapper() {}

  Bootstrapper.initialize = function () {
    this.container = awilix_1.createContainer();
    this.components = [];
    IocRegistrations_1.IocRegistrations.loadServices(this.container);
    this.components = IocRegistrations_1.IocRegistrations.loadComponents(this.container);
  };

  Bootstrapper.loadAsyncServices = function (injector) {
    return Promise.resolve().then(function () {
      var client = injector.get(GateKeeperClient_1.GateKeeperClient);
      return client.Connect();
    });
  };

  Bootstrapper.getInstanceByString = function (typeName) {
    arguments;
    var service = this.container.resolve('ProductInfoService');
    return;
  };

  Bootstrapper.getInstanceByType = function (typeArg) {
    var typeName = typeArg.name;
    var service = this.container.resolve(typeName);
    return service;
  };

  return Bootstrapper;
}();

exports.Bootstrapper = Bootstrapper;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var Card_1 = __webpack_require__(251);

var CardComponent =
/** @class */
function () {
  function CardComponent() {}

  __decorate([core_1.Input(), __metadata("design:type", Card_1.Card)], CardComponent.prototype, "card", void 0);

  CardComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "card-ui",
    template: __webpack_require__(527),
    styles: [__webpack_require__(528)]
  })], CardComponent);
  return CardComponent;
}();

exports.CardComponent = CardComponent;

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Card =
/** @class */
function () {
  function Card(title, description, route, imgUrl) {
    if (imgUrl === void 0) {
      imgUrl = '';
    }

    this.route = "";
    this.imageUrl = "";
    this.title = "";
    this.description = "";
    this.title = title;
    this.description = description;
    this.imageUrl = imgUrl;
    this.route = route;
  }

  return Card;
}();

exports.Card = Card;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var CarouselComponent =
/** @class */
function () {
  function CarouselComponent() {
    var _this = this; // new Card('Learn', 'test description', '/learn'),
    // new Card('Download', 'test description2', '/downloads')


    this.slides = function () {
      return _this.getSlides(_this.slideUrls);
    };
  }

  CarouselComponent.prototype.getSlides = function (urls) {
    var slides = [];
    urls.forEach(function (val, index) {
      var activeClass = index === 0 ? 'active' : '';
      var className = "carousel-item " + activeClass;
      var slide = {
        class: className,
        alt: index,
        src: val
      };
      slides.push(slide);
    });
    return slides;
  };

  __decorate([core_1.Input(), __metadata("design:type", Array)], CarouselComponent.prototype, "slideUrls", void 0);

  CarouselComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "carousel-ui",
    template: __webpack_require__(530),
    styles: [__webpack_require__(531)]
  })], CarouselComponent);
  return CarouselComponent;
}();

exports.CarouselComponent = CarouselComponent;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(50);

var DocLinesComponent =
/** @class */
function () {
  function DocLinesComponent(prodInfoService) {
    this.prodInfoService = prodInfoService;
    this.showTabs = true;
    this.showRibbon = true;
    this.iconUrls = [];
  }

  __decorate([core_1.Input(), __metadata("design:type", Boolean)], DocLinesComponent.prototype, "showTabs", void 0);

  __decorate([core_1.Input(), __metadata("design:type", Boolean)], DocLinesComponent.prototype, "showRibbon", void 0);

  __decorate([core_1.Input(), __metadata("design:type", String)], DocLinesComponent.prototype, "selectedIconUrl", void 0);

  __decorate([core_1.Input(), __metadata("design:type", Number)], DocLinesComponent.prototype, "selectedIconPosition", void 0);

  DocLinesComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "doc-lines-ui",
    template: __webpack_require__(553),
    styles: [__webpack_require__(554)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], DocLinesComponent);
  return DocLinesComponent;
}();

exports.DocLinesComponent = DocLinesComponent;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //import { Injectable } from '@angular/core';

Object.defineProperty(exports, "__esModule", {
  value: true
}); // @Injectable({
//   providedIn: 'root',
// })

var AppConfig =
/** @class */
function () {
  function AppConfig() {
    this.imagesPath = "/uploads";
  }

  AppConfig.prototype.getUploadsPath = function () {
    return this.imagesPath;
  };

  AppConfig.prototype.getImageUrl = function (fileName) {
    var imagesPath = this.getUploadsPath();
    var fullpath = imagesPath + '/' + fileName;
    return fullpath;
  };

  return AppConfig;
}();

exports.AppConfig = AppConfig;

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var axios_1 = __webpack_require__(533);

var core_1 = __webpack_require__(1);

var GateKeeperClient =
/** @class */
function () {
  function GateKeeperClient() {
    this.queryUrl = ""; //this.baseUrl = "http://localhost:61011/";

    this.baseUrl = 'https://evanapps-connectionmanager.azurewebsites.net/';
    this.dispatchQuery.bind(this);
  }

  GateKeeperClient.prototype.Connect = function () {
    var _this = this;

    var url = this.baseUrl + "/api/connections";
    return axios_1.default.get(url).then(function (response) {
      var connections = response.data;
      return connections;
    }).then(function (connections) {
      _this.queryUrl = connections.queryServiceUri;
      _this.routingKey = connections.clientRoutingKey.toString();
      _this.customHeaders = _this.getCustomHeaders();
    });
  };

  GateKeeperClient.prototype.getCustomHeaders = function () {
    var headers = {
      "eventRoutingKey": this.routingKey,
      "assembly-name": "MacroManagerGateKeeper.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
    };
    return headers;
  };

  GateKeeperClient.prototype.dispatchQuery = function (queryName, query) {
    var _this = this;

    if (query === void 0) {
      query = {};
    }

    var connectPromise = this.queryUrl == "" ? this.Connect() : Promise.resolve();
    return connectPromise.then(function () {
      var url = _this.queryUrl + "/" + queryName;
      return axios_1.default.post(url, query, {
        headers: _this.customHeaders
      });
    }).then(function (response) {
      return response.data;
    });
  };

  GateKeeperClient = __decorate([core_1.Injectable({
    providedIn: 'root'
  }), __metadata("design:paramtypes", [])], GateKeeperClient);
  return GateKeeperClient;
}();

exports.GateKeeperClient = GateKeeperClient;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); //import {Customer} from '../models/Customer'

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(50);

var FooterComponent =
/** @class */
function () {
  function FooterComponent(prodInfoService) {
    this.prodInfoService = prodInfoService;
  }

  FooterComponent.prototype.ngOnInit = function () {
    this.currentYear = new Date().getFullYear().toString();
    this.setProps(); //this.setCards();
  };

  FooterComponent.prototype.setProps = function () {
    this.logoUrl = this.prodInfoService.getLogoUrl();
    this.email = this.prodInfoService.getEmail();
  };

  FooterComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "footer-ui",
    template: __webpack_require__(559),
    styles: [__webpack_require__(560)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], FooterComponent);
  return FooterComponent;
}();

exports.FooterComponent = FooterComponent;

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); //import {Customer} from '../models/Customer'

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(50);

var HeaderComponent =
/** @class */
function () {
  function HeaderComponent(prodInfoService) {
    this.prodInfoService = prodInfoService;
    this.isMobileMenuVisibility = false;
    this.hideLogo = false;
  }

  Object.defineProperty(HeaderComponent.prototype, "mobileWrapperClass", {
    get: function () {
      var strClass = "btn-menu btn btn-primary " + (this.isMobileMenuVisibility ? "d-block" : "d-block d-md-none");
      return strClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HeaderComponent.prototype, "desktopWrapperClass", {
    get: function () {
      var strClass = "fullscreen-menu-wrapper " + (this.isMobileMenuVisibility ? "d-none" : "d-none d-md-block");
      return strClass;
    },
    enumerable: true,
    configurable: true
  });

  HeaderComponent.prototype.menuClickHandler = function () {
    var menu = document.getElementById('collapseMobileMenu');
    menu.classList.remove("show");
  };

  HeaderComponent.prototype.ngOnInit = function () {
    this.setLogo();
  };

  HeaderComponent.prototype.setLogo = function () {
    this.logoUrl = this.prodInfoService.getLogoUrl();
  };

  __decorate([core_1.Input(), __metadata("design:type", Boolean)], HeaderComponent.prototype, "isMobileMenuVisibility", void 0);

  __decorate([core_1.Input(), __metadata("design:type", Boolean)], HeaderComponent.prototype, "hideLogo", void 0);

  HeaderComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "header-ui",
    template: __webpack_require__(562),
    styles: [__webpack_require__(563)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], HeaderComponent);
  return HeaderComponent;
}();

exports.HeaderComponent = HeaderComponent;

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(50);

var LogoComponent =
/** @class */
function () {
  function LogoComponent(prodInfoService) {
    this.prodInfoService = prodInfoService;
    this.type = ProductInfoService_1.LogoType.Normal;
    this.hideText = false;
  }

  Object.defineProperty(LogoComponent.prototype, "logoUrl", {
    get: function () {
      return this.prodInfoService.getLogoUrl(this.type);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LogoComponent.prototype, "ShowText", {
    get: function () {
      return !this.hideText && this.type !== ProductInfoService_1.LogoType.WithText;
    },
    enumerable: true,
    configurable: true
  });

  __decorate([core_1.Input(), __metadata("design:type", Number)], LogoComponent.prototype, "type", void 0);

  __decorate([core_1.Input(), __metadata("design:type", Boolean)], LogoComponent.prototype, "hideText", void 0);

  LogoComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "logo-ui",
    template: __webpack_require__(571),
    styles: [__webpack_require__(572)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], LogoComponent);
  return LogoComponent;
}();

exports.LogoComponent = LogoComponent;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); //import {Customer} from '../models/Customer'

var core_1 = __webpack_require__(1);

var MenuComponent =
/** @class */
function () {
  function MenuComponent() {
    this.navigationEvent = new core_1.EventEmitter();
  }

  MenuComponent.prototype.notifyNavigationOccured = function (event) {
    var destination = event.target.text;
    this.navigationEvent.emit(destination);
  };

  __decorate([core_1.Output(), __metadata("design:type", Object)], MenuComponent.prototype, "navigationEvent", void 0);

  MenuComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "menu-ui",
    template: __webpack_require__(574),
    styles: [__webpack_require__(575)]
  })], MenuComponent);
  return MenuComponent;
}();

exports.MenuComponent = MenuComponent;

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var Notice_1 = __webpack_require__(577);

var NoticeBarComponent =
/** @class */
function () {
  function NoticeBarComponent() {
    this.closeNoticeEvent = new core_1.EventEmitter();
  }

  NoticeBarComponent.prototype.ngOnInit = function () {// this.notice = new Notice("tes")
  };

  NoticeBarComponent.prototype.closeClickHandler = function (e) {
    console.log("exit clicked");
    this.closeNoticeEvent.emit("emitted");
  };

  __decorate([core_1.Input(), __metadata("design:type", Notice_1.Notice)], NoticeBarComponent.prototype, "notice", void 0);

  __decorate([core_1.Output(), __metadata("design:type", Object)], NoticeBarComponent.prototype, "closeNoticeEvent", void 0);

  NoticeBarComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "noticeBar-ui",
    template: __webpack_require__(578),
    styles: [__webpack_require__(579)]
  })], NoticeBarComponent);
  return NoticeBarComponent;
}();

exports.NoticeBarComponent = NoticeBarComponent;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var PageWrapperComponent =
/** @class */
function () {
  function PageWrapperComponent() {
    this.isBusy = false;
  }

  __decorate([core_1.Input(), __metadata("design:type", Boolean)], PageWrapperComponent.prototype, "isBusy", void 0);

  __decorate([core_1.Input(), __metadata("design:type", Array)], PageWrapperComponent.prototype, "notices", void 0);

  PageWrapperComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "pageWrapper-ui",
    template: __webpack_require__(581),
    styles: [__webpack_require__(582)]
  })], PageWrapperComponent);
  return PageWrapperComponent;
}();

exports.PageWrapperComponent = PageWrapperComponent;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(50);

var RibbonComponent =
/** @class */
function () {
  function RibbonComponent(prodInfoService) {
    this.prodInfoService = prodInfoService;
    this.docTitle = "";
    this.showTabs = true;
    this.showRibbon = true;
    this.iconUrls = [];
    var anyIcon = prodInfoService.imageUrlDict.get('icon-folder');
    this.selectedIconPosition = 1;
    this.selectedIconUrl = anyIcon; // var imgs: string[] = [];

    for (var i = 0; i < 4; i++) {
      this.iconUrls.push(anyIcon);
    }
  }

  RibbonComponent.prototype.ngOnChanges = function () {
    var imgs = this.iconUrls;
    imgs[this.selectedIconPosition] = this.selectedIconUrl;
    this.iconUrls = imgs;
  };

  __decorate([core_1.Input(), __metadata("design:type", String)], RibbonComponent.prototype, "docTitle", void 0);

  __decorate([core_1.Input(), __metadata("design:type", Boolean)], RibbonComponent.prototype, "showTabs", void 0);

  __decorate([core_1.Input(), __metadata("design:type", Boolean)], RibbonComponent.prototype, "showRibbon", void 0);

  __decorate([core_1.Input(), __metadata("design:type", String)], RibbonComponent.prototype, "selectedIconUrl", void 0);

  __decorate([core_1.Input(), __metadata("design:type", Number)], RibbonComponent.prototype, "selectedIconPosition", void 0);

  RibbonComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "ribbon-ui",
    template: __webpack_require__(584),
    styles: [__webpack_require__(585)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], RibbonComponent);
  return RibbonComponent;
}();

exports.RibbonComponent = RibbonComponent;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(50); // import {Card} from '../models/Card'


var SplashscreenComponent =
/** @class */
function () {
  function SplashscreenComponent(productInfoService) {
    this.size = "large";
    this.displayType = "block";
    this.prodInfoService = productInfoService;
  }

  SplashscreenComponent.prototype.ngOnInit = function () {
    this.setSpinnerUrl();
  }; //   @Input()
  //   set isVisible(isVisible: boolean) {
  //     console.log(isVisible);
  //     //this.setSplashscreenVisibility(isVisible);
  //   }


  SplashscreenComponent.prototype.setSpinnerUrl = function () {
    this.spinnerImgUrl = this.prodInfoService.getSpinnerUrl();
  };

  __decorate([core_1.Input(), __metadata("design:type", String)], SplashscreenComponent.prototype, "size", void 0);

  __decorate([core_1.Input(), __metadata("design:type", String)], SplashscreenComponent.prototype, "displayType", void 0);

  SplashscreenComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "splashscreen-ui",
    template: __webpack_require__(587),
    styles: [__webpack_require__(588)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], SplashscreenComponent);
  return SplashscreenComponent;
}();

exports.SplashscreenComponent = SplashscreenComponent;

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(190);

__webpack_require__(476);

__webpack_require__(227);

var Bootstrapper_1 = __webpack_require__(247);

var core_1 = __webpack_require__(1);

if (true) {
  core_1.enableProdMode();
}

Bootstrapper_1.Bootstrapper.initialize();

var platform_browser_dynamic_1 = __webpack_require__(228);

var MainModuleLibrary_1 = __webpack_require__(591); // var service = Bootstrapper.getInstanceByType(ProductInfoService);


var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(MainModuleLibrary_1.MainModuleLibrary);

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var AppConfig_1 = __webpack_require__(254);

var GateKeeperClient_1 = __webpack_require__(255);

var Card_1 = __webpack_require__(251);

var Installer_1 = __webpack_require__(550);

var Benefit_1 = __webpack_require__(551);

var TutorialStep_1 = __webpack_require__(552);

var LogoType;

(function (LogoType) {
  LogoType[LogoType["Normal"] = 0] = "Normal";
  LogoType[LogoType["Light"] = 1] = "Light";
  LogoType[LogoType["Dark"] = 2] = "Dark";
  LogoType[LogoType["Transparent"] = 3] = "Transparent";
  LogoType[LogoType["WithText"] = 4] = "WithText";
})(LogoType = exports.LogoType || (exports.LogoType = {}));

var ProductInfoService =
/** @class */
function () {
  function ProductInfoService(client) {
    this.gateKeeperClient = client;
    this.config = new AppConfig_1.AppConfig();
    this.productName = "Zibbit";
    this.email = "zibbit.info@gmail.com";
    this.videoLink = "https://www.youtube.com/embed/kbpVxiZWLMU";
    this.imageUrls = this.initializeImages();
    this.cards = this.initializeCards();
    this.installers = this.initializeInstallers();
  }

  Object.defineProperty(ProductInfoService.prototype, "demoLink", {
    get: function () {
      return this.videoLink;
    },
    enumerable: true,
    configurable: true
  });

  ProductInfoService.prototype.getSummaryBenefit = function () {
    var exhibitBen = new Benefit_1.Benefit("Summary"); //exhibitBen.icon = "far fa-folder";

    exhibitBen.items.push("Easy to use");
    exhibitBen.items.push("Customizable");
    exhibitBen.items.push("Data Privacy");
    return exhibitBen;
  };

  ProductInfoService.prototype.getBenefits = function () {
    var benefits = []; // var exhibitBen = new Benefit("Manage Exhibits");
    // exhibitBen.items.push("Add, remove, and re-order exhibits");
    // exhibitBen.items.push("Insert references to exhibits");
    // exhibitBen.items.push("Style references");

    var exhibitBen = new Benefit_1.Benefit("Exhibits");
    exhibitBen.icon = "far fa-folder";
    exhibitBen.items.push("Add, remove, and re-order");
    exhibitBen.items.push("Supports pdf and docx files");
    exhibitBen.items.push("Document preview");
    var refBen = new Benefit_1.Benefit("References");
    refBen.icon = "fas fa-link";
    refBen.items.push("Customize labels");
    refBen.items.push("Auto update");
    var publishBen = new Benefit_1.Benefit("PDF");
    publishBen.icon = "far fa-file-pdf";
    publishBen.items.push("Appendix of exhibits");
    publishBen.items.push("Hyperlinked exhibit references");
    publishBen.items.push("Bookmarks");
    var templateBen = new Benefit_1.Benefit("Templates");
    templateBen.icon = "fas fa-toolbox";
    templateBen.items.push("Affidavit");
    templateBen.items.push("Custom templates");
    templateBen.items.push("Dynamic properties");
    benefits.push(exhibitBen, refBen, publishBen, templateBen);
    return benefits;
  };

  ProductInfoService.prototype.getInstallers = function () {
    return this.installers;
  };

  ProductInfoService.prototype.getEmail = function () {
    return this.email;
  };

  ProductInfoService.prototype.getLogoUrl = function (logoType) {
    if (logoType === void 0) {
      logoType = LogoType.Normal;
    }

    var base = this.config.getUploadsPath() + '/main/';

    switch (logoType) {
      case LogoType.Dark:
        return base + 'Zibbit_Logo_Dark.svg';

      case LogoType.Transparent:
        return base + 'Zibbit_Logo_Trans.svg';

      case LogoType.WithText:
        return base + 'Zibbit_Logo_Stacked_Horizontal.svg';

      default:
        return base + 'Zibbit_Logo.svg';
    }
  };

  ProductInfoService.prototype.getSpinnerUrl = function () {
    return this.config.getUploadsPath() + '/main/spinner-circle.gif';
  };

  ProductInfoService.prototype.getInstaller = function (title, version) {
    var downloadsPath = this.config.getUploadsPath() + '/installers/';
    var url = downloadsPath + (title + "_v" + version + ".msi");
    var installer1 = new Installer_1.Installer(title + "_v" + version, version, url);
    return installer1;
  };

  ProductInfoService.prototype.initializeInstallers = function () {
    var title = 'zibbit';
    var installer1 = this.getInstaller(title, '2.0.5.0'); //new Installer(title + "_v" + version, version, url);
    //var installer1 = this.getInstaller(title, '1.0.7.0'); //new Installer(title + "_v" + version, version, url);
    // var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
    // var title = 'MacroManager';
    // var version = '1.1.68.0';
    // var url = downloadsPath + '/MacroManager_v1.1.68.0.msi';
    // var installer1 = new Installer(title + "_v" + version, version, url);
    // var title = 'MacroManager';
    // var version = '1.1.64.0';
    // var url = downloadsPath + '/MacroManager_v1.1.64.0.msi';
    // var installer1 = new Installer(title + "_v" + version, version, url);
    // var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
    // var title = 'MacroManager';
    // var version = '1.0.7';
    // var url = downloadsPath + '/MacroManager_v1.0.7.msi';
    // var installer1 = new Installer(title + "_v" + version, version, url);
    // var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
    // var title = 'MacroManager';
    // var version = '1.0.8';
    // var url = downloadsPath + '/MacroManager_v1.0.8.msi';
    // var installer2 = new Installer(title + "_v" + version, version, url);
    // var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
    // var title = 'MacroManager';
    // var version = '1.0.9';
    // var url = downloadsPath + '/MacroManager_v1.0.9.msi';
    // var installer3 = new Installer(title + "_v" + version, version, url);

    var downloads = [// installer3,
    // installer2, 
    installer1];
    return downloads;
  }; // public getInstallers(){
  //   return this.gateKeeperClient.dispatchQuery("GetClientApplicationInstallerVersionsQuery")
  //   .then(function(data){
  //     var dataItems = data.items;
  //     var installers: Array<Installer> = [];
  //     dataItems.forEach(function(item){
  //       var title = item.title + " " + item.version
  //       if(installers.length == 0) {title += " (Latest)"}
  //       var installer = new Installer(title, item.version, item.filename)
  //       installers.push(installer);
  //     });
  //     return installers;
  //   });
  // }


  ProductInfoService.prototype.DownLoadInstaller = function (version) {
    var _this = this;

    var queryData = {
      TargetVersion: version
    };
    return this.gateKeeperClient.dispatchQuery("GetClientApplicationInstallerQuery", queryData).then(function (data) {
      var arrayBuff = _this.base64ToArrayBuffer(data.attachment);

      _this.saveByteArray(data.filename, arrayBuff);
    });
  };

  ProductInfoService.prototype.base64ToArrayBuffer = function (base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);

    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }

    return bytes;
  };

  ProductInfoService.prototype.saveByteArray = function (filename, byte) {
    var blob = new Blob([byte], {
      type: "application/octet-stream"
    });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  ProductInfoService.prototype.GetProductImage = function () {
    var imagesPath = this.config.getUploadsPath() + '/product-images/full-window/';
    var img = imagesPath + 'exhibits.PNG';
    return img;
  };

  ProductInfoService.prototype.getImageUrls = function () {
    return this.imageUrls;
  };

  ProductInfoService.prototype.getCards = function () {
    return this.cards;
  };

  ProductInfoService.prototype.getImage = function (imgPath) {
    return this.config.getUploadsPath() + '/product-images/' + imgPath;
  };

  Object.defineProperty(ProductInfoService.prototype, "tutorial", {
    get: function () {
      var imgs = this.imageUrlDict;
      var tutorialMap = new Map();
      var step_1a = new TutorialStep_1.TutorialStep("Exhibit Folder", imgs.get('get-started'), imgs.get("icon-folder"), 1);
      step_1a.items.push("Select a folder to manage your collection of PDF exhibits.");
      step_1a.items.push("These exhibits will be used to generate an appendix.");
      var step_1b = new TutorialStep_1.TutorialStep("Manage Exhibits", imgs.get('manage-exhibits'), imgs.get("icon-folder"), 1);
      step_1b.items.push("Exhibits can be added, removed, and re-ordered at any time.");
      step_1b.items.push("After an exhibit is added, it can be referenced throughout your document.");
      var step_2a = new TutorialStep_1.TutorialStep("Insert References", imgs.get("insert-ref"), imgs.get("icon-folder"), 1);
      step_2a.items.push("Insert references to your exhibits throughout your document.");
      step_2a.items.push("References can hyperlink to exhibits in your appendix.");
      step_2a.items.push("Exhibits can be sorted based on the order of appearance of references in the document.");
      var step_2b = new TutorialStep_1.TutorialStep("Style References", imgs.get("style-ref"), imgs.get("icon-style"), 3);
      step_2b.items.push("Choose the label text, style, and sequence type (alphabetical / numeric)");
      var step_3a = new TutorialStep_1.TutorialStep("Publish PDF", imgs.get("publish"), imgs.get("icon-publish"), 3);
      step_3a.items.push("Generate a PDF document with an appendix of exhibits.");
      step_3a.items.push("Decide which exhibits to include in your appendix.");
      step_3a.items.push("Create PDF bookmarks (optional).");
      tutorialMap.set("Exhibits", [step_1a]); //, step_1b]);

      tutorialMap.set("References", [step_2a]); //, step_2b]);

      tutorialMap.set("Publish", [step_3a]); //, step_2b]);

      return tutorialMap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ProductInfoService.prototype, "imageUrlDict", {
    get: function () {
      var urlMap = new Map();
      urlMap.set("get-started", this.getImage('exhibits.PNG'));
      urlMap.set("manage-exhibits", this.getImage('exhibits.PNG'));
      urlMap.set("insert-ref", this.getImage('insert-ref.PNG'));
      urlMap.set("style-ref", this.getImage('refLabel.PNG'));
      urlMap.set("publish", this.getImage('publishPdf.PNG'));
      urlMap.set("get-started-window", this.getImage('get-started-window.PNG'));
      urlMap.set("manage-exhibits-window", this.getImage('full-window/exhibits.PNG'));
      urlMap.set("insert-ref-window", this.getImage('insert-ref-window.PNG'));
      urlMap.set("style-ref-window", this.getImage('style-ref-window.PNG'));
      urlMap.set("publish-window", this.getImage('publish-window.PNG'));
      urlMap.set("icon-zibbit", this.getImage('icons/zibbit.png'));
      urlMap.set("icon-folder", this.getImage('icons/folder.png'));
      urlMap.set("icon-insert", this.getImage('icons/add.png'));
      urlMap.set("icon-style", this.getImage('icons/brush.png'));
      urlMap.set("icon-publish", this.getImage('icons/publish.png'));
      urlMap.set("smartScreen", this.config.getUploadsPath() + '/other/SmartScreen.PNG');
      urlMap.set("smartScreen-runanyway", this.config.getUploadsPath() + '/other/SmartScreen Run anyway.PNG');
      return urlMap;
    },
    enumerable: true,
    configurable: true
  });

  ProductInfoService.prototype.initializeImages = function () {
    var imagesPath = this.config.getUploadsPath() + '/product-demo-images';
    var urls = [imagesPath + '/packages.png', imagesPath + '/dashboard.png', imagesPath + '/pkgEditor.png', imagesPath + '/macroEditorSource.png', imagesPath + '/macroEditorProps.png', imagesPath + '/installPackage.png', imagesPath + '/packagesLoggedOut.png'];
    return urls;
  };

  ProductInfoService.prototype.initializeCards = function () {
    var cards = [// new Card('Learn', 'Get started by completing a quick tutorial that demonstates how to install a package', '/learn'),
    new Card_1.Card('Download', 'Follow this link to get the latest version of this application', '/downloads')];
    return cards;
  };

  ProductInfoService = __decorate([core_1.Injectable({
    providedIn: 'root'
  }), __metadata("design:paramtypes", [GateKeeperClient_1.GateKeeperClient])], ProductInfoService);
  return ProductInfoService;
}();

exports.ProductInfoService = ProductInfoService;

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var ModuleLoader_1 = __webpack_require__(520);

var awilix_1 = __webpack_require__(249); // const isClass = require('is-class')


var IocRegistrations =
/** @class */
function () {
  function IocRegistrations() {} // public static register(container: AwilixContainer){
  //   this.loadServices(container);
  //   this.loadComponents(container);
  // }


  IocRegistrations.loadComponents = function (container) {
    var ctx = __webpack_require__(522);

    var moduleInfoCollection = ModuleLoader_1.ModuleLoader.getModulesByContext(ctx);
    moduleInfoCollection.forEach(function (info) {
      var _a;

      var name = info["name"];
      var mod = info["mod"];
      var reg = (_a = {}, _a[name] = awilix_1.asClass(mod).singleton(), _a); // components.push(info);

      container.register(reg);
    });
    return moduleInfoCollection; // components = moduleInfoCollection;
  };

  IocRegistrations.loadServices = function (container) {
    var ctx = __webpack_require__(590);

    var moduleInfoCollection = ModuleLoader_1.ModuleLoader.getModulesByContext(ctx);
    moduleInfoCollection.forEach(function (info) {
      var _a;

      var name = info["name"];
      var mod = info["mod"];
      var reg = (_a = {}, _a[name] = awilix_1.asClass(mod).singleton(), _a);
      container.register(reg);
    });
  };

  return IocRegistrations;
}();

exports.IocRegistrations = IocRegistrations; // const ctx = require.context('./services', true)
// // const { createContainer } = require('awilix')
// const path = require('path')
// const container = createContainer()
// ctx.keys().forEach(key => {
//   const name = path.basename(key, ".ts");
//   var mod = ctx(key);
//   var classDef = mod[name];
// var isClassCheck = isClass(classDef);
// console.log("test key: " + key);
// console.log("test filename: " + name);
// console.log("test classDef: " + classDef);
// console.log("test class: " + isClassCheck);
// var reg = {[name]: asClass(classDef).singleton()};
// // console.log("reg: " + JSON.stringify(reg));
// container.register(reg);
// container.loadModules([
//   // Globs!
//   [
//     // To have different resolverOptions for specific modules.
//     'services/**/*.js',
//     {
//       register: asClass,
//       lifetime: Lifetime.SINGLETON
//     }
//   ],
// //   'services/**/*.js',
// //   'repositories/**/*.js'
// ], {
//         // We want to register `UserService` as `userService` -
//         // by default loaded modules are registered with the
//         // name of the file (minus the extension)
//         // formatName: 'camelCase',
//         // Apply resolver options to all modules.
//         resolverOptions: {
//             // We can give these auto-loaded modules
//             // the deal of a lifetime! (see what I did there?)
//             // By default it's `TRANSIENT`.
//             lifetime: Lifetime.SINGLETON,
//             // We can tell Awilix what to register everything as,
//             // instead of guessing. If omitted, will inspect the
//             // module to determinw what to register as.
//             register: asClass
//         }
//     }
// )
// We are now ready! We now have a userService, userRepository and emailService!
// var service = container.resolve('ProductInfoService');
// console.log(service);

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var path = __webpack_require__(521);

var ModuleLoader =
/** @class */
function () {
  function ModuleLoader() {}

  ModuleLoader.getModulesByContext = function (ctx, ext) {
    if (ext === void 0) {
      ext = ".ts";
    }

    var moduleInfoCollection = [];
    ctx.keys().forEach(function (key) {
      var info = [];
      var filename = path.basename(key);
      var name = path.basename(key, ext); // var ext = parse(filename).ext; 

      var modContext = ctx(key);
      var mod = modContext[name];
      info["mod"] = mod;
      info["name"] = name; // info["ext"] = ext;

      moduleInfoCollection.push(info);
    });
    return moduleInfoCollection;
  };

  return ModuleLoader;
}();

exports.ModuleLoader = ModuleLoader;

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AppComponent": 182,
	"./AppComponent.ts": 182,
	"./CardComponent": 250,
	"./CardComponent.ts": 250,
	"./CarouselComponent": 252,
	"./CarouselComponent.ts": 252,
	"./DocLinesComponent": 253,
	"./DocLinesComponent.ts": 253,
	"./DownloadsComponent": 183,
	"./DownloadsComponent.ts": 183,
	"./FooterComponent": 264,
	"./FooterComponent.ts": 264,
	"./HeaderComponent": 265,
	"./HeaderComponent.ts": 265,
	"./HomeComponent": 184,
	"./HomeComponent.ts": 184,
	"./LearnComponent": 185,
	"./LearnComponent.ts": 185,
	"./LogoComponent": 266,
	"./LogoComponent.ts": 266,
	"./MenuComponent": 267,
	"./MenuComponent.ts": 267,
	"./NoticeBarComponent": 268,
	"./NoticeBarComponent.ts": 268,
	"./PageWrapperComponent": 269,
	"./PageWrapperComponent.ts": 269,
	"./RibbonComponent": 270,
	"./RibbonComponent.ts": 270,
	"./SplashscreenComponent": 271,
	"./SplashscreenComponent.ts": 271
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 522;

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var AppRemoteManager =
/** @class */
function () {
  function AppRemoteManager() {}

  AppRemoteManager.prototype.setRemotable = function (remotable) {
    this._remotable = remotable;
  };

  AppRemoteManager.prototype.setBusyIndicator = function (isVisible) {
    this._remotable.setBusyIndicator(isVisible);
  };

  AppRemoteManager.prototype.setNotices = function () {
    var notices = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      notices[_i] = arguments[_i];
    }

    this._remotable.setNotices(notices);
  };

  AppRemoteManager = __decorate([core_1.Injectable({
    providedIn: 'root'
  })], AppRemoteManager);
  return AppRemoteManager;
}();

exports.AppRemoteManager = AppRemoteManager;

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\r\n    <header *ngIf=\"showHeader\">\r\n        <header-ui class='header'></header-ui>\r\n    </header>\r\n    <main>\r\n        <router-outlet></router-outlet>\r\n\r\n        <!-- <pageWrapper-ui [isBusy]=\"isBusy\" [notices]=\"notices\">\r\n            <router-outlet></router-outlet>\r\n        </pageWrapper-ui> -->\r\n    </main>\r\n    <footer *ngIf=\"showFooter\">\r\n        <footer-ui></footer-ui>\r\n    </footer>\r\n</div>\r\n";

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(526);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px}section{padding:50px 0px}.severity-slow-symbol:before,.severity-info-symbol:before,.my-close:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\"}.severity-slow-symbol:before,.severity-info-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\"}.severity-slow-symbol:before{content:\"\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.btn-base,.btn-light,.btn-dark{cursor:pointer;text-decoration:none;font-weight:500;transition:background-color .3s;display:inline-block;padding:5px 20px}.btn-dark{color:#fff !important;border:2px solid #fff;background:transparent}.btn-dark:hover{background-color:#fff;color:#2e302b !important}.btn-light{color:#2e302b !important;border:1px solid #2e302b;background-color:#f4f4f4}.btn-light:hover{background-color:#2e302b;color:#fff !important}.numberWrapper{display:flex;align-items:center}.numberWrapper-top{display:flex;align-items:flex-start}.number{margin-right:10px;display:flex;align-items:center;justify-content:center;height:35px;width:35px;color:#fff;background-color:#035762d9;border-radius:50%;flex-shrink:0}.app{display:flex;flex-direction:column;min-height:100vh}.app main{display:flex;flex:1 0 auto}.app header,.app main,.app footer{flex-shrink:0}.app header{z-index:1000}.app footer{margin-top:auto}", ""]);



/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<div class='my-card'>\r\n    <div class='img-wrapper'>\r\n        <img>\r\n    </div>\r\n    <div class='card-content'>\r\n        <div class='header'>\r\n            <!-- [routerLink]=\"['user', user.id, 'details']\" -->\r\n            <a [routerLink]=\"[card.route]\">\r\n                <h2 class='title'> {{card.title}} </h2>\r\n            </a>\r\n\r\n            <!-- <h2 class='title'> {{card.title}}  </h2> -->\r\n        </div>\r\n        <div class='body'>\r\n            <p> {{card.description}} </p>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(529);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px}section{padding:50px 0px}.severity-slow-symbol:before,.severity-info-symbol:before,.my-close:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\"}.severity-slow-symbol:before,.severity-info-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\"}.severity-slow-symbol:before{content:\"\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.btn-base,.btn-light,.btn-dark{cursor:pointer;text-decoration:none;font-weight:500;transition:background-color .3s;display:inline-block;padding:5px 20px}.btn-dark{color:#fff !important;border:2px solid #fff;background:transparent}.btn-dark:hover{background-color:#fff;color:#2e302b !important}.btn-light{color:#2e302b !important;border:1px solid #2e302b;background-color:#f4f4f4}.btn-light:hover{background-color:#2e302b;color:#fff !important}.numberWrapper{display:flex;align-items:center}.numberWrapper-top{display:flex;align-items:flex-start}.number{margin-right:10px;display:flex;align-items:center;justify-content:center;height:35px;width:35px;color:#fff;background-color:#035762d9;border-radius:50%;flex-shrink:0}.my-card{text-align:center;box-shadow:0 8px 10px 0 rgba(0,0,0,.06);padding:20px;background-color:#fff;width:100%}:host{display:flex;flex-grow:1}", ""]);



/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <div class=\"carousel-controls d-none d-md-flex\">\r\n\r\n        <div class=\"carousel-control-wrapper\">\r\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n                <div class=\"carousel-icon-wrapper\">\r\n  \r\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            \r\n              </div>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"carousel-control-wrapper\">\r\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n            <div class=\"carousel-icon-wrapper\">\r\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n        <div class=\"carousel-inner\">\r\n              <div [class]=\"slide.class\" *ngFor=\"let slide of slides()\">\r\n                <div class=\"slide-wrapper\">\r\n                    <img class=\"d-block w-100\" [src]=\"slide.src\" [alt]=\"slide.alt\">\r\n                </div>\r\n              </div>\r\n        </div>              \r\n\r\n</div>";

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(532);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, ".carousel .carousel-inner{border:dashed .7px gray}.carousel .carousel-controls{justify-content:flex-end;margin-bottom:10px}.carousel .carousel-controls .carousel-control-wrapper{display:inline-block}.carousel .carousel-controls .carousel-control-wrapper a{display:inline-block;position:static;width:auto;margin-left:5px}.carousel .carousel-controls .carousel-icon-wrapper{background-color:#000;padding:8px}.carousel .carousel-inner{margin:auto}", ""]);



/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Installer =
/** @class */
function () {
  function Installer(title, version, downloadUrl, description) {
    if (description === void 0) {
      description = '';
    }

    this.version = "";
    this.downloadUrl = "";
    this.title = "";
    this.description = "";
    this.title = title;
    this.description = description;
    this.downloadUrl = downloadUrl;
    this.version = version;
  }

  return Installer;
}();

exports.Installer = Installer;

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Benefit =
/** @class */
function () {
  function Benefit(title) {
    this.title = "";
    this.icon = "";
    this.title = title;
    this.items = [];
  }

  return Benefit;
}();

exports.Benefit = Benefit;

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var TutorialStep =
/** @class */
function () {
  function TutorialStep(title, imgUrl, ribbonIconUrl, ribbonIconPosition) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.ribbonIconUrl = ribbonIconUrl;
    this.ribbonIconPosition = ribbonIconPosition;
    this.items = [];
  }

  return TutorialStep;
}();

exports.TutorialStep = TutorialStep;

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n    <div class=\"page-content\">\r\n        <div class=\"line\">\r\n            <div class=\"fake-text fake-text-small\"></div>\r\n            <div class=\"ref\">Exhibit 1</div>\r\n        </div>\r\n        <div class=\"line\">\r\n            <div class=\"fake-text\"></div>\r\n            <div class=\"ref\">Exhibit 2</div>\r\n            <div class=\"fake-text\"></div>\r\n        </div>\r\n        <div class=\"line\">\r\n            <div class=\"fake-text\"></div>\r\n        </div>\r\n        <div class=\"line\">\r\n            <div class=\"ref\">Exhibit 3</div>\r\n            <div class=\"fake-text\"></div>\r\n        </div>\r\n        <div class=\"line\">\r\n            <div class=\"fake-text\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(555);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px}section{padding:50px 0px}.severity-slow-symbol:before,.severity-info-symbol:before,.my-close:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\"}.severity-slow-symbol:before,.severity-info-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\"}.severity-slow-symbol:before{content:\"\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.btn-base,.btn-light,.btn-dark{cursor:pointer;text-decoration:none;font-weight:500;transition:background-color .3s;display:inline-block;padding:5px 20px}.btn-dark{color:#fff !important;border:2px solid #fff;background:transparent}.btn-dark:hover{background-color:#fff;color:#2e302b !important}.btn-light{color:#2e302b !important;border:1px solid #2e302b;background-color:#f4f4f4}.btn-light:hover{background-color:#2e302b;color:#fff !important}.numberWrapper{display:flex;align-items:center}.numberWrapper-top{display:flex;align-items:flex-start}.number{margin-right:10px;display:flex;align-items:center;justify-content:center;height:35px;width:35px;color:#fff;background-color:#035762d9;border-radius:50%;flex-shrink:0}.page-content{padding:10px;padding-right:5px}.page-content .line{margin-top:5px;min-width:100px;display:flex;align-items:center;flex-wrap:nowrap}.page-content .line>div{margin-right:5px}.page-content .ref{font-size:12px;font-weight:bold}.page-content .fake-text{background:#d3d3d34f;height:10px;flex-grow:1}", ""]);



/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "<!-- <pageWrapper-ui [isBusy]=\"isBusy\" [notices]=\"notices\" > -->\r\n    <div class=\"page page-downloads\">\r\n        <div class=\"page-wrapper\">\r\n            <section class=\"section-downloads\">\r\n                <div class=\"container\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 col-md-6\">\r\n                                <!-- <h1 class=\"title\">Download</h1> -->\r\n                                \r\n                                    <!-- <div class=\"col-12 col-md-8\"> -->\r\n                                        <!-- <div class=\"box\">\r\n                                            <h2 class=\"subtitle\">Windows Installers</h2>\r\n                                            <div class=\"installers\">\r\n                                                <div *ngFor=\"let installer of installers\">\r\n                                                    <a class=\"btn-light\"  [href]=\"installer.downloadUrl\" download>{{installer.title}}</a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div> -->\r\n                                    <!-- </div> -->\r\n\r\n                                    <div class=\"box\">\r\n                                        <h2 class=\"subtitle\">Installation</h2>\r\n                                        <ol>\r\n                                            <li>\r\n                                                Download the installer                                                     \r\n                                                <a class=\"btn-light\"  [href]=\"latest.downloadUrl\" download>{{latest.title}}</a>\r\n                                            </li>\r\n\r\n                                            <li>\r\n                                                Run the installer to launch the setup process\r\n                                            </li>\r\n                                            <li>\r\n                                                Complete the setup process \r\n                                            </li>\r\n                                        </ol>\r\n                                    </div>\r\n\r\n                                    <div class=\"box\">\r\n                                        <h2 class=\"subtitle\">Microsoft Defender SmartScreen</h2>\r\n                                        <p>SmartScreen protects against malicious files from the internet. <a target=\"_blank\" href=\"https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-smartscreen/microsoft-defender-smartscreen-overview\">Learn more.</a></p>\r\n                                        <ul class=\"note\">\r\n                                            <li>It considers many factors including \"Reputation\".</li>\r\n                                            <li>While the reputation associated with Zibbit is growing, you may see the SmartScreen prompt.</li>\r\n                                            <li>To continue the installation: click \"More info\" and then \"Run anyway\".</li>\r\n                                            <div class=\"imgWrapper\">\r\n                                                <img [src]=\"images.get('smartScreen')\"/>\r\n                                            </div>\r\n                                            <div class=\"imgWrapper\">\r\n                                                <img [src]=\"images.get('smartScreen-runanyway')\"/>\r\n                                            </div>\r\n\r\n                                        </ul>\r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"col-12 col-md-6\">\r\n                                <div class=\"box\">\r\n                                    <h2 class=\"subtitle\">System Requirements</h2>\r\n                                    <p>Zibbit is a Microsoft Word Add-in with the following system requirements:</p>\r\n                                    <ul>\r\n                                        <li>\r\n                                            <div>Windows Operating System</div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div>Microsoft Word (2007 or later)</div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div>Microsoft .NET Framework (4.7.2 or later)</div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div>Microsoft Visual Studio 2010 Tools for Office Runtime (10.0.30319 or later)</div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div>Microsoft Edge WebView2 Runtime\r\n                                            (<a target=\"_blank\" href=\"https://developer.microsoft.com/en-us/microsoft-edge/webview2/\">Learn more</a> or <a href=\"https://go.microsoft.com/fwlink/p/?LinkId=2124703\">Download</a>)\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>    \r\n                                </div>\r\n                            </div>\r\n                        </div>    \r\n                    </div>\r\n            </section>  \r\n        </div>        \r\n    </div>\r\n<!-- </pageWrapper-ui> -->\r\n\r\n      \r\n";

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(558);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px}section{padding:50px 0px}.severity-slow-symbol:before,.severity-info-symbol:before,.my-close:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\"}.severity-slow-symbol:before,.severity-info-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\"}.severity-slow-symbol:before{content:\"\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.btn-base,.btn-light,.btn-dark{cursor:pointer;text-decoration:none;font-weight:500;transition:background-color .3s;display:inline-block;padding:5px 20px}.btn-dark{color:#fff !important;border:2px solid #fff;background:transparent}.btn-dark:hover{background-color:#fff;color:#2e302b !important}.btn-light{color:#2e302b !important;border:1px solid #2e302b;background-color:#f4f4f4}.btn-light:hover{background-color:#2e302b;color:#fff !important}.numberWrapper{display:flex;align-items:center}.numberWrapper-top{display:flex;align-items:flex-start}.number{margin-right:10px;display:flex;align-items:center;justify-content:center;height:35px;width:35px;color:#fff;background-color:#035762d9;border-radius:50%;flex-shrink:0}:host{width:100%}:host,:host pageWrapper-ui{display:flex;width:100%}.page-downloads{display:flex;flex-direction:column;flex-grow:1}.page-downloads .content{margin-top:50px}.page-downloads .box{padding:20px 0px}.page-downloads .title{text-align:center;color:#035762d9}.page-downloads .subtitle{font-size:20px;color:#035762d9}.page-downloads p{max-width:700px}.page-downloads .installers li .item-wrapper{vertical-align:middle}.page-downloads .installers li .item-wrapper>*{display:inline-block}.page-downloads .installers a{color:#007bff;cursor:pointer;margin-right:5px}.page-downloads .installers .img-wrapper{height:20px !important}.page-downloads .note .imgWrapper{max-width:400px;margin-top:20px}", ""]);



/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-wrapper\">\r\n    <section class=\"section-footer\">\r\n        <div class='footer-content'>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-md-8\">\r\n                        <div class=\"logo-wrapper\">\r\n                            <!-- <logo-ui [type]='4'></logo-ui> -->\r\n                        </div>\r\n                        <p class=\"m-0\">Support</p>\r\n                        <p>{{email}}</p>\r\n                    </div>\r\n                    <div class=\"col-12 col-md-4\">\r\n                        <h3> Links </h3>\r\n                        <menu-ui class=\"footer\"></menu-ui>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <p>©{{currentYear}} Zibbit. All Rights Reserved.</p>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n       \r\n    </section>\r\n  \r\n</div>\r\n\r\n\r\n";

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(561);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px}section{padding:50px 0px}.severity-slow-symbol:before,.severity-info-symbol:before,.my-close:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\"}.severity-slow-symbol:before,.severity-info-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\"}.severity-slow-symbol:before{content:\"\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.btn-base,.btn-light,.btn-dark{cursor:pointer;text-decoration:none;font-weight:500;transition:background-color .3s;display:inline-block;padding:5px 20px}.btn-dark{color:#fff !important;border:2px solid #fff;background:transparent}.btn-dark:hover{background-color:#fff;color:#2e302b !important}.btn-light{color:#2e302b !important;border:1px solid #2e302b;background-color:#f4f4f4}.btn-light:hover{background-color:#2e302b;color:#fff !important}.numberWrapper{display:flex;align-items:center}.numberWrapper-top{display:flex;align-items:flex-start}.number{margin-right:10px;display:flex;align-items:center;justify-content:center;height:35px;width:35px;color:#fff;background-color:#035762d9;border-radius:50%;flex-shrink:0}.section-footer{background-color:#2e302b;color:#fff}.section-footer .logo-wrapper{margin-bottom:10px;text-align:center;max-width:50px;max-width:50px}.section-footer .logo-wrapper .logo{color:#2e302b;font-size:30px;text-decoration:none}.section-footer .logo-wrapper img{margin:0px -25px}.section-footer .appName{text-align:center;padding:0px;margin:0px;margin-top:-5px;font-size:18px}", ""]);



/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"header-wrapper\">\r\n    <!-- <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\"> -->\r\n        \r\n                <div class='header-content' [style.justify-content]=\"(hideLogo ? 'flex-start' : 'space-between')\">\r\n                    <div *ngIf=\"!hideLogo\" class=\"logo-wrapper\">\r\n                        <a (click)=\"menuClickHandler()\" class='logo' [routerLink]=\"['/home']\">\r\n                            <logo-ui [type]='0' [hideText]=true></logo-ui>\r\n                            <!-- <img src= {{logoUrl}}> -->\r\n                        </a> \r\n                    </div>\r\n\r\n                    <button [ngClass]=\"[mobileWrapperClass]\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMobileMenu\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                            <i class=\"fas fa-bars\"></i>\r\n                        <!-- <span class=\"navbar-toggler-icon\"></span> -->\r\n                    </button>\r\n                    <div [ngClass]=\"[desktopWrapperClass]\">\r\n                        <menu-ui></menu-ui>\r\n                    </div>\r\n\r\n\r\n                  \r\n                </div>\r\n                <div id=\"collapseMobileMenu\" class=\"mobile-menu-wrapper collapse\">\r\n                        <menu-ui (navigationEvent)=\"menuClickHandler()\" class=\"mobile\"></menu-ui>\r\n                </div>\r\n            <!-- </div>\r\n        </div>\r\n    </div> -->\r\n   \r\n</div>\r\n\r\n";

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(564);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px}section{padding:50px 0px}.severity-slow-symbol:before,.severity-info-symbol:before,.my-close:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\"}.severity-slow-symbol:before,.severity-info-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\"}.severity-slow-symbol:before{content:\"\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.btn-base,.btn-light,.btn-dark{cursor:pointer;text-decoration:none;font-weight:500;transition:background-color .3s;display:inline-block;padding:5px 20px}.btn-dark{color:#fff !important;border:2px solid #fff;background:transparent}.btn-dark:hover{background-color:#fff;color:#2e302b !important}.btn-light{color:#2e302b !important;border:1px solid #2e302b;background-color:#f4f4f4}.btn-light:hover{background-color:#2e302b;color:#fff !important}.numberWrapper{display:flex;align-items:center}.numberWrapper-top{display:flex;align-items:flex-start}.number{margin-right:10px;display:flex;align-items:center;justify-content:center;height:35px;width:35px;color:#fff;background-color:#035762d9;border-radius:50%;flex-shrink:0}.header-wrapper{padding:5px 20px;width:100%;z-index:100;background-color:#fff;box-shadow:0px 0px 9px 3px rgba(41,41,41,.25)}.header-wrapper .header-content{display:flex;justify-content:space-between;align-items:center;padding:5px 0px}.header-wrapper .header-content .appName{text-align:center;padding:0px;margin:0px;margin-top:-5px;font-size:18px}.header-wrapper .header-content .btn-menu{padding:10px;background-color:#2e302b;color:#fff;border-width:0px;outline:none}.header-wrapper .header-content .btn-menu i{font-size:20px}.header-wrapper .header-content .btn-menu:focus{outline-width:0;outline:none;box-shadow:none}", ""]);



/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports = "<div class=\"page page-home\">\r\n        <div class=\"section-intro\">\r\n            <div class=\"row no-gutters\">\r\n                <div class=\"col-12 col-md-auto intro-wrapper window-height\">\r\n                    <div class=\"header-wrapper\">\r\n                        <h2 class=\"subtitle\">Assemble exhibits with automation</h2>\r\n\r\n                        <div class=\"logoWrapper\" data-toggle=\"collapse\" data-target=\"#collapseMobileMenu\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                            <logo-ui></logo-ui>\r\n                        </div> \r\n                    </div>\r\n                    <div class=\"header-content\">\r\n                        <!-- <div id=\"collapseMobileMenu\" class=\"mobile-menu-wrapper collapse\">\r\n                            <menu-ui (navigationEvent)=\"menuClickHandler()\" class=\"mobile\"></menu-ui>\r\n                        </div>     -->\r\n                        <div class=\"intro\">\r\n\r\n                            <div class=\"summaryBenefits\">\r\n                                <div class=\"numberWrapper\" *ngFor='let item of summaryBenefit.items'>\r\n                                    <i class=\"fas fa-check-square checkbox\"></i>\r\n                                    <div class=\"subtitle\">{{item}}</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"btn-bar\">\r\n                                <!-- <i class=\"fas fa-chevron-down d-block d-md-none\"></i> -->\r\n                                <a (click)=\"scroll('product-section')\" class=\"btn-dark btn-getStarted\">Learn More</a>\r\n                                <a class=\"btn-dark btn-getStarted\" routerLink='/learn'>Get Started</a>        \r\n\r\n                                <!-- <a class=\"btn-dark btn-download d-none d-md-inline-block\" routerLink='/downloads'>Download</a>             -->\r\n\r\n                                <!-- <a class=\"btn-dark btn-download d-none d-md-inline-block\">Download</a>                 -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-12 col-md\">\r\n\r\n                    <!-- <div id=\"product-section\">\r\n                        <div class=\"container\">\r\n            \r\n                            <div class=\"stamp\">\r\n                                <div class=\"features-block\">\r\n                                        <div class=\"features\">\r\n                                            <div class=\"row no-gutters\">\r\n                                                <div class=\"col-12 col-md-6\" *ngFor=\"let feature of benefits\">\r\n                                                    <div class=\"feature\">\r\n                                                        <div class=\"header\">\r\n                                                            <i class=\"icon {{feature.icon}}\"></i>\r\n                                                            <div class=\"subtitle\">{{feature.title}}</div>\r\n                                                        </div>\r\n                                                        <div class=\"content\">\r\n                                                            <div class=\"steps\">\r\n                                                                <div class=\"numberWrapper-top\" *ngFor='let item of feature.items'>\r\n                                                                    <i class=\"fas fa-check-square checkbox\"></i>\r\n                                                                    <div class=\"subtitle\">{{item}}</div>\r\n                                                                </div>\r\n                                                            </div>                        \r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>        \r\n                                </div>  \r\n                            </div>\r\n            \r\n                        </div>\r\n            \r\n                        <div class=\"product-section\">\r\n                        </div>    \r\n            \r\n                    </div> -->\r\n            \r\n\r\n\r\n                    <div class=\"prodImgWrapper\">\r\n                            <!-- <div class=\"word-app\">\r\n                                <div class=\"header\">\r\n                                    <ribbon-ui [showTabs]=\"true\" [showRibbon]=\"false\"></ribbon-ui>\r\n                                </div>\r\n                                <div class=\"body\">\r\n                                    <div class=\"doc\">\r\n                                        <div class=\"doc-content\"></div>\r\n                                    </div>\r\n                                    <div class=\"zibbit\">\r\n                                        <img src=\"{{productImgUrl}}\"/>\r\n                                    </div>\r\n        \r\n                                </div>\r\n                                <div class=\"footer\"></div>\r\n                            </div> -->\r\n\r\n                        <div [ngStyle]=\"style()\" class=\"product-wrapper window-height\">\r\n                            \r\n                            <!-- <div class=\"stamp\">\r\n                                <div class=\"intro\">\r\n                                    <h2 class=\"subtitle\">Assemble exhibits with automation</h2>\r\n                                    <div class=\"btn-bar\">\r\n                                        <a (click)=\"scroll('product-section')\" class=\"btn-dark btn-getStarted\">Learn More</a>\r\n                                        <a class=\"btn-dark btn-getStarted\" routerLink='/learn'>Get Started</a>                \r\n                                    </div>\r\n                                </div>\r\n        \r\n                            </div> -->\r\n\r\n\r\n                            <!-- <img src=\"{{productImgUrl}}\"/> -->\r\n                            <!-- <div class=\"stamp\">\r\n                                <div class=\"howItWorks wrapper easyToUse\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-12 col-md-6\">\r\n                                            <div class=\"header\">\r\n                                                <div class=\"title\">3 Steps</div>\r\n                                                <div class=\"summary\">Generate a PDF in 3 simple steps</div> \r\n        \r\n                                            </div>        \r\n                                        </div>\r\n                                        <div class=\"col-12 col-md-6\">\r\n                                            <div class=\"content\">\r\n                                                <div class=\"steps\">\r\n                                                    <div class=\"numberWrapper\">\r\n                                                        <div class=\"number\">1</div>\r\n                                                        <div class=\"subtitle\">Import exhibits</div>\r\n                                                    </div>\r\n                                                    <div class=\"numberWrapper\">\r\n                                                        <div class=\"number\">2</div>\r\n                                                        <div class=\"subtitle\">Reference exhibits</div>\r\n                                                    </div>\r\n                                                    <div class=\"numberWrapper\">\r\n                                                        <div class=\"number\">3</div>\r\n                                                        <div class=\"subtitle pdf-step\">\r\n                                                            <span>Publish PDF</span>        \r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>    \r\n                                            </div>\r\n                                        </div>   \r\n                                        \r\n                                    </div>\r\n                                </div>\r\n        \r\n        \r\n                            </div> -->\r\n                        </div>\r\n    \r\n                    </div>\r\n                    <!-- <div class=\"prodImgWrapper\">\r\n                        <img src=\"{{productImgUrl}}\"/>\r\n                    </div> -->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <section id=\"product-section\">\r\n            <div class=\"container\">\r\n                <div class=\"titleWrapper\">\r\n                    <h2 class=\"title\">Features</h2>\r\n                </div>\r\n\r\n                <div class=\"stamp\">\r\n                    <div class=\"features-block\">\r\n                            <div class=\"features\">\r\n                                <div class=\"row no-gutters\">\r\n                                    <div class=\"col-12 col-md-6 col-lg-3\" *ngFor=\"let feature of benefits\">\r\n                                        <div class=\"feature\">\r\n                                            <div class=\"header\">\r\n                                                <i class=\"icon {{feature.icon}}\"></i>\r\n                                                <div class=\"subtitle\">{{feature.title}}</div>\r\n                                            </div>\r\n                                            <div class=\"content\">\r\n                                                <div class=\"steps\">\r\n                                                    <div class=\"numberWrapper-top\" *ngFor='let item of feature.items'>\r\n                                                        <i class=\"fas fa-check-square checkbox\"></i>\r\n                                                        <div class=\"subtitle\">{{item}}</div>\r\n                                                    </div>\r\n                                                </div>                        \r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>        \r\n                    </div>  \r\n                </div>\r\n\r\n            </div> \r\n        </section>\r\n        <section id=\"security-section\">\r\n            <div class=\"container\">\r\n                <div class=\"wrapper\">\r\n                   \r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-md-6\">\r\n                            <div class=\"titleWrapper\">\r\n                                <i class=\"icon fas fa-shield-alt\"></i>\r\n                                <h2 class=\"title\">Privacy</h2>\r\n                            </div>            \r\n                            <p class=\"summary\">The entire process of assembling exhibits is performed locally on your own device</p>\r\n                        </div>\r\n                        <div class=\"col-12 col-md\">\r\n                            <div class=\"content\">        \r\n                                <ul>                                \r\n                                    <li>\r\n                                        <span>Exhibits are <strong>never</strong> transmitted, processed, or stored on any remote server</span>\r\n                                    </li>\r\n                                    <li>Network communication is encrypted with TLS/SSL protocols</li>\r\n                                    <li>The installation package is encrypted to prevent tampering</li>\r\n                                </ul>\r\n                            </div>\r\n        \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> \r\n        </section>\r\n\r\n        <section id=\"process-section\" class=\"process\">\r\n            <div class=\"titleWrapper\">\r\n                <h2 class=\"title\">Three Simple Steps</h2>\r\n                <p>Case Study: Affidavit</p>    \r\n            </div>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-lg-4\">\r\n                        <div class=\"step\">\r\n                            <div class=\"row\">  \r\n                                <div class=\"col-12 col-md-7 col-lg-12 order-2\">\r\n                                    <div class=\"exhibits\">\r\n                                        <div class=\"stepFigure\">\r\n                                            <p class=\"subtitle\">Exhibits</p>\r\n                                            <ul class=\"pdf-collection\">\r\n                                                <li class=\"pdf\" *ngFor=\"let exhibit of exhibits\">\r\n                                                    <i class=\"far fa-file-pdf\"></i>\r\n                                                    <p>{{exhibit}}.pdf</p>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>    \r\n                                </div>\r\n                                <div class=\"col-12 col-md-5 col-lg-12\">\r\n                                    <div class=\"stepSummary\">\r\n                                        <div class=\"numberWrapper\">\r\n                                            <div class=\"number\">1</div>\r\n                                            <h2 class=\"subtitle\">Import Exhibits</h2>    \r\n                                        </div>     \r\n                                        <!-- <ul >\r\n                                            <li>Import a folder of Exhibits</li>\r\n                                        </ul>     -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>    \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 col-lg-4\">\r\n                        <div class=\"step\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12 col-md-7 col-lg-12 order-2 order-sm-2\">\r\n                                    <div class=\"stepFigure\">\r\n                                        <div class=\"references\">\r\n                                            <div class=\"word-wrapper\">\r\n                                                <ribbon-ui [docTitle]=\"'Affidavit'\" [showTabs]=\"false\" [showRibbon]=\"false\"></ribbon-ui>\r\n                                                <div class=\"body\">\r\n                                                    <div class=\"page-wrapper\">\r\n                                                        <doc-lines-ui></doc-lines-ui>\r\n                                                    </div>\r\n                                                    <div class=\"zibbit-pane\">\r\n                                                        <div class=\"header\">\r\n                                                            <h3>Exhibits</h3>\r\n                                                        </div>\r\n                                                        <div class=\"body\">\r\n                                                            <ul>\r\n                                                                <li *ngFor=\"let exhibit of exhibits; let i = index\"><p>{{i + 1}}. {{exhibit}}</p></li>\r\n                                                            </ul>\r\n                                                            <!-- <div class=\"insert\">\r\n                                                                <p>Insert</p>\r\n                                                            </div>    -->\r\n                                                        </div>\r\n                                                    </div>   \r\n                                                </div>\r\n                                                <div class=\"footer\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-12 col-md-5 col-lg-12 order-sm-1\">\r\n                                    <div class=\"stepSummary\">\r\n                                        <div class=\"numberWrapper\">\r\n                                            <div class=\"number\">2</div>\r\n                                            <h2 class=\"subtitle\">Reference Exhibits</h2>    \r\n                                        </div>\r\n                                        <!-- <ul>\r\n                                            <li>Insert references to your exhibits</li>\r\n                                        </ul>     -->\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 col-lg-4\">\r\n                        <div class=\"step\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12 col-md-7 col-lg-12 order-2\">\r\n                                    <div class=\"stepFigure\">\r\n                                        <div class=\"publish\">\r\n                                            <div class=\"pdf-wrapper\">\r\n                                                <div class=\"pdf-header titleBar\">\r\n                                                    <div class=\"item\">PDF - Affidavit</div>\r\n                                                    <!-- <div class=\"openPdf\">\r\n                                                        <a class=\"sample\" [href]=\"pdfUrl\" target=\"_blank\">Open</a>\r\n                                                    </div> -->\r\n                                                </div>\r\n                                                <div class=\"body\">\r\n                                                    <div class=\"bookmarks\">\r\n                                                        <div class=\"subtitle\">Bookmarks</div>\r\n                                                        <ul>\r\n                                                            <li>\r\n                                                                <i class=\"far fa-bookmark\"></i>\r\n                                                                <p>Affidavit</p>\r\n                                                            </li>\r\n                                                            <li *ngFor=\"let exhibit of exhibits; let i = index\">\r\n                                                                <i class=\"far fa-bookmark\"></i>\r\n                                                                <p>Exhibit {{i + 1}} - {{exhibit}}</p>\r\n                                                            </li>\r\n                                                        </ul>            \r\n                \r\n                                                    </div>\r\n                \r\n                                                    <div class=\"page-wrapper\">\r\n                                                        <doc-lines-ui></doc-lines-ui>\r\n                                                        <div class=\"appendix-wrapper\">\r\n                                                            <p class=\"subtitle\">Appendix</p>\r\n                \r\n                                                            <div class=\"appendix\">\r\n                                                                <ul>\r\n                                                                    <li *ngFor=\"let exhibit of exhibits; let i = index\">\r\n                                                                        <i class=\"far fa-file-pdf\"></i>\r\n                                                                        <p>Exhibit {{i + 1}}</p>\r\n                                                                    </li>\r\n                                                                </ul>       \r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>    \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-12 col-md-5 col-lg-12\">\r\n                                    <div class=\"stepSummary\">\r\n                                        <div class=\"numberWrapper\">\r\n                                            <div class=\"number\">3</div>\r\n                                            <h2 class=\"subtitle\">Publish PDF</h2>    \r\n                                        </div>\r\n                                        <!-- <ul>\r\n                                            <li>Generate a PDF <a class=\"sample\" [href]=\"pdfUrl\" target=\"_blank\">(Affidavit.pdf)</a> document with an appendix of exhibits</li>\r\n                                        </ul>     -->\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </section>\r\n        <section class=\"glance\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <h2 class='title'>Watch</h2>\r\n                        <div class=\"vid-wrapper\">\r\n                            <iframe [src]=\"demoLink\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n                            <!-- <iframe width=\"420\" height=\"315\" frameborder=\"0\" allowfullscreen></iframe>   -->\r\n                        </div>\r\n                        <!-- <h2 class='title'>At a glance</h2>\r\n                        <div class=\"container\">\r\n                            <img [src]=\"images.get('manage-exhibits-window')\"/>\r\n                        </div> -->\r\n            \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <section class=\"getStarted\">\r\n            <h2 class='title'>Try it out!</h2>\r\n            <a class=\"btn-dark btn-getStarted\" routerLink='/learn'>Get Started</a>        \r\n        </section>\r\n    \r\n  <!-- <section class=\"section-carousel\">\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                    <carousel-ui [slideUrls]=\"slideUrls\">\r\n                    </carousel-ui>  \r\n              </div>\r\n          </div>\r\n      </div>\r\n     \r\n  </section> -->\r\n\r\n</div>\r\n";

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(567);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px}section{padding:50px 0px}.severity-slow-symbol:before,.severity-info-symbol:before,.my-close:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\"}.severity-slow-symbol:before,.severity-info-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\"}.severity-slow-symbol:before{content:\"\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.btn-base,.btn-light,.btn-dark{cursor:pointer;text-decoration:none;font-weight:500;transition:background-color .3s;display:inline-block;padding:5px 20px}.btn-dark{color:#fff !important;border:2px solid #fff;background:transparent}.btn-dark:hover{background-color:#fff;color:#2e302b !important}.btn-light{color:#2e302b !important;border:1px solid #2e302b;background-color:#f4f4f4}.btn-light:hover{background-color:#2e302b;color:#fff !important}.numberWrapper{display:flex;align-items:center}.numberWrapper-top{display:flex;align-items:flex-start}.number{margin-right:10px;display:flex;align-items:center;justify-content:center;height:35px;width:35px;color:#fff;background-color:#035762d9;border-radius:50%;flex-shrink:0}:host{width:100%}.card-collection{display:flex}.card-collection [class*=col-]{display:flex}.section-intro>.row{max-width:2000px;margin:0px auto}.section-intro .intro-wrapper{display:flex;flex-direction:column;width:380px}.section-intro .intro-wrapper .logoWrapper{position:absolute;bottom:0px;transform:translateY(50%);background:#fff;display:flex;align-items:center;justify-content:center;width:150px;height:150px;border-radius:50%}.section-intro .intro-wrapper .summaryBenefits{color:#fff;text-align:left;padding:20px}.section-intro .intro-wrapper .summaryBenefits .numberWrapper i{font-size:25px;margin-right:10px}.section-intro .intro-wrapper .summaryBenefits .subtitle{font-size:30px}.section-intro .intro-wrapper .subtitle{color:#fff;font-weight:100}.section-intro .intro-wrapper .header-wrapper{padding:40px 20px;background:#034a53;height:220px;position:relative;display:flex;justify-content:center;text-align:center;z-index:100;width:100%}.section-intro .intro-wrapper .header-content{flex-direction:column;display:flex;flex-grow:1;overflow:hidden}.section-intro .intro-wrapper .header-content .mobile-menu-wrapper{padding:20px;background:#035762d9}.section-intro .intro-wrapper .header-content .intro{background:#035762d9;position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;justify-content:center;flex-grow:1}.section-intro .intro-wrapper .header-content .intro .btn-getStarted{margin-right:10px}.section-intro .intro-wrapper .header-content .intro .product-section{min-height:500px}.section-intro .intro-wrapper .header-content .intro .btn-bar i{color:#fff;font-size:50px}.section-intro .prodImgWrapper .intro{background:#035762d9;position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;justify-content:center;padding:20px;flex-grow:1}.section-intro .prodImgWrapper .intro .subtitle{color:#fff;margin-bottom:30px;font-weight:100}.section-intro .prodImgWrapper .intro .btn-getStarted{margin-right:10px}.section-intro .prodImgWrapper .intro .product-section{min-height:500px}.section-intro .prodImgWrapper .intro .btn-bar i{color:#fff;font-size:50px}.section-intro .prodImgWrapper .word-app{box-shadow:rgba(0,0,0,.35) 0px 5px 15px;max-width:500px}.section-intro .prodImgWrapper .word-app .body{display:flex;background:#dcdcdc}.section-intro .prodImgWrapper .word-app .body .doc{padding:10px;padding-right:10px;flex:0px 1 1}.section-intro .prodImgWrapper .word-app .body .doc .doc-content{width:100%;height:100%}.section-intro .prodImgWrapper .word-app .body .zibbit{max-width:300px;overflow:hidden}.section-intro .prodImgWrapper .word-app .footer{height:20px;background:#f3f2f1}.section-intro .window-height{height:100vh;max-height:850px}.section-intro .prod-wrapper{height:100%;align-items:center;justify-content:center;display:flex;padding:20px}.section-intro .prod-wrapper .screenWrapper{box-shadow:rgba(0,0,0,.35) 0px 5px 15px;border-radius:5%;padding:15px;background-color:#2e302b;min-width:400px}.section-intro .product-wrapper{background-size:cover;background-repeat:no-repeat;background-position:100% 0%;display:flex;align-items:center;justify-content:flex-start}@media(max-width: 768px){.section-intro .product-wrapper{justify-content:center;height:unset}}#security-section .titleWrapper{display:flex;align-items:center;text-align:center}#security-section .titleWrapper h2{margin:0px}#security-section .titleWrapper i{font-size:25px;margin-right:10px}#security-section .summary{margin:20px 0px}#security-section .wrapper{padding:20px;max-width:700px;margin-top:20px;margin:0px auto}#security-section .wrapper ul{padding:0px 15px}#security-section .wrapper li{margin-bottom:20px}#product-section{background:#fff}#product-section .titleWrapper{text-align:center;color:#035762d9}#product-section .stamp>.row{align-items:flex-start;justify-content:center}#product-section .stamp .icon{font-size:40px}#product-section .stamp .features-block .features{margin:0px auto}#product-section .stamp .features-block .features>.row{justify-content:center}#product-section .stamp .features-block .features .feature{padding:20px;text-align:left;height:100%}#product-section .stamp .features-block .features .feature h2{font-size:20px;margin-bottom:0px}#product-section .stamp .features-block .features .feature i{color:#2e302b;font-size:25px}#product-section .stamp .features-block .features .feature .header{border-bottom:3px solid #035762d9;padding-top:20px;padding-bottom:5px;margin-bottom:10px;display:flex;align-items:center}#product-section .stamp .features-block .features .feature .header .subtitle{font-size:25px;padding-left:10px}#product-section .stamp .steps{display:flex;flex-direction:column;justify-content:space-evenly}#product-section .stamp .steps>div:not(:last-child){margin-bottom:20px}#product-section .stamp .steps>h2{font-weight:normal}#product-section .stamp .btn-bar{text-align:center}#product-section .checkbox{margin-right:10px;color:#2fa02f;font-size:30px}#product-section .img-wrapper{width:100px}.process{padding:50px 0px;background:#035762d9}.process .titleWrapper{text-align:center;color:#fff}.process .step{max-width:650px;margin:0px auto;margin-top:50px;justify-content:center}.process .step .stepFigure{box-shadow:rgba(0,0,0,.35) 0px 5px 15px}.process .step .stepSummary{color:#fff;padding:20px}.process .step .stepSummary ul{padding:0px;margin:0px}.process .step .stepSummary ul li{padding:0px;margin-left:30px;margin-top:20px}.process .step .stepSummary .numberWrapper .number{background:#fff;color:#034a53;font-weight:bold;font-size:18px}@media(max-width: 768px){.process .step{margin-top:100px}.process .step .stepSummary{padding:0px}.process .step .stepSummary ul{list-style:none}.process .step .stepSummary ul li{margin-left:0px}.process .step .stepFigure{margin-top:20px}.process .step .numberWrapper{margin:0px;flex-direction:column}.process .step .numberWrapper .subtitle{margin:10px 0px}}.process .sampleWrapper{margin-top:20px;text-align:center}.process .steps{justify-content:center}.process .numberWrapper{margin-bottom:20px}.process .numberWrapper .subtitle{font-size:20px;margin:0px}.process .exhibits{background:#034a53}.process .exhibits .subtitle{text-align:center;color:#fff;font-size:20px;padding:10px;margin:0px}.process .exhibits .pdf-collection{color:#fff;width:100%;text-align:center;padding:0px;margin:0px;list-style:none;display:flex;flex-wrap:wrap;justify-content:space-evenly}.process .exhibits .pdf-collection li{text-align:center;margin:10px;min-width:85px}.process .exhibits .pdf-collection li p{margin:0px;margin-top:5px;font-size:16px}.process .exhibits .pdf-collection li i{font-size:50px;font-weight:bold}.process .references{display:flex;flex-direction:column;align-items:center}.process .publish .pdf-wrapper .titleBar{display:flex;justify-content:space-between;align-items:center;background:#e52929;padding:5px 10px;color:#fff}.process .publish .pdf-wrapper .titleBar .item{font-weight:500}.process .publish .pdf-wrapper .titleBar .openPdf a{line-height:2px;color:#fff;text-decoration:underline}.process .publish .pdf-wrapper>.body{background:#fff;flex-grow:1;display:flex}.process .publish .pdf-wrapper>.body .page-wrapper{flex-grow:1;text-align:center;width:100%}.process .publish .appendix-wrapper{margin:10px;margin-top:0px;border:2px solid #dcdcdc}.process .publish .appendix-wrapper .subtitle{margin:10px}.process .publish .appendix{display:inline-block;text-align:left}.process .publish .appendix .subtitle{font-weight:500}.process .publish .appendix p{margin:0px}.process .publish .appendix ul{padding:10px;padding-top:0px;margin:0px}.process .publish .appendix ul li{display:flex;align-items:center}.process .publish .appendix ul li i{font-size:20px;margin-right:10px}.process .publish .bookmarks{background-color:#323639;color:#fff}.process .publish .bookmarks .subtitle{padding:10px 10px;padding-bottom:0px}.process .publish .bookmarks ul{font-size:10px;padding:10px;list-style:none;margin:0px}.process .publish .bookmarks ul li{display:flex;align-items:center}.process .publish .bookmarks ul li i{margin-right:10px}.process .publish .bookmarks ul li p{margin:0px;white-space:nowrap}.word-wrapper{width:100%}.word-wrapper>.body{background:#fff;flex-grow:1;display:flex}.word-wrapper>.body .page-wrapper{flex-grow:1}.word-wrapper .footer{height:20px;background:#f3f2f1}.word-wrapper .zibbit-pane{border-left:2px solid #708090;border-top:0px;min-width:105px}.word-wrapper .zibbit-pane .header{color:#708090;background:#f3f2f1;padding:5px}.word-wrapper .zibbit-pane .header h3{font-size:15px;margin:0px}.word-wrapper .zibbit-pane .body ul{margin:0px;padding:5px;list-style:none}.word-wrapper .zibbit-pane .body ul p{margin:5px}.word-wrapper .zibbit-pane .body .insert{background:#035762d9;text-align:center}.word-wrapper .zibbit-pane .body .insert p{font-size:12px;color:#fff;padding:2px 4px;margin:0px}.glance{background:#fff;color:#035762d9}.glance .title{text-align:center;margin-bottom:50px}.glance .vid-wrapper{text-align:center}.glance .vid-wrapper iframe{width:100%;height:315px;max-width:560px}.getStarted{text-align:center;background:#035762d9;color:#fff}.getStarted .title{margin-bottom:30px}", ""]);



/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "<div class=\"page page-learn\">\r\n    <section class=\"section-example\">\r\n            <div class=\"row no-gutters\">\r\n                <div class=\"col-12 col-md-auto stamp-wrapper\">\r\n                    <div class=\"download-stamp\">\r\n                        <h1 class=\"title\">Get Started</h1>\r\n                        <p>Download the latest version of Zibbit</p>\r\n                        <a class=\"btn-dark\" routerLink='/downloads'>Download</a>            \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm\">\r\n                    <div class=\"steps\">\r\n                        <div class=\"step\" *ngFor=\"let chapter of chapters; let i = index\">\r\n                            <div class=\"numberWrapper\">\r\n                                <div class=\"number\">{{ i + 1 }}</div>\r\n                                <h2 class=\"subtitle\">{{chapter.title}}</h2>    \r\n                            </div>\r\n                            <div class=\"step-content-wrapper\" *ngFor=\"let step of chapter.steps\">\r\n\r\n                                <div class=\"row no-gutters step-content\">\r\n                                    <div class=\"col-12 col-sm\">\r\n                                        <div class=\"summary-wrapper\">\r\n                                            <div class=\"ribbon-wrapper\">\r\n                                                <ribbon-ui [selectedIconUrl]=\"step.ribbonIconUrl\" [selectedIconPosition]=\"step.ribbonIconPosition\"></ribbon-ui>\r\n                                            </div>\r\n                                            <div class=\"description-wrapper\">\r\n                                                <h3 class=\"step-title\">{{step.title}}</h3>\r\n                                                <ul class=\"description\">\r\n                                                    <li *ngFor=\"let item of step.items\">\r\n                                                        <p>{{item}}</p>\r\n                                                    </li>\r\n                                                </ul>    \r\n                                            </div>\r\n                                        </div> \r\n       \r\n                                    </div>\r\n                                    <div class=\"col-auto\">\r\n                                        <div class=\"img-wrapper-pane\">\r\n                                            <img [src]=\"step.imgUrl\"/>\r\n                                        </div>    \r\n                                    </div>\r\n\r\n                                </div>\r\n    \r\n                            </div> \r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    </section>\r\n</div>\r\n\r\n      \r\n";

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(570);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px}section{padding:50px 0px}.severity-slow-symbol:before,.severity-info-symbol:before,.my-close:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\"}.severity-slow-symbol:before,.severity-info-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\"}.severity-slow-symbol:before{content:\"\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.btn-base,.btn-light,.btn-dark{cursor:pointer;text-decoration:none;font-weight:500;transition:background-color .3s;display:inline-block;padding:5px 20px}.btn-dark{color:#fff !important;border:2px solid #fff;background:transparent}.btn-dark:hover{background-color:#fff;color:#2e302b !important}.btn-light{color:#2e302b !important;border:1px solid #2e302b;background-color:#f4f4f4}.btn-light:hover{background-color:#2e302b;color:#fff !important}.numberWrapper{display:flex;align-items:center}.numberWrapper-top{display:flex;align-items:flex-start}.number{margin-right:10px;display:flex;align-items:center;justify-content:center;height:35px;width:35px;color:#fff;background-color:#035762d9;border-radius:50%;flex-shrink:0}:host{width:100%}.section-example{padding:0px}.section-example .stamp-wrapper{background:#035762d9;color:#fff;padding:50px 30px}.section-example .stamp-wrapper a{margin-top:20px}.section-example .stamp-wrapper .download-stamp{max-width:200px}@media(max-width: 768px){.section-example .stamp-wrapper .download-stamp{text-align:center;max-width:100%}}.section-example .numberWrapper{justify-content:center}.section-example .subtitle{margin:0px}.section-example .steps{padding:50px;max-width:750px}@media(max-width: 768px){.section-example .steps{text-align:center;padding:20px}}.section-example .step{text-align:left}.section-example .step-content-wrapper{margin:50px 0px}.section-example .step-content-wrapper .step-content{justify-content:center}.section-example .step-content-wrapper ul{margin:0px;padding:0px 20px}.section-example .step-content-wrapper .step-title{font-size:20px}.section-example .step-content-wrapper .summary-wrapper{box-shadow:rgba(0,0,0,.35) 0px 5px 15px;margin-bottom:30px}.section-example .step-content-wrapper .description-wrapper{padding:20px}.section-example .step-content-wrapper .description-wrapper .description{margin-top:20px;max-width:500px}.section-example .step-content-wrapper p{margin:0px}.section-example .step-content-wrapper li{margin-bottom:10px}.section-example .step-content-wrapper .img-wrapper-pane{max-width:230px;margin:0px 30px}.section-example .step-content-wrapper .img-wrapper-pane img{box-shadow:rgba(0,0,0,.35) 0px 5px 15px}", ""]);



/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-wrapper {{(type === 4) ? 'set-width' : ''}}\">\r\n    <div class='logo'>\r\n        <!-- <i class=\"fas fa-frog\"></i> -->\r\n        <img src= {{logoUrl}}>\r\n        <h1 *ngIf=\"ShowText\" class=\"appName\">Zibbit</h1>\r\n    </div> \r\n</div>\r\n";

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(573);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px}section{padding:50px 0px}.severity-slow-symbol:before,.severity-info-symbol:before,.my-close:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\"}.severity-slow-symbol:before,.severity-info-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\"}.severity-slow-symbol:before{content:\"\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.btn-base,.btn-light,.btn-dark{cursor:pointer;text-decoration:none;font-weight:500;transition:background-color .3s;display:inline-block;padding:5px 20px}.btn-dark{color:#fff !important;border:2px solid #fff;background:transparent}.btn-dark:hover{background-color:#fff;color:#2e302b !important}.btn-light{color:#2e302b !important;border:1px solid #2e302b;background-color:#f4f4f4}.btn-light:hover{background-color:#2e302b;color:#fff !important}.numberWrapper{display:flex;align-items:center}.numberWrapper-top{display:flex;align-items:flex-start}.number{margin-right:10px;display:flex;align-items:center;justify-content:center;height:35px;width:35px;color:#fff;background-color:#035762d9;border-radius:50%;flex-shrink:0}.logo-wrapper{text-align:center}.set-width{width:200px}.logo .appName{margin:0px;font-size:28px;letter-spacing:2.5px}", ""]);



/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<nav class='main-nav'>\r\n    <ul class=\"nav-list\">\r\n        <li class='nav-item'>\r\n            <a class=\"btn-light\" (click)=\"notifyNavigationOccured($event)\" [routerLink]=\"['/learn']\"> Get Started </a>\r\n        </li>\r\n        <li class='nav-item'>\r\n            <a class=\"btn-light\" (click)=\"notifyNavigationOccured($event)\" [routerLink]=\"['/downloads']\"> Download </a>\r\n        </li>\r\n    </ul>\r\n</nav>";

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(576);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px}section{padding:50px 0px}.severity-slow-symbol:before,.severity-info-symbol:before,.my-close:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\"}.severity-slow-symbol:before,.severity-info-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\"}.severity-slow-symbol:before{content:\"\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.btn-base,.btn-light,.btn-dark{cursor:pointer;text-decoration:none;font-weight:500;transition:background-color .3s;display:inline-block;padding:5px 20px}.btn-dark{color:#fff !important;border:2px solid #fff;background:transparent}.btn-dark:hover{background-color:#fff;color:#2e302b !important}.btn-light{color:#2e302b !important;border:1px solid #2e302b;background-color:#f4f4f4}.btn-light:hover{background-color:#2e302b;color:#fff !important}.numberWrapper{display:flex;align-items:center}.numberWrapper-top{display:flex;align-items:flex-start}.number{margin-right:10px;display:flex;align-items:center;justify-content:center;height:35px;width:35px;color:#fff;background-color:#035762d9;border-radius:50%;flex-shrink:0}:host(.footer) .nav-list{flex-direction:column}:host(.footer) .nav-list .nav-item{margin:0px}:host(.mobile) .nav-list{height:100vh;width:100%;flex-direction:column}:host(.mobile) .nav-list .nav-item{margin:0px;padding:0px;margin-bottom:5px}:host(.mobile) .nav-list .nav-item a{display:block;padding:5px 20px}.nav-list{display:flex;list-style:none;padding:0px;margin:0px}.nav-list .nav-item{margin-left:10px}.nav-list .nav-item a{color:#2e302b;border:1px solid #2e302b;display:block;padding:5px 20px;text-decoration:none;font-weight:500;transition:background-color .3s}.nav-list .nav-item a:hover{background-color:#2e302b;color:#fff}", ""]);



/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Notice =
/** @class */
function () {
  function Notice(message, severity, endCallback) {
    if (severity === void 0) {
      severity = "info";
    }

    if (endCallback === void 0) {
      endCallback = null;
    }

    this._ended = false;
    this.message = message;
    this.severity = severity;
    this._endCallback = endCallback;
  }

  Object.defineProperty(Notice.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });

  Notice.prototype.begin = function (delayMs, durationMs) {
    var _this = this;

    if (delayMs === void 0) {
      delayMs = 0;
    }

    if (durationMs === void 0) {
      durationMs = 3000;
    }

    this._noticeDelayTimer = setTimeout(function () {
      if (_this._ended) {
        return;
      }

      _this._isVisible = true;
      _this._noticeDurationTimer = setTimeout(function () {
        _this.end();
      }, durationMs);
    }, delayMs);
  };

  Notice.prototype.end = function () {
    this._ended = true;
    clearTimeout(this._noticeDelayTimer);
    clearTimeout(this._noticeDurationTimer);
    this._isVisible = false;

    if (this._endCallback !== null) {
      this._endCallback(this);
    }
  };

  return Notice;
}();

exports.Notice = Notice;

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"['notice-bar']\">\r\n    <div [ngClass]=\"['severity-colour', 'severity-colour-' + notice.severity]\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"item-wrapper\">\r\n                        <div class=\"content-wrapper\">\r\n                            <!-- <i [ngClass]=\"['severity-' + notice.severity + '-symbol']\"></i>         -->\r\n                            <p>{{notice.message}}</p>\r\n                        </div>\r\n                        <a (click)=\"closeClickHandler($event)\" class=\"my-close\"></a>\r\n                        <!-- <i (click)=\"closeClickHandler()\" class=\"my-close\"></i> -->\r\n                    </div>\r\n                    <!-- <i [ngClass]=\"['severity-' + notice.severity + '-symbol']\"></i> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(580);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px}section{padding:50px 0px}.severity-slow-symbol:before,.severity-info-symbol:before,.my-close:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\"}.severity-slow-symbol:before,.severity-info-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\"}.severity-slow-symbol:before{content:\"\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.btn-base,.btn-light,.btn-dark{cursor:pointer;text-decoration:none;font-weight:500;transition:background-color .3s;display:inline-block;padding:5px 20px}.btn-dark{color:#fff !important;border:2px solid #fff;background:transparent}.btn-dark:hover{background-color:#fff;color:#2e302b !important}.btn-light{color:#2e302b !important;border:1px solid #2e302b;background-color:#f4f4f4}.btn-light:hover{background-color:#2e302b;color:#fff !important}.numberWrapper{display:flex;align-items:center}.numberWrapper-top{display:flex;align-items:flex-start}.number{margin-right:10px;display:flex;align-items:center;justify-content:center;height:35px;width:35px;color:#fff;background-color:#035762d9;border-radius:50%;flex-shrink:0}.notice-bar .item-wrapper{display:flex;align-items:center;justify-content:space-between}.notice-bar .content-wrapper{display:flex;align-items:center;justify-content:flex-start;padding:10px 0px}.notice-bar .content-wrapper p{padding-right:10px;margin:0px;color:#fff}.notice-bar .severity-colour{background-color:#966d96}.notice-bar .serverity-warning{background-color:#ff0}.notice-bar .serverity-error{background-color:red}", ""]);



/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"['page-wrapper']\">\r\n    <ul class=\"notice-collection\">\r\n        <li *ngFor=\"let notice of notices\" [hidden]=\"!notice.isVisible\">\r\n            <noticeBar-ui (closeNoticeEvent)=\"notice.end()\" [hidden]=\"!notice.isVisible\" [notice]=\"notice\"></noticeBar-ui>\r\n        </li>\r\n    </ul>      \r\n    <div class=\"content\">\r\n        <splashscreen-ui id=\"pageSplash\" [displayType]=\"'absolute'\" [size]=\"'large'\" [hidden]=\"!isBusy\"></splashscreen-ui>\r\n        <ng-content></ng-content>\r\n    </div>\r\n    \r\n</div>";

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(583);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, ".page-wrapper{height:100%;display:flex;flex-direction:column;width:100%}.page-wrapper .notice-collection{padding:0px;margin:0px;list-style:none;background-color:#2e302b}.page-wrapper .notice-collection li:not(:first-child){margin-top:3px}.page-wrapper .content{position:relative;flex-grow:1;min-height:250px}.page-wrapper .content splashscreen-ui{position:absolute;z-index:100;top:0px;bottom:0px;width:100%}", ""]);



/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports = "<div class=\"ribbon\">\r\n    <div class=\"titleBar\">\r\n        <div class=\"item\">Word{{(docTitle ? ' - ' + docTitle : '')}}</div>\r\n    </div>\r\n    <div *ngIf=\"showTabs\" class=\"tabs-wrapper\">\r\n        <div class=\"tabs d-flex\">\r\n            <div class=\"tab\">File</div>\r\n            <div class=\"tab\">Home</div>\r\n            <div class=\"tab selected\">Zibbit</div>\r\n            <div class=\"tab\">Help</div>    \r\n        </div>\r\n        <div *ngIf=\"showRibbon\" class=\"ribbon-content\">\r\n            <div [ngClass]=\"i == selectedIconPosition ? 'img-wrapper-icon selected' : 'img-wrapper-icon'\" *ngFor=\"let img of iconUrls; let i = index\">\r\n                <img [src]=\"img\"/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(586);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px}section{padding:50px 0px}.severity-slow-symbol:before,.severity-info-symbol:before,.my-close:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\"}.severity-slow-symbol:before,.severity-info-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\"}.severity-slow-symbol:before{content:\"\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.btn-base,.btn-light,.btn-dark{cursor:pointer;text-decoration:none;font-weight:500;transition:background-color .3s;display:inline-block;padding:5px 20px}.btn-dark{color:#fff !important;border:2px solid #fff;background:transparent}.btn-dark:hover{background-color:#fff;color:#2e302b !important}.btn-light{color:#2e302b !important;border:1px solid #2e302b;background-color:#f4f4f4}.btn-light:hover{background-color:#2e302b;color:#fff !important}.numberWrapper{display:flex;align-items:center}.numberWrapper-top{display:flex;align-items:flex-start}.number{margin-right:10px;display:flex;align-items:center;justify-content:center;height:35px;width:35px;color:#fff;background-color:#035762d9;border-radius:50%;flex-shrink:0}.ribbon{background:#f3f2f1}.ribbon .titleBar{background:#185abd;padding:5px;color:#fff}.ribbon .titleBar .item{margin-left:10px;font-weight:500}.ribbon .tabs-wrapper{width:300px}.ribbon .tabs{display:flex;justify-content:space-around;color:#000}.ribbon .tabs .tab{margin:10px;font-size:14px}.ribbon .tabs .selected{filter:blur(0px);border-bottom:5px solid #185abd;font-weight:500}.ribbon .ribbon-content{display:flex;justify-content:space-around}.ribbon .ribbon-content .img-wrapper-icon{max-width:32px;margin:10px}.ribbon .ribbon-content .img-wrapper-icon img{filter:blur(8px)}.ribbon .ribbon-content .selected img{filter:blur(0px)}", ""]);



/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"['splash-screen', 'displayType-' + displayType]\">\r\n    <div [ngClass]=\"['content-wrapper', 'size-' + size]\">\r\n        <div class='img-wrapper'>\r\n            <img src={{spinnerImgUrl}}>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(589);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// Module
exports.push([module.i, ".splash-screen img{max-height:100%;max-width:100%}.splash-screen .content-wrapper{display:flex;justify-content:center;align-items:center;opacity:.4}.splash-screen .size-large{background:#dcdcdc}.splash-screen .size-large .img-wrapper{height:100px}.splash-screen .size-small .img-wrapper{height:20px}.displayType-absolute,.displayType-absolute .content-wrapper{height:100%}", ""]);



/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ProductInfoService": 50,
	"./ProductInfoService.ts": 50
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 590;

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Bootstrapper_1 = __webpack_require__(247);

var core_1 = __webpack_require__(1);

var platform_browser_1 = __webpack_require__(58);

var forms_1 = __webpack_require__(592);

var router_1 = __webpack_require__(186);

var ApplicationRoutes_1 = __webpack_require__(593);

var AppComponent_1 = __webpack_require__(182); // import {HomeComponent} from '../components/HomeComponent'
// import {HeaderComponent} from '../components/HeaderComponent'
// import {FooterComponent} from '../components/FooterComponent'
// import { LearnComponent } from '../components/LearnComponent';
// import { DownloadsComponent } from '../components/DownloadsComponent';
// import { CardComponent } from '../components/CardComponent';
// import { MenuComponent } from '../components/MenuComponent';
// import { CarouselComponent } from '../components/CarouselComponent';


function initializeApp(injector) {
  return function () {
    return Promise.resolve(); // return Bootstrapper.loadAsyncServices(injector)
    // .then(function(){
    //     console.log("ini success");
    // }, function(fail){
    //     console.log("init fail");
    //     console.log(fail);
    // })   
  };
}

exports.initializeApp = initializeApp;

var MainModuleLibrary =
/** @class */
function () {
  function MainModuleLibrary() {}

  MainModuleLibrary = __decorate([core_1.NgModule({
    imports: [router_1.RouterModule.forRoot(ApplicationRoutes_1.ApplicationRoutes, {
      scrollPositionRestoration: 'enabled'
    }), platform_browser_1.BrowserModule, forms_1.FormsModule],
    // declarations: [
    //     HeaderComponent, 
    //     AppComponent, 
    //     FooterComponent, 
    //     HomeComponent,
    //     DownloadsComponent,
    //     LearnComponent, 
    //     CardComponent, 
    //     MenuComponent, 
    //     CarouselComponent
    // ],
    declarations: Bootstrapper_1.Bootstrapper.components.map(function (mod) {
      return mod['mod'];
    }),
    providers: [{
      provide: core_1.APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [core_1.Injector]
    }],
    bootstrap: [AppComponent_1.AppComponent]
  })], MainModuleLibrary);
  return MainModuleLibrary;
}();

exports.MainModuleLibrary = MainModuleLibrary;

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //import {CustomerComponent} from '../components/CustomerComponent';

var HomeComponent_1 = __webpack_require__(184);

var LearnComponent_1 = __webpack_require__(185);

var DownloadsComponent_1 = __webpack_require__(183); //import {WelcomeComponent} from "../Component/WelcomeComponent";


exports.ApplicationRoutes = [{
  path: 'downloads',
  component: DownloadsComponent_1.DownloadsComponent
}, {
  path: 'learn',
  component: LearnComponent_1.LearnComponent
}, {
  path: 'home',
  component: HomeComponent_1.HomeComponent
}, {
  path: '',
  component: HomeComponent_1.HomeComponent
}];

/***/ })

},[[475,0,1]]]);
//# sourceMappingURL=app.js.map