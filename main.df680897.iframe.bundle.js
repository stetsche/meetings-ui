(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{157:function(module,__webpack_exports__,__webpack_require__){"use strict";var components_sakai_buttonvue_type_script_lang_js_={components:{SakaiDropdown:__webpack_require__(188).a},props:{items:{type:Array,default:function _default(){return[{id:0,icon:"fa-lock",string:"Permissions",url:"https://translate.google.es/?hl=es&sl=es&tl=en&op=translate"},{id:1,icon:"fa-book",string:"Templates",url:"https://getbootstrap.com/docs/5.0/components/card/#list-groups"},{id:2,icon:"fa-link",string:"Link",url:"https://v3.vuejs.org/guide/list.html#v-for-with-a-component"}]}},text:{type:String,default:"Button"},background:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},coloredIfSelected:{type:Boolean,default:!1}},data:function data(){return{showMenu:!1,selected:!1,hovering:!1}},methods:{onClick:function onClick(){this.showMenu=!this.showMenu,this.coloredIfSelected&&(this.selected=!this.selected)},onHover:function onHover(itemId){this.hoverId=itemId}}},componentNormalizer=(__webpack_require__(962),__webpack_require__(97));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_sakai_buttonvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_c("button",{staticClass:"button",class:[{clear:!_vm.background},{circle:_vm.circle},{disable:_vm.disabled},{selected:_vm.selected}],attrs:{type:"button"},on:{click:_vm.onClick}},[_vm._t("prepend",(function(){return[_c("i",{staticClass:"fa fa-lock marginR"})]})),_vm._v(" "),_vm.text.length>0?_c("span",{staticClass:"marginR"},[_vm._v(_vm._s(_vm.text))]):_vm._e(),_vm._v(" "),_vm._t("append",(function(){return[_c("i",{staticClass:"fa",class:[_vm.showMenu?"fa-chevron-up":"fa-chevron-down"]})]}))],2),_vm._v(" "),_vm._t("dropdown",(function(){return[_c("SakaiDropdown",{attrs:{items:_vm.items,showMenu:_vm.showMenu,widthRem:10}})]}))],2)}),[],!1,null,null,null).exports;__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"sakai-button",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[\n  { id: 0, icon: 'fa-lock', string: 'Permissions', url: \"https://translate.google.es/?hl=es&sl=es&tl=en&op=translate\" },\n  { id: 1, icon: 'fa-book', string: 'Templates', url: \"https://getbootstrap.com/docs/5.0/components/card/#list-groups\" },\n  { id: 2, icon: 'fa-link', string: 'Link', url: \"https://v3.vuejs.org/guide/list.html#v-for-with-a-component\" }\n]"}},{name:"text",type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}},{name:"background",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"circle",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"coloredIfSelected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prepend"},{name:"append"},{name:"dropdown"}]}},188:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(512),__webpack_require__(78);var _props,components_sakai_dropdownvue_type_script_lang_js_={props:(_props={items:{type:Array,default:function _default(){return[{id:0,icon:"fa-lock",string:"Permissions",url:"https://translate.google.es/?hl=es&sl=es&tl=en&op=translate"},{id:1,icon:"fa-book",string:"Templates",url:"https://getbootstrap.com/docs/5.0/components/card/#list-groups"},{id:2,icon:"fa-link",string:"Link",url:"https://v3.vuejs.org/guide/list.html#v-for-with-a-component"}]}},showMenu:{type:Boolean,default:"false"}},_props.showMenu={type:Boolean,default:"false"},_props.widthRem={type:Number,default:9},_props),data:function data(){return{selectedId:null,hoverId:null,widthRem:12}},methods:{onClick:function onClick(){this.showMenu=!this.showMenu,this.selectedId=null},onHover:function onHover(itemId){this.hoverId=itemId},select:function select(itemId){this.selectedId=itemId,window.location.href=this.items[itemId].url}}},componentNormalizer=(__webpack_require__(960),__webpack_require__(97));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_sakai_dropdownvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _vm.showMenu?_c("div",[_c("div",{staticClass:"card marginT",style:{width:_vm.widthRem+"rem"}},[_c("ul",{staticClass:"list-group list-group-flush"},_vm._l(_vm.items,(function(item){return _c("li",{key:item.id,staticClass:"list-group-item",class:{selectedItem:_vm.selectedId===item.id,hoverItem:_vm.hoverId===item.id},on:{click:function($event){return _vm.select(item.id)},mouseover:function($event){return _vm.onHover(item.id)},mouseleave:function($event){_vm.hoverId=null}}},[_c("i",{staticClass:"fa iconWrap",class:item.icon}),_vm._v(_vm._s(item.string)+"\n      ")])})),0)])]):_vm._e()}),[],!1,null,null,null).exports;__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"sakai-dropdown",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[\n  { id: 0, icon: 'fa-lock', string: 'Permissions', url: \"https://translate.google.es/?hl=es&sl=es&tl=en&op=translate\" },\n  { id: 1, icon: 'fa-book', string: 'Templates', url: \"https://getbootstrap.com/docs/5.0/components/card/#list-groups\" },\n  { id: 2, icon: 'fa-link', string: 'Link', url: \"https://v3.vuejs.org/guide/list.html#v-for-with-a-component\" }\n]"}},{name:"showMenu",type:{name:"boolean"},defaultValue:{func:!1,value:"'false'"}},{name:"widthRem",type:{name:"number"},defaultValue:{func:!1,value:"9"}}]}},530:function(module,exports,__webpack_require__){var api=__webpack_require__(238),content=__webpack_require__(961);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},531:function(module,exports,__webpack_require__){var api=__webpack_require__(238),content=__webpack_require__(963);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},532:function(module,exports,__webpack_require__){var api=__webpack_require__(238),content=__webpack_require__(967);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},533:function(module,exports,__webpack_require__){var api=__webpack_require__(238),content=__webpack_require__(969);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},576:function(module,exports,__webpack_require__){__webpack_require__(577),__webpack_require__(731),__webpack_require__(732),__webpack_require__(970),__webpack_require__(977),__webpack_require__(979),__webpack_require__(980),__webpack_require__(978),__webpack_require__(971),__webpack_require__(981),__webpack_require__(972),__webpack_require__(973),__webpack_require__(982),module.exports=__webpack_require__(922)},643:function(module,exports){},732:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(383)},922:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(383).configure)([__webpack_require__(923),__webpack_require__(924)],module,!1)}).call(this,__webpack_require__(220)(module))},923:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=923},924:function(module,exports,__webpack_require__){var map={"./Button.stories.js":925,"./sakai-avatar.stories.js":974,"./sakai-button.stories.js":964,"./sakai-dropdown.stories.js":965,"./sakai-input.stories.js":975,"./sakai-meeting-card.stories.js":976};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=924},925:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary}));__webpack_require__(14),__webpack_require__(9);var _src_components_sakai_button_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(157);__webpack_exports__.default={title:"Components/SakaiButton",component:_src_components_sakai_button_vue__WEBPACK_IMPORTED_MODULE_2__.a};var Template=function Template(args,_ref){var argTypes=_ref.argTypes;return{props:Object.keys(argTypes),components:{SakaiButton:_src_components_sakai_button_vue__WEBPACK_IMPORTED_MODULE_2__.a},template:'<sakai-button @onClick="onClick" v-bind="$props" />'}},Primary=Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Template.bind({});Secondary.args={label:"Button"},Primary.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { SakaiButton },\n  template: \'<sakai-button @onClick="onClick" v-bind="$props" />\',\n})'}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { SakaiButton },\n  template: \'<sakai-button @onClick="onClick" v-bind="$props" />\',\n})'}},Secondary.parameters)},960:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(530)},961:function(module,exports,__webpack_require__){(exports=__webpack_require__(239)(!1)).push([module.i,"\n.iconWrap {\n  width: 16.5px;\n  margin-right: 6px;\n}\n.hoverItem {\n  background-color: rgb(243, 248, 253)!important;\n  cursor: pointer;\n}\n.selectedItem {\n  background-color: rgb(231, 243, 255)!important;\n}\n.marginT {\n  margin-top: 6px;\n}\n",""]),module.exports=exports},962:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(531)},963:function(module,exports,__webpack_require__){(exports=__webpack_require__(239)(!1)).push([module.i,"\n.button {\n  background-color: rgb(228, 236, 233);\n  border: 1px solid rgb(172, 172, 172);\n  border-radius: 5px;\n  padding: 4px 26px 4px 26px;\n  margin-bottom: 4px;\n}\n.clear {\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n  padding: 4px 26px 4px 30px;\n}\n.circle {\n  padding: 10px;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n}\n.disable {\n  background-color: rgb(247, 247, 247);  \n  border: 1px solid rgb(228, 228, 228);\n  color: rgb(163, 163, 163);\n  padding: 4px 26px 4px 26px;\n}\n.marginR {\n  margin-right: 14px;\n}\n.iconWrap {\n  width: 16.5px;\n  margin-right: 6px;\n}\n.hover {\n  background-color: rgb(243, 248, 253)!important;\n  cursor: pointer;\n}\n.selected {\n  background-color: rgb(234, 245, 255)!important;\n}\n",""]),module.exports=exports},964:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__(14),__webpack_require__(9);var _src_components_sakai_button_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(157);__webpack_exports__.default={component:_src_components_sakai_button_vue__WEBPACK_IMPORTED_MODULE_2__.a,title:"Components/SakaiButton"};var Primary=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{SakaiButton:_src_components_sakai_button_vue__WEBPACK_IMPORTED_MODULE_2__.a},props:Object.keys(argTypes),template:'<SakaiButton v-bind="$props"/>'}}.bind({});Primary.args={},Primary.parameters=Object.assign({storySource:{source:"(args, { argTypes }) => ({\n  components: { SakaiButton },\n  props: Object.keys(argTypes),\n  template: '<SakaiButton v-bind=\"$props\"/>',\n})"}},Primary.parameters)},965:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__(14),__webpack_require__(9);var _src_components_sakai_dropdown_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(188);__webpack_exports__.default={component:_src_components_sakai_dropdown_vue__WEBPACK_IMPORTED_MODULE_2__.a,title:"Components/SakaiDropdown"};var Primary=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{SakaiDropdown:_src_components_sakai_dropdown_vue__WEBPACK_IMPORTED_MODULE_2__.a},props:Object.keys(argTypes),template:'<SakaiDropdown v-bind="$props"/>'}}.bind({});Primary.args={},Primary.parameters=Object.assign({storySource:{source:"(args, { argTypes }) => ({\n  components: { SakaiDropdown },\n  props: Object.keys(argTypes),\n  template: '<SakaiDropdown v-bind=\"$props\"/>',\n})"}},Primary.parameters)},966:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(532)},967:function(module,exports,__webpack_require__){(exports=__webpack_require__(239)(!1)).push([module.i,"\n.bar-style {\n  border-radius: 0.3em;\n  border: 2px solid rgb(212, 212, 212);\n  padding: 2px 23px 2px 30px;\n  margin-bottom: 4px;\n  outline: 0;\n}\n.wrapper {\n  position: relative;\n  display: flex;\n  min-width: 100px;\n}\n.search-icon {\n  position: absolute;\n  top: 6px;\n  left: 8px;\n  width: 14px;\n}\n.invalid-style {\n  outline: solid rgb(215 96 96);\n  color: green;\n}\n.disabled-style {\n  outline: solid gainsboro;\n  color: red;\n}\n",""]),module.exports=exports},968:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(533)},969:function(module,exports,__webpack_require__){(exports=__webpack_require__(239)(!1)).push([module.i,"\n.action-list-item[data-v-2fc4fb44] {\n  border-right: 1px solid rgba(0,0,0,.125);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  font-size: 2.5rem;\n}\n.uppercase[data-v-2fc4fb44] {\n  text-transform: uppercase;\n}\n",""]),module.exports=exports},974:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"NoImage",(function(){return NoImage})),__webpack_require__.d(__webpack_exports__,"Square",(function(){return Square})),__webpack_require__.d(__webpack_exports__,"Broken",(function(){return Broken})),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text}));__webpack_require__(14),__webpack_require__(9),__webpack_require__(512),__webpack_require__(78);var components_sakai_avatarvue_type_script_lang_js_={data:function data(){return{loaded:!1,backgroundColor:"lightgrey",color:"gray",sqareRadius:"0%",dark:!1}},props:{size:{type:Number,default:100},form:{type:String,default:"circle"},userId:{type:String},userName:{type:String},siteId:{type:String,default:void 0},offical:{type:Boolean,default:!1},text:{type:String,default:void 0}},methods:{onImageLoad:function onImageLoad(){this.loaded=!0}},computed:{variant:function variant(){return this.text?"text":this.loaded?"image":"placeholder"},borderRadius:function borderRadius(){return"border-radius:"+("square"==this.form?this.sqareRadius:"50%")+";"},imageStyle:function imageStyle(){var style=this.borderRadius;return this.dark&&(style+="filter:brightness(75%);"),style},fontSize:function fontSize(){return"placeholder"==this.variant?this.size/2.5:this.text.length<=3?this.size/2:this.size/(this.text.length*(2/3))},placeholderStyle:function placeholderStyle(){var style=this.borderRadius;return style+="background-color:"+this.backgroundColor+";",style+="color:"+this.color+";",style+="width:"+this.size+"px;",style+="height:"+this.size+"px;",style+="display: flex;flex-direction: column;justify-content: center; text-align: center;",style+="font-size:"+this.fontSize+"px;"},imageUrl:function imageUrl(){var url="http://"+window.location.host;return url+="/direct/profile/",url+=this.userId+"/image",url+=this.offical?"/official":this.size<=80?"/avatar":this.size<=100?"/thumb":"/default",this.siteId&&(url+="?siteId="+this.siteId),url},altText:function altText(){return"Profile Image of "+this.userName}}},componentNormalizer=__webpack_require__(97);const __vuedocgen_export_0=Object(componentNormalizer.a)(components_sakai_avatarvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"avatar"},[_c("img",{directives:[{name:"show",rawName:"v-show",value:"image"==_vm.variant,expression:"variant == 'image'"}],style:_vm.imageStyle,attrs:{src:_vm.imageUrl,width:_vm.size,height:_vm.size,alt:_vm.altText},on:{load:_vm.onImageLoad}}),_vm._v(" "),"placeholder"==_vm.variant?_c("div",{style:_vm.placeholderStyle},[_c("span",{staticClass:"fa fa-file-image-o"})]):_vm._e(),_vm._v(" "),"text"==_vm.variant?_c("div",{style:_vm.placeholderStyle},[_c("span",[_vm._v(_vm._s(_vm.text))])]):_vm._e()])}),[],!1,null,null,null).exports;var sakai_avatar=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"sakai-avatar",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"form",type:{name:"string"},defaultValue:{func:!1,value:"'circle'"}},{name:"userId",type:{name:"string"}},{name:"userName",type:{name:"string"}},{name:"siteId",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"offical",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"text",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}]};__webpack_exports__.default={component:sakai_avatar,title:"Ready/sakai-avatar",argTypes:{userId:{control:"select",options:["","454db719-443a-400f-b4d4-4dfada8091c0","67aefef6-32df-8fe7-87fe-90721ar79def","34058dsf-fd23-w9df-9ed6-234dsf381edn","9072hbs3-sb23-sfef-f93r-9q678g7g3qrh","klsde436-45kl-ds80-214f-f399nfm3lw93"]}}};var sakai_avatar_stories_Template=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{SakaiAvatar:sakai_avatar},props:Object.keys(argTypes),template:'<sakai-avatar v-bind="$props"/>'}},Primary=sakai_avatar_stories_Template.bind({});Primary.args={size:300,userId:"67aefef6-32df-8fe7-87fe-90721ar79def",userName:"Aufderhar Jamison"};var NoImage=sakai_avatar_stories_Template.bind({});NoImage.args={size:300,userId:"454db719-443a-400f-b4d4-4dfada8091c0",userName:"Victor van Dijk"};var Square=sakai_avatar_stories_Template.bind({});Square.args={form:"square",size:300,userId:"9072hbs3-sb23-sfef-f93r-9q678g7g3qrh",userName:"Bailey Ruthe"};var Broken=sakai_avatar_stories_Template.bind({});Broken.args={form:"square",size:300,userId:"this-is-not-a-user-id",userName:"no one"};var Text=sakai_avatar_stories_Template.bind({});Text.args={size:300,text:"+6"},Primary.parameters=Object.assign({storySource:{source:"(args, { argTypes }) => ({\n  components: { SakaiAvatar },\n  props: Object.keys(argTypes),\n  template: '<sakai-avatar v-bind=\"$props\"/>',\n})"}},Primary.parameters),NoImage.parameters=Object.assign({storySource:{source:"(args, { argTypes }) => ({\n  components: { SakaiAvatar },\n  props: Object.keys(argTypes),\n  template: '<sakai-avatar v-bind=\"$props\"/>',\n})"}},NoImage.parameters),Square.parameters=Object.assign({storySource:{source:"(args, { argTypes }) => ({\n  components: { SakaiAvatar },\n  props: Object.keys(argTypes),\n  template: '<sakai-avatar v-bind=\"$props\"/>',\n})"}},Square.parameters),Broken.parameters=Object.assign({storySource:{source:"(args, { argTypes }) => ({\n  components: { SakaiAvatar },\n  props: Object.keys(argTypes),\n  template: '<sakai-avatar v-bind=\"$props\"/>',\n})"}},Broken.parameters),Text.parameters=Object.assign({storySource:{source:"(args, { argTypes }) => ({\n  components: { SakaiAvatar },\n  props: Object.keys(argTypes),\n  template: '<sakai-avatar v-bind=\"$props\"/>',\n})"}},Text.parameters)},975:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__(14),__webpack_require__(9);var components_sakai_inputvue_type_script_lang_js_={computed:{filledSlot:function filledSlot(){return this.$slots.prepend}},props:{disabled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},placeholder:{type:String,default:"search"}},data:function data(){return{value:null}},methods:{search:function search(){for(var x=0;x<this.items.length;x++)return this.items[x].string===this.value?console.log("Found!"):console.log("not found")}}},componentNormalizer=(__webpack_require__(966),__webpack_require__(97));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_sakai_inputvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_c("div",{staticClass:"wrapper"},[_vm._t("prepend",(function(){return[_c("i",{staticClass:"fa fa-search search-icon"})]})),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.value,expression:"value"}],staticClass:"bar-style",class:[{"invalid-style":_vm.invalid},{"disabled-style":_vm.$slots.prepend}],attrs:{type:"search",placeholder:_vm.placeholder},domProps:{value:_vm.value},on:{keyup:function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")?null:_vm.search()},input:function($event){$event.target.composing||(_vm.value=$event.target.value)}}})],2),_vm._v(" "),_vm._t("append")],2)}),[],!1,null,null,null).exports;var sakai_input=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"sakai-input",description:"",tags:{},props:[{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"invalid",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'search'"}}],slots:[{name:"prepend"},{name:"append"}]};__webpack_exports__.default={component:sakai_input,title:"Components/SakaiInput"};var Primary=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{SakaiInput:sakai_input},props:Object.keys(argTypes),template:'<SakaiInput v-bind="$props"/>'}}.bind({});Primary.args={},Primary.parameters=Object.assign({storySource:{source:"(args, { argTypes }) => ({\n  components: { SakaiInput },\n  props: Object.keys(argTypes),\n  template: '<SakaiInput v-bind=\"$props\"/>',\n})"}},Primary.parameters)},976:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__(14),__webpack_require__(9);var components_sakai_meeting_cardvue_type_script_lang_js_={data:function data(){return{status:{live:0,waiting:1,timeUntil:2,over:3}}},props:{title:{type:String,default:void 0},contextTitle:{type:String,default:void 0},live:{type:Boolean,default:!0},startDate:{type:Date},endDate:{type:Date},participants:{type:Array},actions:{type:Array}},methods:{},computed:{schedule:function schedule(){return new Date(Date.now()).toLocaleString("en-GB",{timeZone:"UTC"})},currentStatus:function currentStatus(){return this.live?status.live:this.startDate<Date.now()?status.waiting:this.endDate<Date.now()?status.over:status.timeUntil},statusText:function statusText(){switch(this.currentStatus){case status.live:return"live";case status.waiting:return"waiting for start";case status.timeUntil:return"starts at "+this.startDate.toLocaleString();default:return"weired state"}},statusIcon:function statusIcon(){switch(this.currentStatus){case status.live:return"bi bi-record-circle";case status.waiting:return"fa fa-hourglass-o";case status.timeUntil:return"fa fa-bell";default:return"fa fa-ban"}}}},componentNormalizer=(__webpack_require__(968),__webpack_require__(97));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_sakai_meeting_cardvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"card"},[_c("div",{staticClass:"card-header"},[_c("div",{staticClass:"mt-1 mb-2 uppercase"},[_vm._v(_vm._s(_vm.contextTitle))]),_vm._v(" "),_c("h2",{staticClass:"card-title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c("div",{staticClass:"mb-2"},[_c("span",[_vm._v("\n        "+_vm._s(_vm.schedule)+"\n      ")]),_vm._v(" "),_vm.currentStatus!=_vm.status.over?_c("span",[_c("span",[_vm._v("|")]),_vm._v(" "),_c("span",{staticClass:"mr-2"},[_vm._v("live")]),_c("span",{class:_vm.statusIcon}),_c("br")]):_vm._e()]),_vm._v(" "),_c("a",{attrs:{href:"#"}},[_vm._v("View Description")])]),_vm._v(" "),_c("div",{staticClass:"card-body p-0 d-flex"},[_c("div",{staticClass:"action-list d-flex me-auto"},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._t("actions")],2),_vm._v(" "),_c("div",{staticClass:"p-1"},[_vm._t("right",(function(){return[_vm.currentStatus!=_vm.status.over?_c("button",{staticClass:"btn btn-primary",attrs:{disabled:!_vm.live}},[_vm._v("Join Meeting")]):_vm._e()]}))],2)])])}),[function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"action-list-item"},[_c("span",{staticClass:"bi bi-easel"})])},function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"action-list-item"},[_c("span",{staticClass:"bi bi-paperclip"})])},function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"action-list-item"},[_c("span",{staticClass:"bi bi-chat-right-text"})])}],!1,null,"2fc4fb44",null).exports;var sakai_meeting_card=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"sakai-meeting-card",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"contextTitle",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"live",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"startDate",type:{name:"date"}},{name:"endDate",type:{name:"date"}},{name:"participants",type:{name:"array"}},{name:"actions",type:{name:"array"}}],slots:[{name:"actions"},{name:"right"}]};__webpack_exports__.default={component:sakai_meeting_card,title:"Components/sakai-meeting-card"};var Primary=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{SakaiMeetingCard:sakai_meeting_card},props:Object.keys(argTypes),template:'<sakai-meeting-card v-bind="$props"/>'}}.bind({});Primary.args={contextTitle:"Some Lesson: whatever",title:"Basic Class Meeting"},Primary.parameters=Object.assign({storySource:{source:"(args, { argTypes }) => ({\n  components: { SakaiMeetingCard },\n  props: Object.keys(argTypes),\n  template: '<sakai-meeting-card v-bind=\"$props\"/>',\n})"}},Primary.parameters)},982:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(14),__webpack_require__(5),__webpack_require__(40),__webpack_require__(236),__webpack_require__(39),__webpack_require__(511);var client_api=__webpack_require__(989),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[576,2,3]]]);