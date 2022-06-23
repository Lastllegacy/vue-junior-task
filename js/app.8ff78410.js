(function(){var e={1215:function(e,n,t){"use strict";var o=t(9242),r=t(3396);const i={class:"app"},c={class:"app__header"},u=(0,r.Uk)(" Добавление товара "),a={class:"app__body"},d={class:"content-border stick-form"},l={class:"products"};function s(e,n,t,o,s,p){const m=(0,r.up)("MySelect"),v=(0,r.up)("StickyForm"),f=(0,r.up)("ProductList");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",c,[u,(0,r.Wm)(m,{modelValue:o.selectedOption,"onUpdate:modelValue":n[0]||(n[0]=e=>o.selectedOption=e)},null,8,["modelValue"])]),(0,r._)("div",a,[(0,r._)("div",d,[(0,r.Wm)(v,{onAddProduct:o.addProductHandler},null,8,["onAddProduct"])]),(0,r._)("div",l,[(0,r.Wm)(f,{products:o.arrayOfProducts,onRemoveProduct:o.removeProductHandler},null,8,["products","onRemoveProduct"])])])])}var p=t(7139);const m=["for"],v=["for"],f=["placeholder","id"],w=["for"],g=["for"],h=(0,r.Uk)(" Добавить товар ");function _(e,n,t,i,c,u){const a=(0,r.up)("MyNewInput"),d=(0,r.up)("MyError"),l=(0,r.up)("MyButton");return(0,r.wg)(),(0,r.iD)("form",{onSubmit:n[4]||(n[4]=(0,o.iM)((()=>{}),["prevent"]))},[(0,r._)("label",{for:i.newInputs.name.id,class:"input-label valid"},(0,p.zw)(i.newInputs.name.name),9,m),(0,r.Wm)(a,{placeholder:i.newInputs.name.name,id:i.newInputs.name.id,modelValue:i.product.name,"onUpdate:modelValue":n[0]||(n[0]=e=>i.product.name=e),class:(0,p.C_)({["validation"]:i.showErrors.name})},null,8,["placeholder","id","modelValue","class"]),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,p.zw)(i.showErrors.name),1)])),_:1}),(0,r._)("label",{for:i.newInputs.name.id,class:"input-label"},(0,p.zw)(i.newInputs.description.name),9,v),(0,r.wy)((0,r._)("textarea",{class:"input-text text-area",placeholder:i.newInputs.description.name,id:i.newInputs.description.id,"onUpdate:modelValue":n[1]||(n[1]=e=>i.product.description=e)},"\n         ",8,f),[[o.nr,i.product.description]]),(0,r._)("label",{for:i.newInputs.icon.id,class:"input-label valid"},(0,p.zw)(i.newInputs.icon.name),9,w),(0,r.Wm)(a,{placeholder:i.newInputs.icon.name,id:i.newInputs.icon.id,modelValue:i.product.icon,"onUpdate:modelValue":n[2]||(n[2]=e=>i.product.icon=e),class:(0,p.C_)({["validation"]:i.showErrors.icon})},null,8,["placeholder","id","modelValue","class"]),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,p.zw)(i.showErrors.icon),1)])),_:1}),(0,r._)("label",{for:i.newInputs.price.id,class:"input-label valid"},(0,p.zw)(i.newInputs.price.name),9,g),(0,r.Wm)(a,{placeholder:i.newInputs.price.name,id:i.newInputs.price.id,modelValue:i.product.price,"onUpdate:modelValue":n[3]||(n[3]=e=>i.product.price=e),class:(0,p.C_)({["validation"]:i.showErrors.price})},null,8,["placeholder","id","modelValue","class"]),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,p.zw)(i.showErrors.price),1)])),_:1}),(0,r.Wm)(l,{onClick:i.onSubmit,class:(0,p.C_)(["add-item-button",{["add-item-button-valid"]:i.product.name&&i.product.icon&&i.product.price}])},{default:(0,r.w5)((()=>[h])),_:1},8,["onClick","class"])],32)}var I=t(4870),b={setup(e,{emit:n}){const t=(0,I.qj)({name:{name:"Наименование товара",id:"1"},description:{name:"Описание товара",id:"2"},icon:{name:"Ссылка на изображение товара",id:"3"},price:{name:"Цена товара",id:"4"}}),o=(0,I.qj)({name:"",description:"",icon:"",price:""}),r=(0,I.qj)({name:"",price:"",icon:""});function i(){n("addProduct",{...o,id:Date.now()});for(let e in o)o[e]=""}const c=e=>{for(let n in o){if(""==o[n]&&"description"!=n)return r[n]="Поле является обязательным";r[n]=""}return i()};return{product:o,onSubmit:c,showErrors:r,newInputs:t}}},y=t(89);const P=(0,y.Z)(b,[["render",_]]);var O=P;const k={class:"content-border whole-product"},V=["src"],M={class:"text-content"},D={class:"content__name"},S={class:"content__description"},j={class:"content__price"};function x(e,n,t,o,i,c){return(0,r.wg)(),(0,r.iD)("div",k,[(0,r._)("img",{src:o.imageSourceChecker(t.productModel.icon),alt:"loading url ",class:"product-image"},null,8,V),(0,r._)("div",M,[(0,r._)("div",D,(0,p.zw)(t.productModel.name),1),(0,r._)("div",S,(0,p.zw)(t.productModel.description),1),(0,r._)("div",j,(0,p.zw)(t.productModel.price),1)]),(0,r._)("button",{class:"remove-trash",onClick:n[0]||(n[0]=(...e)=>o.emitOnRemoveProduct&&o.emitOnRemoveProduct(...e))})])}var W={setup(e,{emit:n}){const o=t=>{n("removeProduct",e.productModel)};function r(e){return"http"==e.substring(0,4)?e:t(6303)(`./${e}`)}return{emitOnRemoveProduct:o,imageSourceChecker:r}},props:{productModel:{required:!0,default:{name:{required:!0,type:String},description:{type:String},icon:{required:!0,type:String},price:{required:!0,type:String},id:{required:!0}}}}};const C=(0,y.Z)(W,[["render",x],["__scopeId","data-v-5ccbcd0c"]]);var E=C;const U={key:0,class:"list-of-products"},z={key:1};function H(e,n,t,i,c,u){const a=(0,r.up)("ProductItem");return t.products.length>0?((0,r.wg)(),(0,r.iD)("div",U,[(0,r.Wm)(o.W3,{name:"product-list"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.products,(e=>((0,r.wg)(),(0,r.j4)(a,{productModel:e,key:e.id,onRemoveProduct:i.removeProductHandler},null,8,["productModel","onRemoveProduct"])))),128))])),_:1})])):((0,r.wg)(),(0,r.iD)("h2",z," Список продуктов пуст! "))}var q={props:{products:{required:!0,type:Array}},setup(e,{emit:n}){function t(e){n("removeProduct",e)}return{removeProductHandler:t}},components:{ProductItem:E}};const Z=(0,y.Z)(q,[["render",H]]);var R=Z,N={setup(e,{emit:n}){const t=(0,I.iH)(""),o=(0,I.iH)("");function r(e){c.value=c.value.filter((n=>n.id!=e.id))}function i(e){c.value.push(e)}const c=(0,I.iH)([{name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",icon:"defaultProductImage.svg",price:"10 000 руб.",id:"1"},{name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",icon:"defaultProductImage.svg",price:"20 000 руб.",id:"2"},{name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",icon:"defaultProductImage.svg",price:"30 000 руб.",id:"3"},{name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",icon:"defaultProductImage.svg",price:"40 000 руб.",id:"4"},{name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",icon:"defaultProductImage.svg",price:"50 000 руб.",id:"5"},{name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",icon:"defaultProductImage.svg",price:"60 000 руб.",id:"6"}]);return{selectedOption:t,newIcon:o,arrayOfProducts:c,removeProductHandler:r,addProductHandler:i}},components:{StickyForm:O,ProductItem:E,ProductList:R}};const A=(0,y.Z)(N,[["render",s],["__scopeId","data-v-56edbcb6"]]);var F=A;const $=(0,r._)("option",{disabled:"",value:""},"По умолчанию",-1),L=["value"];function T(e,n,t,i,c,u){return(0,r.wy)(((0,r.wg)(),(0,r.iD)("select",{"onUpdate:modelValue":n[0]||(n[0]=e=>t.modelValue=e),onChange:n[1]||(n[1]=(...e)=>u.changeOption&&u.changeOption(...e)),class:"custom__select"},[$,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.options,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.value,value:e.value},(0,p.zw)(e.name),9,L)))),128))],544)),[[o.bM,t.modelValue]])}var B={name:"MySelect",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(e){this.$emit("update:modelValue",e.target.value)}}};const K=(0,y.Z)(B,[["render",T]]);var Y=K;const G={class:"btn"};function J(e,n,t,o,i,c){return(0,r.wg)(),(0,r.iD)("button",G,[(0,r.WI)(e.$slots,"default")])}var Q={name:"MyButton"};const X=(0,y.Z)(Q,[["render",J]]);var ee=X;const ne={class:"error"};function te(e,n,t,o,i,c){return(0,r.wg)(),(0,r.iD)("div",ne,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var oe={name:"MyError"};const re=(0,y.Z)(oe,[["render",te],["__scopeId","data-v-29ad6291"]]);var ie=re;const ce=["value","placeholder","id"];function ue(e,n,t,o,i,c){return(0,r.wg)(),(0,r.iD)("input",{value:t.modelValue,onInput:n[0]||(n[0]=(...e)=>o.emitOnInput&&o.emitOnInput(...e)),placeholder:t.placeholder,id:t.id,class:"input-text",type:"text"},null,40,ce)}var ae={name:"MyNewInput",setup(e,{emit:n}){const t=e=>{n("update:modelValue",e.target.value.trim())};return{emitOnInput:t}},props:{modelValue:[String,Number],placeholder:"",id:""}};const de=(0,y.Z)(ae,[["render",ue]]);var le=de,se=[Y,ee,ie,le];const pe=(0,o.ri)(F);se.forEach((e=>{pe.component(e.name,e)})),pe.mount("#app")},6303:function(e,n,t){var o={"./defaultProductImage.svg":2359,"./trashIcon.svg":8655,"./validationImage.svg":3455};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=6303},2359:function(e,n,t){"use strict";e.exports=t.p+"img/defaultProductImage.0427f2e6.svg"},8655:function(e,n,t){"use strict";e.exports=t.p+"img/trashIcon.945facac.svg"},3455:function(e,n,t){"use strict";e.exports=t.p+"img/validationImage.fc6ab2f2.svg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var c=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var u=!0,a=0;a<o.length;a++)(!1&i||c>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[a])}))?o.splice(a--,1):(u=!1,i<c&&(c=i));if(u){e.splice(l--,1);var d=r();void 0!==d&&(n=d)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/vue-junior-task/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,c=o[0],u=o[1],a=o[2],d=0;if(c.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(a)var l=a(t)}for(n&&n(o);d<c.length;d++)i=c[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunkvue_junior_task"]=self["webpackChunkvue_junior_task"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(1215)}));o=t.O(o)})();
//# sourceMappingURL=app.8ff78410.js.map