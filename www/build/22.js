webpackJsonp([22],{218:function(n,t,l){"use strict";function e(n){return u._35(0,[(n()(),u._12(0,null,null,0,"div",[["class","imgs"]],[[4,"background",null]],[[null,"press"]],function(n,t,l){var e=!0,o=n.component;return"press"===t&&(e=!1!==o.pressEvent(n.context.index)&&e),e},null,null))],null,function(n,t){n(t,0,0,"url("+t.context.$implicit+")")})}function o(n){return u._35(0,[(n()(),u._33(null,["\n"])),(n()(),u._12(0,null,null,19,"ion-header",[["no-border",""]],null,null,null,null,null)),u._11(16384,null,0,v.a,[O.a,u.m,u.J,[2,w.a]],null,null),(n()(),u._33(null,["\n\n    "])),(n()(),u._12(0,null,null,15,"ion-navbar",[["class","toolbar"],["color","mblue"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,C.b,C.a)),u._11(49152,null,0,k.a,[R.a,[2,w.a],[2,x.a],O.a,u.m,u.J],{color:[0,"color"]},null),(n()(),u._33(3,["\n        "])),(n()(),u._12(0,null,3,2,"ion-title",[],null,null,null,I.b,I.a)),u._11(49152,null,0,P.a,[O.a,u.m,u.J,[2,T.a],[2,k.a]],null,null),(n()(),u._33(0,["发布分享"])),(n()(),u._33(3,["\n        "])),(n()(),u._12(0,null,2,7,"ion-buttons",[["end",""]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;return"click"===t&&(e=!1!==o.send()&&e),e},null,null)),u._11(16384,null,1,j.a,[O.a,u.m,u.J,[2,T.a],[2,k.a]],null,null),u._31(603979776,1,{_buttons:1}),(n()(),u._33(null,["\n            "])),(n()(),u._12(0,null,null,2,"ion-title",[],null,null,null,I.b,I.a)),u._11(49152,null,0,P.a,[O.a,u.m,u.J,[2,T.a],[2,k.a]],null,null),(n()(),u._33(0,["发送"])),(n()(),u._33(null,["\n        "])),(n()(),u._33(3,["\n    "])),(n()(),u._33(null,["\n\n"])),(n()(),u._33(null,["\n\n"])),(n()(),u._12(0,null,null,13,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,S.b,S.a)),u._11(4374528,null,0,F.a,[O.a,A.a,E.a,u.m,u.J,R.a,D.a,u.C,[2,w.a],[2,x.a]],null,null),(n()(),u._33(1,["\n    "])),(n()(),u._12(0,null,1,4,"ion-textarea",[["placeholder","这一刻的想法..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,t,l){var e=!0,o=n.component;return"ngModelChange"===t&&(e=!1!==(o.text=l)&&e),e},J.b,J.a)),u._11(671744,null,0,d.h,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),u._30(2048,null,d.f,null,[d.h]),u._11(16384,null,0,d.g,[d.f],null,null),u._11(5423104,null,0,L.a,[O.a,A.a,B.a,R.a,u.m,u.J,[2,F.a],[2,N.a],[2,d.f],E.a],{placeholder:[0,"placeholder"]},null),(n()(),u._33(1,["\n\n    "])),(n()(),u._8(16777216,null,1,1,null,e)),u._11(802816,null,0,p.h,[u.W,u.R,u.v],{ngForOf:[0,"ngForOf"]},null),(n()(),u._33(1,["\n\n    "])),(n()(),u._12(0,null,1,0,"div",[["class","imgs"]],[[8,"hidden",0],[4,"background",null]],[[null,"click"]],function(n,t,l){var e=!0,o=n.component;return"click"===t&&(e=!1!==o.presentActionSheet()&&e),e},null,null)),(n()(),u._33(1,["\n\n"]))],function(n,t){var l=t.component;n(t,5,0,"mblue"),n(t,26,0,l.text);n(t,29,0,"这一刻的想法..."),n(t,32,0,l.items)},function(n,t){var l=t.component;n(t,4,0,u._25(t,5)._hidden,u._25(t,5)._sbPadding),n(t,22,0,u._25(t,23).statusbarPadding,u._25(t,23)._hasRefresher),n(t,25,0,u._25(t,28).ngClassUntouched,u._25(t,28).ngClassTouched,u._25(t,28).ngClassPristine,u._25(t,28).ngClassDirty,u._25(t,28).ngClassValid,u._25(t,28).ngClassInvalid,u._25(t,28).ngClassPending);n(t,34,0,l.ishide,"url(assets/icon/addimg.png)")})}Object.defineProperty(t,"__esModule",{value:!0});var u=l(0),r=(l(56),l(241)),a=l(232),i=l(38),s=l(28),c=function(){function n(n,t,l,e,o,u,r,a){this.http=n,this.transfer=t,this.navCtrl=l,this.navParams=e,this.actionSheetCtrl=o,this.camera=u,this.alertCtrl=r,this.UserService=a,this.ishide=!1,this.text="",this.items=[],this.postimg=[],this.fileTransfer=this.transfer.create()}return n.prototype.send=function(){alert("后台正在开发，暂时停止发布功能")},n.prototype.postdata=function(){var n=this;this.UserService.presentLoadingDefault();var t=new s.d;t.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("http://www.devonhello.com/chihu2/send_share","uid="+this.UserService._user._id+"&name="+this.UserService._user.nickname+"&userimg="+this.UserService._user.userimg+"&img="+JSON.stringify(this.postimg)+"&text="+this.text,{headers:t}).subscribe(function(t){n.UserService.presentLoadingDismiss(),"1"==t.json().result.ok&&n.navCtrl.pop()})},n.prototype.up=function(n){var t=this;this.UserService.presentLoadingDefault(),this.fileTransfer.upload(n,"http://www.devonhello.com/chihu2/upload",{}).then(function(n){var l=JSON.parse(n.response);t.postimg.push(l),t.items.push(l.src),t.UserService.presentLoadingDismiss()},function(n){t.UserService.presentLoadingDismiss(),alert("err")})},n.prototype.pressEvent=function(n){this.showConfirm(n)},n.prototype.showConfirm=function(n){var t=this;this.alertCtrl.create({title:"提示",message:"是否删除此照片?",buttons:[{text:"在想想",handler:function(){console.log("Disagree clicked")}},{text:"确定",handler:function(){t.items.splice(n,1),t.postimg.splice(n,1),t.items.length<4&&(t.ishide=!1)}}]}).present()},n.prototype.presentActionSheet=function(){var n=this;this.actionSheetCtrl.create({title:"图片来源",buttons:[{text:"相册",icon:"images",handler:function(){n.seleImgType(0)}},{text:"相机",icon:"camera",handler:function(){n.seleImgType(1)}},{text:"取消",role:"cancel",handler:function(){}}]}).present()},n.prototype.seleImgType=function(n){var t=this;this.camera.getPicture({quality:80,allowEdit:!0,sourceType:n,correctOrientation:!0}).then(function(n){t.up(n),t.items.length>=4&&(t.ishide=!0)},function(n){})},n}(),_=function(){return function(){}}(),p=l(14),d=l(21),f=l(88),h=l(140),g=l(141),m=l(142),b=l(143),y=l(144),v=l(90),O=l(1),w=l(4),C=l(226),k=l(39),R=l(7),x=l(15),I=l(227),P=l(87),T=l(40),j=l(99),S=l(225),F=l(20),A=l(3),E=l(8),D=l(29),J=l(234),L=l(91),B=l(22),N=l(42),M=l(11),U=l(65),W=l(62),z=[],K=u._10({encapsulation:2,styles:z,data:{}}),V=u._9("page-send-share",c,function(n){return u._35(0,[(n()(),u._12(0,null,null,1,"page-send-share",[],null,null,null,o,K)),u._11(49152,null,0,c,[s.e,a.a,x.a,M.a,U.a,r.a,W.a,i.a],null,null)],null,null)},{},{},[]),Y=l(89);l.d(t,"SendSharePageModuleNgFactory",function(){return Z});var G=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var l in t)t.hasOwnProperty(l)&&(n[l]=t[l])};return function(t,l){function e(){this.constructor=t}n(t,l),t.prototype=null===l?Object.create(l):(e.prototype=l.prototype,new e)}}(),H=function(n){function t(t){return n.call(this,t,[h.a,g.a,m.a,b.a,y.a,V],[])||this}return G(t,n),Object.defineProperty(t.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new p.j(this.parent.get(u.x))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new d.k),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new d.c),this.__FormBuilder_9},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Camera_11",{get:function(){return null==this.__Camera_11&&(this.__Camera_11=new r.a),this.__Camera_11},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Transfer_12",{get:function(){return null==this.__Transfer_12&&(this.__Transfer_12=new a.a),this.__Transfer_12},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_TransferObject_13",{get:function(){return null==this.__TransferObject_13&&(this.__TransferObject_13=new a.b),this.__TransferObject_13},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new p.b,this._ɵba_1=new d.j,this._FormsModule_2=new d.d,this._ReactiveFormsModule_3=new d.i,this._IonicModule_4=new f.a,this._IonicPageModule_5=new f.b,this._SendSharePageModule_6=new _,this._LAZY_LOADED_TOKEN_10=c,this._SendSharePageModule_6},t.prototype.getInternal=function(n,t){return n===p.b?this._CommonModule_0:n===d.j?this._ɵba_1:n===d.d?this._FormsModule_2:n===d.i?this._ReactiveFormsModule_3:n===f.a?this._IonicModule_4:n===f.b?this._IonicPageModule_5:n===_?this._SendSharePageModule_6:n===p.k?this._NgLocalization_7:n===d.k?this._ɵi_8:n===d.c?this._FormBuilder_9:n===Y.a?this._LAZY_LOADED_TOKEN_10:n===r.a?this._Camera_11:n===a.a?this._Transfer_12:n===a.b?this._TransferObject_13:t},t.prototype.destroyInternal=function(){},t}(u._7),Z=new u.z(H,_)},225:function(n,t,l){"use strict";function e(n){return o._35(2,[o._31(402653184,1,{_fixedContent:0}),o._31(402653184,2,{_scrollContent:0}),(n()(),o._12(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),o._24(null,0),(n()(),o._12(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),o._24(null,1),o._24(null,2)],null,null)}l.d(t,"a",function(){return f}),t.b=e;var o=l(0),u=l(20),r=l(1),a=l(3),i=l(8),s=l(7),c=l(29),_=l(4),p=l(15),d=[],f=o._10({encapsulation:2,styles:d,data:{}});o._9("ion-content",u.a,function(n){return o._35(0,[(n()(),o._12(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,e,f)),o._11(4374528,null,0,u.a,[r.a,a.a,i.a,o.m,o.J,s.a,c.a,o.C,[2,_.a],[2,p.a]],null,null)],null,function(n,t){n(t,0,0,o._25(t,1).statusbarPadding,o._25(t,1)._hasRefresher)})},{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])},226:function(n,t,l){"use strict";function e(n){return o._35(0,[(n()(),o._12(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),o._11(278528,null,0,u.g,[o.v,o.w,o.m,o.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),o._12(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(n,t,l){var e=!0,o=n.component;return"click"===t&&(e=!1!==o.backButtonClick(l)&&e),e},a.b,a.a)),o._11(278528,null,0,u.g,[o.v,o.w,o.m,o.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._11(1097728,null,0,i.a,[[8,"bar-button"],s.a,o.m,o.J],null,null),(n()(),o._12(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o._11(278528,null,0,u.g,[o.v,o.w,o.m,o.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._11(147456,null,0,c.a,[s.a,o.m,o.J],{name:[0,"name"]},null),(n()(),o._12(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),o._11(278528,null,0,u.g,[o.v,o.w,o.m,o.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),o._33(null,["",""])),o._24(null,0),o._24(null,1),o._24(null,2),(n()(),o._12(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),o._11(278528,null,0,u.g,[o.v,o.w,o.m,o.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._24(null,3)],function(n,t){var l=t.component;n(t,1,0,"toolbar-background","toolbar-background-"+l._mode);n(t,3,0,"back-button","back-button-"+l._mode);n(t,6,0,"back-button-icon","back-button-icon-"+l._mode),n(t,7,0,l._bbIcon);n(t,9,0,"back-button-text","back-button-text-"+l._mode);n(t,15,0,"toolbar-content","toolbar-content-"+l._mode)},function(n,t){var l=t.component;n(t,2,0,l._hideBb),n(t,5,0,o._25(t,7)._hidden),n(t,10,0,l._backText)})}l.d(t,"a",function(){return h}),t.b=e;var o=l(0),u=l(14),r=l(39),a=l(57),i=l(16),s=l(1),c=l(41),_=l(7),p=l(4),d=l(15),f=[],h=o._10({encapsulation:2,styles:f,data:{}});o._9("ion-navbar",r.a,function(n){return o._35(0,[(n()(),o._12(0,null,null,1,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,e,h)),o._11(49152,null,0,r.a,[_.a,[2,p.a],[2,d.a],s.a,o.m,o.J],null,null)],null,function(n,t){n(t,0,0,o._25(t,1)._hidden,o._25(t,1)._sbPadding)})},{color:"color",mode:"mode",hideBackButton:"hideBackButton"},{},["[menuToggle],ion-buttons[left]","ion-buttons[start]","ion-buttons[end],ion-buttons[right]","*"])},227:function(n,t,l){"use strict";function e(n){return o._35(2,[(n()(),o._12(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),o._11(278528,null,0,u.g,[o.v,o.w,o.m,o.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._24(null,0)],function(n,t){n(t,1,0,"toolbar-title","toolbar-title-"+t.component._mode)},null)}l.d(t,"a",function(){return _}),t.b=e;var o=l(0),u=l(14),r=l(87),a=l(1),i=l(40),s=l(39),c=[],_=o._10({encapsulation:2,styles:c,data:{}});o._9("ion-title",r.a,function(n){return o._35(0,[(n()(),o._12(0,null,null,1,"ion-title",[],null,null,null,e,_)),o._11(49152,null,0,r.a,[a.a,o.m,o.J,[2,i.a],[2,s.a]],null,null)],null,null)},{color:"color",mode:"mode"},{},["*"])},232:function(n,t,l){"use strict";l.d(t,"a",function(){return i}),l.d(t,"b",function(){return s});var e=l(0),o=l(60),u=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var l in t)t.hasOwnProperty(l)&&(n[l]=t[l])};return function(t,l){function e(){this.constructor=t}n(t,l),t.prototype=null===l?Object.create(l):(e.prototype=l.prototype,new e)}}(),r=this&&this.__decorate||function(n,t,l,e){var o,u=arguments.length,r=u<3?t:null===e?e=Object.getOwnPropertyDescriptor(t,l):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(n,t,l,e);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(u<3?o(r):u>3?o(t,l,r):o(t,l))||r);return u>3&&r&&Object.defineProperty(t,l,r),r},a=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},i=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.FileTransferErrorCode={FILE_NOT_FOUND_ERR:1,INVALID_URL_ERR:2,CONNECTION_ERR:3,ABORT_ERR:4,NOT_MODIFIED_ERR:5},t}return u(t,n),t.prototype.create=function(){return new s},t}(o.f);i.decorators=[{type:e.r}],i.ctorParameters=function(){return[]},i=r([Object(o.g)({pluginName:"FileTransfer",plugin:"cordova-plugin-file-transfer",pluginRef:"FileTransfer",repo:"https://github.com/apache/cordova-plugin-file-transfer",platforms:["Amazon Fire OS","Android","Browser","iOS","Ubuntu","Windows","Windows Phone"]})],i);var s=function(){function n(){!0===Object(o.h)("FileTransfer",null,"FileTransfer")&&(this._objectInstance=new FileTransfer)}return n.prototype.upload=function(n,t,l,e){},n.prototype.download=function(n,t,l,e){},n.prototype.onProgress=function(n){this._objectInstance.onprogress=n},n.prototype.abort=function(){},n}();r([Object(o.c)({successIndex:2,errorIndex:3}),a("design:type",Function),a("design:paramtypes",[String,String,Object,Boolean]),a("design:returntype",Promise)],s.prototype,"upload",null),r([Object(o.c)({successIndex:2,errorIndex:3}),a("design:type",Function),a("design:paramtypes",[String,String,Boolean,Object]),a("design:returntype",Promise)],s.prototype,"download",null),r([Object(o.e)({sync:!0}),a("design:type",Function),a("design:paramtypes",[Function]),a("design:returntype",void 0)],s.prototype,"onProgress",null),r([Object(o.c)({sync:!0}),a("design:type",Function),a("design:paramtypes",[]),a("design:returntype",void 0)],s.prototype,"abort",null),s=r([Object(o.g)({plugin:"cordova-plugin-file-transfer",pluginName:"FileTransfer"}),a("design:paramtypes",[])],s)},234:function(n,t,l){"use strict";function e(n){return i._35(0,[(n()(),i._12(0,[[1,0],["textInput",1]],null,1,"input",[["class","text-input"]],[[8,"type",0],[1,"aria-labelledby",0],[1,"min",0],[1,"max",0],[1,"step",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(n,t,l){var e=!0,o=n.component;return"input"===t&&(e=!1!==o.onInput(l)&&e),"blur"===t&&(e=!1!==o.onBlur(l)&&e),"focus"===t&&(e=!1!==o.onFocus(l)&&e),"keydown"===t&&(e=!1!==o.onKeydown(l)&&e),e},null,null)),i._11(278528,null,0,s.g,[i.v,i.w,i.m,i.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(n,t){n(t,1,0,"text-input","text-input-"+t.component._mode)},function(n,t){var l=t.component;n(t,0,0,l._type,l._labelId,l.min,l.max,l.step,l.autocomplete,l.autocorrect,l.placeholder,l._disabled,l._readonly)})}function o(n){return i._35(0,[(n()(),i._12(0,[[1,0],["textInput",1]],null,1,"textarea",[["class","text-input"]],[[1,"aria-labelledby",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(n,t,l){var e=!0,o=n.component;return"input"===t&&(e=!1!==o.onInput(l)&&e),"blur"===t&&(e=!1!==o.onBlur(l)&&e),"focus"===t&&(e=!1!==o.onFocus(l)&&e),"keydown"===t&&(e=!1!==o.onKeydown(l)&&e),e},null,null)),i._11(278528,null,0,s.g,[i.v,i.w,i.m,i.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(n,t){n(t,1,0,"text-input","text-input-"+t.component._mode)},function(n,t){var l=t.component;n(t,0,0,l._labelId,l.autocomplete,l.autocorrect,l.placeholder,l._disabled,l._readonly)})}function u(n){return i._35(0,[(n()(),i._12(0,null,null,1,"button",[["class","text-input-clear-icon"],["clear",""],["ion-button",""],["tabindex","-1"],["type","button"]],null,[[null,"click"],[null,"mousedown"]],function(n,t,l){var e=!0,o=n.component;return"click"===t&&(e=!1!==o.clearTextInput(l)&&e),"mousedown"===t&&(e=!1!==o.clearTextInput(l)&&e),e},c.b,c.a)),i._11(1097728,null,0,_.a,[[8,""],p.a,i.m,i.J],{clear:[0,"clear"]},null)],function(n,t){n(t,1,0,"")},null)}function r(n){return i._35(0,[(n()(),i._12(0,null,null,0,"div",[["class","input-cover"]],null,[[null,"touchstart"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"]],function(n,t,l){var e=!0,o=n.component;return"touchstart"===t&&(e=!1!==o._pointerStart(l)&&e),"touchend"===t&&(e=!1!==o._pointerEnd(l)&&e),"mousedown"===t&&(e=!1!==o._pointerStart(l)&&e),"mouseup"===t&&(e=!1!==o._pointerEnd(l)&&e),e},null,null))],null,null)}function a(n){return i._35(2,[i._31(671088640,1,{_native:0}),(n()(),i._8(16777216,null,null,1,null,e)),i._11(16384,null,0,s.i,[i.W,i.R],{ngIf:[0,"ngIf"]},null),(n()(),i._8(16777216,null,null,1,null,o)),i._11(16384,null,0,s.i,[i.W,i.R],{ngIf:[0,"ngIf"]},null),(n()(),i._8(16777216,null,null,1,null,u)),i._11(16384,null,0,s.i,[i.W,i.R],{ngIf:[0,"ngIf"]},null),(n()(),i._8(16777216,null,null,1,null,r)),i._11(16384,null,0,s.i,[i.W,i.R],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,2,0,!l._isTextarea),n(t,4,0,l._isTextarea),n(t,6,0,l._clearInput),n(t,8,0,l._useAssist)},null)}l.d(t,"a",function(){return w}),t.b=a;var i=l(0),s=l(14),c=l(57),_=l(16),p=l(1),d=l(91),f=l(3),h=l(22),g=l(7),m=l(20),b=l(42),y=l(21),v=l(8),O=[],w=i._10({encapsulation:2,styles:O,data:{}});i._9("ion-input,ion-textarea",d.a,function(n){return i._35(0,[(n()(),i._12(0,null,null,1,"ion-input",[],null,null,null,a,w)),i._11(5423104,null,0,d.a,[p.a,f.a,h.a,g.a,i.m,i.J,[2,m.a],[2,b.a],[2,y.f],v.a],null,null)],null,null)},{value:"value",color:"color",mode:"mode",disabled:"disabled",clearInput:"clearInput",type:"type",readonly:"readonly",clearOnEdit:"clearOnEdit",autocomplete:"autocomplete",autocorrect:"autocorrect",placeholder:"placeholder",min:"min",max:"max",step:"step"},{ionFocus:"ionFocus",ionChange:"ionChange",ionBlur:"ionBlur",input:"input",blur:"blur",focus:"focus"},[])},241:function(n,t,l){"use strict";l.d(t,"a",function(){return i});var e=l(0),o=l(60),u=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var l in t)t.hasOwnProperty(l)&&(n[l]=t[l])};return function(t,l){function e(){this.constructor=t}n(t,l),t.prototype=null===l?Object.create(l):(e.prototype=l.prototype,new e)}}(),r=this&&this.__decorate||function(n,t,l,e){var o,u=arguments.length,r=u<3?t:null===e?e=Object.getOwnPropertyDescriptor(t,l):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(n,t,l,e);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(u<3?o(r):u>3?o(t,l,r):o(t,l))||r);return u>3&&r&&Object.defineProperty(t,l,r),r},a=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},i=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.DestinationType={DATA_URL:0,FILE_URI:1,NATIVE_URI:2},t.EncodingType={JPEG:0,PNG:1},t.MediaType={PICTURE:0,VIDEO:1,ALLMEDIA:2},t.PictureSourceType={PHOTOLIBRARY:0,CAMERA:1,SAVEDPHOTOALBUM:2},t.PopoverArrowDirection={ARROW_UP:1,ARROW_DOWN:2,ARROW_LEFT:4,ARROW_RIGHT:8,ARROW_ANY:15},t.Direction={BACK:0,FRONT:1},t}return u(t,n),t.prototype.getPicture=function(n){},t.prototype.cleanup=function(){},t}(o.f);i.decorators=[{type:e.r}],i.ctorParameters=function(){return[]},r([Object(o.a)({callbackOrder:"reverse"}),a("design:type",Function),a("design:paramtypes",[Object]),a("design:returntype",Promise)],i.prototype,"getPicture",null),r([Object(o.a)({platforms:["iOS"]}),a("design:type",Function),a("design:paramtypes",[]),a("design:returntype",Promise)],i.prototype,"cleanup",null),i=r([Object(o.g)({pluginName:"Camera",plugin:"cordova-plugin-camera",pluginRef:"navigator.camera",repo:"https://github.com/apache/cordova-plugin-camera",platforms:["Android","BlackBerry 10","Browser","Firefox OS","iOS","Ubuntu","Windows","Windows Phone 8"]})],i)}});