function routes(a){a.state("font",{url:"font",parent:"logoapp",templateUrl:"modules/workbench/typography.html",controller:"TypographyController as ctrl"}).state("typography",{url:"typography",parent:"logoapp",templateUrl:"modules/workbench/typesetting.html",controller:"TypesettingController as ctrl"}).state("icongraphy",{url:"icongraphy",parent:"logoapp",templateUrl:"modules/workbench/icongraphy.html",controller:"IcongraphyController as ctrl"}).state("color",{url:"color",parent:"logoapp",templateUrl:"modules/workbench/colors.html",controller:"ColorController as ctrl"}).state("finish",{url:"finish",parent:"logoapp",templateUrl:"modules/workbench/final.html",controller:"FinishController as ctrl"})}!function(){"use strict";function a(a,b){a._=window._,a.icons=[],WebFont.load({google:{families:b.getFonts()}})}angular.module("5minlogo",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ui.router","perfect_scrollbar","anim-in-out"]).run(a),a.$inject=["$rootScope","LogoService"]}(),function(){"use strict";function a(a){a.otherwise("/font")}angular.module("5minlogo").config(a),a.$inject=["$urlRouterProvider"]}(),function(){"use strict";function a(){function a(){return{font:{type:c()[0],style:"normal",color:"black"},icon:{shape:"square",style:"filled",shadow:!1},color:f()[4]}}function b(){return["iconic","textual","icon-left","icon-right","icon-top"]}function c(){return["Roboto","Open Sans","Slabo 27px","Lato","Oswald","Raleway","PT Sans","Roboto Slab","Droid Sans","Lora","Ubuntu","Droid Serif","PT Sans Narrow","PT Serif","Bitter","Dosis","Abril Fatface","Lobster","Comfortaa","Chewy"]}function d(){return[{name:"Normal",style:"normal"},{name:"Upper Case",style:"uppercase"},{name:"Lower Case",style:"lowercase"},{name:"Capitalize",style:"capitalize"},{name:"Small Caps",style:"smallcaps"}]}function e(){return[{name:"Light",style:"light"},{name:"Regular",style:"regular"},{name:"Bold",style:"bold"}]}function f(){return[{bg:"ff8b8b",primary:"f9f8e6"},{bg:"f9f7e8",primary:"62bfad"},{bg:"61bfad",primary:"ffffff"},{bg:"e54b4b",primary:"ffffff"},{bg:"167c80",primary:"ffffff"},{bg:"b7e3e4",primary:"f03f35"},{bg:"efe8d8",primary:"ff4552"},{bg:"005397",primary:"e13334"},{bg:"32b67a",primary:"ffffff"},{bg:"facbc0",primary:"000000"},{bg:"f3c9dd",primary:"ceecf7",comp:"fffdff"},{bg:"0bbcd6",primary:"e6625e"},{bg:"bfb5d7",primary:"ffffff"},{bg:"bea1a5",primary:"2d1fe8",comp:"000000"},{bg:"f0cf61",primary:"ebe8e1"},{bg:"0e38b1",primary:"ffffff"},{bg:"a6cfe2",primary:"0b0c11",comp:"ffffff"},{bg:"371722",primary:"bbab9b",comp:"ffffff"},{bg:"c7c6c4",primary:"008e8f"},{bg:"d9baad",primary:"cf2f89",comp:"232984"},{bg:"f1c3b8",primary:"19227d"},{bg:"eec0db",primary:"162bf4"},{bg:"ef3e4a",primary:"fe667b",comp:"012f63"},{bg:"c0c2ce",primary:"fe667b"},{bg:"b6cac0",primary:"b32a48",comp:"2a366a"},{bg:"fdf06f",primary:"d31b33"},{bg:"b6cac0",primary:"c02a1b"},{bg:"edb5bd",primary:"bedfd4",comp:"000000"},{bg:"17c37b",primary:"f4f4f4"},{bg:"2c3979",primary:"15a29c"},{bg:"1b1d1c",primary:"ea1821"},{bg:"e88565",primary:"181a27"},{bg:"ffefe5",primary:"1fc8a9"},{bg:"f4c7ee",primary:"008fd3"},{bg:"77eedf",primary:"28292b"},{bg:"e57066",primary:"28292b"},{bg:"eed974",primary:"28292b"},{bg:"fbfe56",primary:"0b64c0"},{bg:"a7bbc3",primary:"c886a2",comp:"ffffff"},{bg:"3c485e",primary:"e9e8d4"},{bg:"055a5b",primary:"e6e6e6"},{bg:"178e96",primary:"fde3c8"},{bg:"d3e8e1",primary:"e44a66"},{bg:"cba0aa",primary:"fae397"},{bg:"9c9cdd",primary:"f9bdbd"},{bg:"20ad65",primary:"fec8be"},{bg:"e75153",primary:"58b89d"},{bg:"4f3a4b",primary:"e75152"},{bg:"112378",primary:"fbeccf"},{bg:"e33946",primary:"fdedb2"},{bg:"fedccc",primary:"ffffff",comp:"f79e7c"},{bg:"00b28b",primary:"edc3c7",comp:"ffffff"},{bg:"9357a9",primary:"000000",comp:"ffffff"},{bg:"c6d7c7",primary:"ff5035",comp:"c88a6b"},{bg:"b1fdeb",primary:"000000",comp:"ffffff"},{bg:"bef6e9",primary:"bb828b",comp:"ffffff"},{bg:"776ea7",primary:"cc9ab5",comp:"9fa8e3"},{bg:"eaeaea",primary:"abcee2",comp:"d7b599"},{bg:"ef303b",primary:"481c19"},{bg:"1812d6",primary:"ffffff"},{bg:"fffde7",primary:"189ba3",comp:"ec0b19"},{bg:"f1d3d3",primary:"1539cf",comp:"1539cf"},{bg:"d1e9e3",primary:"f3bfa9"},{bg:"7de0e6",primary:"ff2a93"},{bg:"3b755f",primary:"f2cb6c",comp:"000000"},{bg:"ce7182",primary:"85ceba",comp:"ffffff"},{bg:"340b0b",primary:"9b8fff"},{bg:"f8ebee",primary:"0c3934"},{bg:"ff9966",primary:"e2b7c1"},{bg:"0033ff",primary:"cdffcc"},{bg:"75ffc0",primary:"7a30cf"},{bg:"fb9b2a",primary:"0c00ff"},{bg:"ff8fa4",primary:"e5e8dc"},{bg:"000000",primary:"ff0000"},{bg:"083ea7",primary:"1fde91"},{bg:"674b7c",primary:"dd705c"},{bg:"19aad1",primary:"ffcc4c"},{bg:"12162d",primary:"8b743d"},{bg:"121738",primary:"d17c78"},{bg:"0c485e",primary:"feb904"},{bg:"fc3c2d",primary:"042d5b"},{bg:"864bff",primary:"00ffcb"},{bg:"ef5b09",primary:"54120a"},{bg:"97b8a3",primary:"707c26"},{bg:"ffd101",primary:"f000ef"},{bg:"c26b6a",primary:"1d0444"},{bg:"e3e3e3",primary:"a68a73"},{bg:"ff4c06",primary:"0d29ff"},{bg:"cdff06",primary:"0606ff"},{bg:"0c485e",primary:"ffdcd0"},{bg:"1f3b34",primary:"ffbc00"},{bg:"384d9d",primary:"f6f3eb"},{bg:"e10000",primary:"004e25"},{bg:"f64a00",primary:"2a4ed1"},{bg:"89937a",primary:"ff9320"},{bg:"c39d63",primary:"2c159d"},{bg:"00fdff",primary:"5c22ff"},{bg:"b18ae0",primary:"87dcfa"},{bg:"96d0ff",primary:"a46798"},{bg:"3c225f",primary:"17e1e3"},{bg:"ff6b61",primary:"3d6d4f"},{bg:"eeb200",primary:"502f7e"}]}function g(){return["none","circle","square","diamond"]}function h(){return[{name:"Filled",style:"filled"},{name:"Outlined",style:"outlined"}]}return{getDefaultConfig:a,getLogoLayouts:b,getFonts:c,getStyles:d,getFontWeight:e,getColorClaimThemes:f,getIconShapes:g,getIconStyles:h}}angular.module("5minlogo").service("LogoService",a),a.$inject=[]}(),function(){"use strict";function a(){function a(){var a={};return a}function b(){var a={auth:{login:function(){return c("o/oauth2","/login","16-03-26")},getSubPassword:function(){return c("o/oauth2","/login","16-03-26")}},oauth:{authorize:function(){return c("o/oauth2","/auth","16-05-16")}}};return a}function c(a,b,c){var e={};return"/"!=a.charAt(0)&&(a="/"+a),e.url=d+a+b,e.xVersion=c,e}var d="http://accounts.intouch.com/";return{B2B:a(),B2C:b(),$get:function(){return this}}}angular.module("5minlogo").provider("Endpoints",a)}(),function(){"use strict";function a(a){a.state("logoapp",{url:"/","abstract":!0,templateUrl:"components/layout/index.html"})}angular.module("5minlogo").config(a),a.$inject=["$stateProvider"]}(),function(){"use strict";function a(a,b){a.logo=b.getDefaultConfig(),a.logo.text="BowTie";var c=this;c.layouts=b.getLogoLayouts(),c.iconStyle={color:"#"+a.logo.textColor,"background-color":"#"+a.logo.bgColor},c.saveLogo=function(a){html2canvas(document.getElementById("logo-"+a),{onrendered:function(b){var c=b.toDataURL(),d="download-anchor-"+a,e=document.getElementById(d);e.setAttribute("href",c),e.click()}})}}angular.module("5minlogo").controller("PreviewController",a),a.$inject=["$rootScope","LogoService"]}(),function(){"use strict";function a(a,b){function c(b){a.logo.color=b,a.logo.font.color="#"+b.bg}var d=this;d.colors=b.getColorClaimThemes(),d.applyColor=c}angular.module("5minlogo").controller("ColorController",a),a.$inject=["$rootScope","LogoService"]}(),function(){"use strict";function a(a,b,c){var d=this;d.iconShape=c.getIconShapes(),d.iconStyle=c.getIconStyles(),d.setIconShape=function(a){b.logo.icon.shape=a},d.setIconStyle=function(a){b.logo.icon.style=a.style},d.handleUploadedFile=function(a){console.log();var b=a.target.files;console.log(b)},a.iconUploaded=function(a){console.log(a.files);var c=new FileReader;c.onload=function(a){console.log(c),b.icons.push({src:c.result}),b.logo.icon.symbol=c.result,b.$apply()},c.onprogress=function(a){console.log(1)},c.readAsDataURL(a.files[0])}}angular.module("5minlogo").controller("IcongraphyController",a),a.$inject=["$scope","$rootScope","LogoService"]}(),function(){"use strict";function a(a,b){var c=this;c.weight=b.getFontWeight(),c.styles=b.getStyles(),c.setFontStyle=function(b){a.logo.font.style=b.style},c.setFontWeight=function(b){a.logo.font.weight=b.style},c.setFontColor=function(b){a.logo.font.color=b}}angular.module("5minlogo").controller("TypesettingController",a),a.$inject=["$rootScope","LogoService"]}(),function(){"use strict";function a(a,b){var c=this;c.fonts=b.getFonts(),c.setFontFamily=function(b){a.logo.font.type=b}}angular.module("5minlogo").controller("TypographyController",a),a.$inject=["$rootScope","LogoService"]}(),function(){"use strict";angular.module("5minlogo").config(routes)}(),routes.$inject=["$stateProvider"],angular.module("5minlogo").run(["$templateCache",function(a){"use strict";a.put("components/layout/index.html",'<div id="logoapp"><div class="navbar"><header><div class="logo"></div></header><footer><div class="attribution"><p>This project is inspired by this awesome article,</p><span>Colors<a target="_blank" href="http://www.vanschneider.com/colors/">ColorClaim</a></span><span>Logos<a target="_blank" href="https://thenounproject.com/">TheNounProject</a></span></div><div class="created"><span>by Ahmed Gaber with<i class="fa fa-heart"></i></span></div></footer></div><section><div id="preview" ng-controller="PreviewController as ctrl"><div ng-repeat="layout in ctrl.layouts" class="createdLogoWrapper"><div class="save-bar"><button ng-click="ctrl.saveLogo(layout)"><i class="fa fa-download fa-lg"></i></button><a id="download-anchor-{{layout}}" download="logo-{{layout}}.png"></a></div><div id="logo-{{layout}}" class="createdLogo {{layout}} {{logo.font.style}} {{logo.font.weight}} {{logo.icon.shape}}"><!-- filled logo--><div ng-if="logo.icon.style === &quot;filled&quot;" style="color:#{{logo.color.primary}}" class="icon"><div style="background-color:#{{logo.color.bg}}" class="shape"></div><div class="figure"><span ng-if="!logo.icon.symbol">{{logo.text.charAt(0)}}</span><img ng-if="!!logo.icon.symbol" ng-src="{{logo.icon.symbol}}"></div></div><!--outlined logo--><div ng-if="logo.icon.style !== &quot;filled&quot;" style="color:#{{logo.color.bg}}" class="icon"><div style="border:3px solid #{{logo.color.bg}}" class="shape"></div><div class="figure"><span ng-if="!logo.icon.symbol">{{logo.text.charAt(0)}}</span><img ng-if="!!logo.icon.symbol" ng-src="{{logo.icon.symbol}}"></div></div><div ng-bind="logo.text" style="font-family:\'{{logo.font.type}}\';color:{{logo.font.color}}" class="text"></div></div><div class="bg-drop transBG"></div></div></div><section id="workbench"><ul class="thepager"><li><a ui-sref="font" ui-sref-active="active">Pick Font</a></li><li><a ui-sref="typography" ui-sref-active="active">Typography</a></li><li><a ui-sref="icongraphy" ui-sref-active="active">Icon</a></li><li><a ui-sref="color" ui-sref-active="active">Color</a></li><li><a ui-sref="finish" ui-sref-active="active">Finish</a></li></ul><section ui-view="" data-anim-speed="300" class="toolbox anim-in-out anim-fade"></section></section></section></div>'),a.put("modules/workbench/colors.html",'<div><h2>Pick Color Theme<small class="attribution">from<a href="http://www.vanschneider.com/colors/" target="_blank">ColorClaim</a></small></h2><perfect-scrollbar wheel-propagation="true" wheel-speed="1" min-scrollbar-length="10" class="scroller color-palette"><ul class="select"><li ng-repeat="color in ctrl.colors" style="background-color:#{{color.bg}}" ng-click="ctrl.applyColor(color)" class="color-element"><span style="color:#{{color.primary}}">{{$index+1}}</span></li></ul></perfect-scrollbar></div>'),a.put("modules/workbench/final.html",'<div><h2>You Are Awesome</h2><p class="attention"><i class="fa fa-warning"></i>Please consider attributions for Creative Commons icons you may used from TheNounProject, this is small payback for awesome creators that motivate them to provide more free stuff.</p><p>Almost there, click the download icon in the logo box to download it</p><p>This is quick DoIt project by myself, 100% free I wrote an article about this project<a href="" target="_blank">here.</a>This project is for developers who looking for quick logo for their small projects or side project, and users who want quick logo, Perfect logo design is huge process that requires professional designer, I do advise you to refer to professional designers in order to make perfect logo for your business.</p><p>If you liked it, please share it and upvote on ProductHunt.</p><div class="social-buttons"><a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Faigdonia.me%2F5minlogo%2F&amp;amp;src=sdkpreparse" target="_blank"><i class="fa fa-facebook"></i>Tell Friends</a><a><i class="fa fa-product-hunt"></i>Upvote us.</a><a href="https://twitter.com/intent/tweet?text=I%27ve%20just%20created%20my%20logo%20with&amp;url=http://aigdonia.me/5minlogo/" target="_blank"><i class="fa fa-twitter"></i>Tweet about it.</a></div></div>'),a.put("modules/workbench/icongraphy.html",'<div><h2>Pick Icon <small>(only Public Domain)</small><small class="attribution"><a href="https://thenounproject.com/" target="_blank">TheNounProject</a></small></h2><div class="uploader"><label for="icon-uploader"><i class="fa fa-upload"></i>Upload Icon</label><input id="icon-uploader" type="file" onchange="angular.element(this).scope().iconUploaded(this)"></div></div><div ng-if="icons.length&gt;0"><perfect-scrollbar wheel-propagation="true" wheel-speed="1" min-scrollbar-length="10" class="scroller shape-selector icon-selector"><ul class="select"><li ng-repeat="icon in icons" ng-class="{\'picked\':(weight.style === logo.font.weight)}" ng-click="ctrl.setFontWeight(weight)" class="shape-item"><img src="{{icon.src}}" class="icon-preview"></li></ul></perfect-scrollbar></div><div><h2>Icon Shape</h2><perfect-scrollbar wheel-propagation="true" wheel-speed="1" min-scrollbar-length="10" class="scroller shape-selector"><ul class="select"><li ng-repeat="shape in ctrl.iconShape" ng-class="{\'picked\':(shape === logo.icon.shape)}" ng-click="ctrl.setIconShape(shape)" class="shape-item"><span class="{{shape}}">{{shape}}</span></li></ul></perfect-scrollbar></div><div><h2>Icon Style</h2><perfect-scrollbar wheel-propagation="true" wheel-speed="1" min-scrollbar-length="10" class="scroller"><ul class="select"><li ng-repeat="style in ctrl.iconStyle" ng-class="{\'picked\':(style.style === logo.icon.style)}" ng-click="ctrl.setIconStyle(style)"><span>{{style.name}}</span></li></ul></perfect-scrollbar></div>'),a.put("modules/workbench/typesetting.html",'<div><h2>Font Weight</h2><perfect-scrollbar wheel-propagation="true" wheel-speed="1" min-scrollbar-length="10" class="scroller"><ul class="select"><li ng-repeat="weight in ctrl.weight" ng-class="{\'picked\':(weight.style === logo.font.weight)}" ng-click="ctrl.setFontWeight(weight)"><span ng-class="weight.style">{{weight.name}}</span></li></ul></perfect-scrollbar></div><div><h2>Font Color</h2><perfect-scrollbar wheel-propagation="true" wheel-speed="1" min-scrollbar-length="10" class="scroller"><div class="color-picker"><div ng-click="ctrl.setFontColor(\'white\')" class="color white"></div><div ng-click="ctrl.setFontColor(\'black\')" class="color black"></div><div ng-repeat="color in logo.color" ng-style="{\'background-color\': \'#\'+color }" ng-click="ctrl.setFontColor(\'#\'+color)" class="color"></div></div></perfect-scrollbar></div><div><h2>Letter Case</h2><perfect-scrollbar wheel-propagation="true" wheel-speed="1" min-scrollbar-length="10" class="scroller"><ul class="select"><li ng-repeat="style in ctrl.styles" ng-class="{\'picked\':(style.style === logo.font.style)}" ng-click="ctrl.setFontStyle(style)"><span ng-class="style.style">{{style.name}}</span></li></ul></perfect-scrollbar></div>'),a.put("modules/workbench/typography.html",'<div class="logoName"><input placeholder="Logo Name" ng-model="logo.text"></div><div><h2>Font</h2><perfect-scrollbar wheel-propagation="true" wheel-speed="1" min-scrollbar-length="10" class="scroller"><ul class="select"><li ng-repeat="font in ctrl.fonts" ng-class="{\'picked\':(font === logo.font.type)}" ng-click="ctrl.setFontFamily(font)"><span style="font-family:\'{{font}}\'">{{font}}</span></li></ul></perfect-scrollbar></div>')}]);