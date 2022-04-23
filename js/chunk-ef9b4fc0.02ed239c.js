(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef9b4fc0"],{"4bd4":function(e,t,r){"use strict";var i=r("5530"),a=(r("caad"),r("2532"),r("07ac"),r("4de4"),r("159b"),r("7db0"),r("58df")),n=r("7e2b"),l=r("3206");t["a"]=Object(a["a"])(n["a"],Object(l["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,r=function(e){return e.$watch("hasError",(function(r){t.$set(t.errorBag,e._uid,r)}),{immediate:!0})},i={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=e.$watch("shouldValidate",(function(a){a&&(t.errorBag.hasOwnProperty(e._uid)||(i.valid=r(e)))})):i.valid=r(e),i},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var r=this.watchers.find((function(e){return e._uid===t._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},8261:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"d-flex justify-content-right mt-10 mb-5"},[r("AddBtn",{attrs:{content:"إضافة كابتن"},on:{submit:function(t){e.addDriver=!0,e.driver={}}}})],1),r("v-dialog",{attrs:{width:"1000",persistent:""},model:{value:e.addDriver,callback:function(t){e.addDriver=t},expression:"addDriver"}},[r("AddEditDriver",{attrs:{driver:e.driver},on:{pushInDriverList:function(t){return e.AddToArr(t,e.driverData)},closeDialogAddDriver:function(t){e.addDriver=!1},itemEditing:function(t){return e.EditArr(t,e.driverData)}}})],1),r("DriverTable",{attrs:{driver:e.driver,driverData:e.driverData,loadingMain:e.loadingMainData},on:{openDialogAddDriver:function(t){e.addDriver=!0},DriverInfo:function(t){e.driver=t},deleteDriver:function(t){return e.DeleteObjFromArr(e.driverData,t)}}})],1)},a=[],n=r("1da1"),l=(r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",{staticClass:"pa-5"},[r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$emit("closeDialogAddDriver")}}},[r("v-icon",[e._v("mdi-close")])],1),r("h2",{staticClass:"text-center mb-5"},[e._v(e._s(e.driver._id?"تعديل بيانات الكابتن":"إضافة كابتن"))]),r("v-form",{on:{submit:function(t){return t.preventDefault(),e.addNewDriver(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.allRules.required,e.allRules.minNameLen(4)],dense:"",outlined:"",label:"اسم الكابتن",type:"text"},model:{value:e.driver.username,callback:function(t){e.$set(e.driver,"username",t)},expression:"driver.username"}})],1),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.allRules.required,e.allRules.validEmail],dense:"",outlined:"",label:"البريد الإلكتروني",type:"email"},model:{value:e.driver.email,callback:function(t){e.$set(e.driver,"email",t)},expression:"driver.email"}})],1),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.allRules.required,e.allRules.minNameLen(4)],dense:"",outlined:"",label:"العنوان",type:"text"},model:{value:e.driver.address,callback:function(t){e.$set(e.driver,"address",t)},expression:"driver.address"}})],1)],1),r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.allRules.required,e.allRules.length(8)],dense:"",outlined:"",label:"رقم الهوية",type:"number"},model:{value:e.driver.idNum,callback:function(t){e.$set(e.driver,"idNum",t)},expression:"driver.idNum"}})],1),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.allRules.required,e.allRules.length(2)],dense:"",outlined:"",label:"رقم البيت",type:"number"},model:{value:e.driver.homeNum,callback:function(t){e.$set(e.driver,"homeNum",t)},expression:"driver.homeNum"}})],1),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.allRules.required,e.allRules.length(8)],dense:"",outlined:"",label:"رقم الموقع",type:"number"},model:{value:e.driver.locationNum,callback:function(t){e.$set(e.driver,"locationNum",t)},expression:"driver.locationNum"}})],1)],1),r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.allRules.required,e.allRules.length(3)],dense:"",outlined:"",label:"رقم الموتوسيكل",type:"text"},model:{value:e.driver.motoType,callback:function(t){e.$set(e.driver,"motoType",t)},expression:"driver.motoType"}})],1),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.allRules.required,e.allRules.length(8)],dense:"",outlined:"",label:"الهاتف",type:"number"},model:{value:e.driver.phone,callback:function(t){e.$set(e.driver,"phone",t)},expression:"driver.phone"}})],1),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.allRules.required],dense:"",outlined:"",label:"رقم الشارع",type:"number"},model:{value:e.driver.strNum,callback:function(t){e.$set(e.driver,"strNum",t)},expression:"driver.strNum"}})],1)],1),r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"3",id:"idFace"}},[e.driver._id?r("div",[r("div",{staticClass:"d-flex align-items-center justify-content-center flex-column"},[r("div",[r("v-icon",{attrs:{button:""},on:{click:e.ref}},[e._v("mdi-camera")])],1),r("img",{staticClass:"mt-2 mb-2",attrs:{src:e.driver.locationFace,width:"100",height:"100"}}),r("label",{staticClass:"font-weight-bold"},[e._v("صورة البطاقة من الامام")])])]):r("v-text-field",{attrs:{outlined:"",dense:"",placeholder:"صورة الهوية من الامام",readonly:""},on:{click:e.ref},model:{value:e.driver.locationFace,callback:function(t){e.$set(e.driver,"locationFace",t)},expression:"driver.locationFace"}}),r("input",{ref:"imgIdFace",staticClass:"d-none",attrs:{type:"file",id:"1",rules:[e.allRules.required],multiple:""},on:{change:e.uploadFile}})],1),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"3",id:"idBack"}},[r("v-text-field",{directives:[{name:"show",rawName:"v-show",value:!e.driver._id,expression:"!driver._id"}],attrs:{outlined:"",dense:"",placeholder:"صورة الهوية من الخلف",readonly:""},on:{click:e.ref},model:{value:e.driver.locationBack,callback:function(t){e.$set(e.driver,"locationBack",t)},expression:"driver.locationBack"}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.driver._id,expression:"driver._id"}]},[r("div",{staticClass:"d-flex align-items-center justify-content-center flex-column"},[r("div",[r("v-icon",{attrs:{button:""},on:{click:e.ref}},[e._v("mdi-camera")])],1),r("img",{staticClass:"mt-2 mb-2",attrs:{src:e.driver.locationBack,width:"100",height:"100"}}),r("label",{staticClass:"font-weight-bold"},[e._v("صورة البطاقة من الخلف")])])]),r("input",{ref:"imgIdBack",staticClass:"d-none",attrs:{type:"file",rules:[e.allRules.required],single:"",id:"2"},on:{change:e.uploadFile}})],1),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"3",id:"nationalityFace"}},[e.driver._id?r("div",[r("div",{staticClass:"d-flex align-items-center justify-content-center flex-column"},[r("div",[r("v-icon",{attrs:{button:""},on:{click:e.ref}},[e._v("mdi-camera")])],1),r("img",{staticClass:"mt-2 mb-2",attrs:{src:e.driver.nationalityFace,width:"100",height:"100"}}),r("label",{staticClass:"font-weight-bold"},[e._v("صورة الباسبور من الامام")])])]):r("v-text-field",{attrs:{outlined:"",dense:"",placeholder:"صورة الجنسية من الامام",readonly:""},on:{click:e.ref},model:{value:e.driver.nationalityFace,callback:function(t){e.$set(e.driver,"nationalityFace",t)},expression:"driver.nationalityFace"}}),r("input",{ref:"imgNationalityFace",staticClass:"d-none",attrs:{type:"file",rules:[e.allRules.required],single:"",id:"3"},on:{change:e.uploadFile}})],1),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"3",id:"nationalityBack"}},[e.driver._id?r("div",[r("div",{staticClass:"d-flex align-items-center justify-content-center flex-column"},[r("div",[r("v-icon",{attrs:{button:""},on:{click:e.ref}},[e._v("mdi-camera")])],1),r("img",{staticClass:"mt-2 mb-2",attrs:{src:e.driver.nationalityBack,width:"100",height:"100"}}),r("label",{staticClass:"font-weight-bold"},[e._v("صورة الباسبور من الخلف")])])]):r("v-text-field",{attrs:{outlined:"",dense:"",placeholder:"صورة الجنسية من الخلف",readonly:""},on:{click:e.ref},model:{value:e.driver.nationalityBack,callback:function(t){e.$set(e.driver,"nationalityBack",t)},expression:"driver.nationalityBack"}}),r("input",{ref:"imgNationalityBack",staticClass:"d-none",attrs:{type:"file",rules:[e.allRules.required],single:"",id:"4"},on:{change:e.uploadFile}})],1)],1),r("v-row",[e.driver._id?e._e():r("v-col",{staticClass:"pt-0",attrs:{cols:"12",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.allRules.required],dense:"",outlined:"",label:"الرقم السري","append-icon":e.showPass?"mdi-eye":"mdi-eye-off",type:e.showPass?"text":"password"},on:{"click:append":function(t){e.showPass=!e.showPass}},model:{value:e.driver.password,callback:function(t){e.$set(e.driver,"password",t)},expression:"driver.password"}})],1)],1),r("v-row",{attrs:{justify:"center",aling:"center"}},[r("v-col",{staticClass:"d-flex justify-center pt-0",attrs:{cols:"12",md:"8"}},[r("v-btn",{staticClass:"font-weight-bold success",attrs:{type:"submit",disabled:!e.valid,loading:e.loading}},[e._v(e._s(e.driver._id?"حفظ تعديلا الكابتن":"تسجيل الكابتن"))])],1)],1)],1)],1)],1)}),s=[],o=r("d4ec"),d=r("bee2"),c=r("202f"),u=function(){function e(){Object(o["a"])(this,e)}return Object(d["a"])(e,null,[{key:"editDriver",value:function(e){return Object(c["a"])().put("driver",e)}},{key:"createDriver",value:function(e){return Object(c["a"])().post("driver",e)}},{key:"addDriverImg",value:function(e){return Object(c["a"])().put("driver-img",e)}},{key:"deleteDriver",value:function(e){return Object(c["a"])().delete("driver/".concat(e))}},{key:"getDriver",value:function(){return Object(c["a"])().get("driver")}}]),e}(),v=u,m={props:["driver"],data:function(){return{valid:!1,loading:!1,showPass:""}},methods:{addNewDriver:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.driver),r=new FormData,r.append("address",e.driver.address),r.append("email",e.driver.email),r.append("homeNum",e.driver.homeNum),r.append("idNum",e.driver.idNum),r.append("locationNum",e.driver.locationNum),r.append("motoType",e.driver.motoType),r.append("username",e.driver.username),r.append("strNum",e.driver.strNum),r.append("phone",e.driver.phone),r.append("password",e.driver.password),r.append("locationFace",e.driver.locationFace),r.append("locationBack",e.driver.locationBack),r.append("nationalityFace",e.driver.nationalityFace),r.append("nationalityBack",e.driver.nationalityBack),!e.driver._id){t.next=38;break}return console.log(e.driver._id),t.prev=18,e.loading=!0,r.append("_id",e.driver._id),t.next=23,v.editDriver(r);case 23:i=t.sent,console.log(i),e.loading=!1,e.$emit("closeDialogAddDriver"),e.$emit("itemEditing",i.data.driver),e.ToasteSuccessMsg("تم تعديل معلومات الكابتن بنجاح"),t.next=36;break;case 31:t.prev=31,t.t0=t["catch"](18),console.log(t.t0),e.loading=!1,e.toastErrorMsg("حدث خطأ اثناء تعديل معلومات الكابتن");case 36:t.next=55;break;case 38:return t.prev=38,e.loading=!0,t.next=42,v.createDriver(r);case 42:a=t.sent,console.log(a),e.loading=!1,e.$emit("closeDialogAddDriver"),e.$emit("pushInDriverList",a.data.driver),e.ToasteSuccessMsg("تم إضافة الكابتن بنجاح"),t.next=55;break;case 50:t.prev=50,t.t1=t["catch"](38),console.log(t.t1),e.loading=!1,e.toastErrorMsg("حدث خطأ اثناء إضافة الكابتن");case 55:case"end":return t.stop()}}),t,null,[[18,31],[38,50]])})))()},ref:function(e){console.log(e);var t=e.path[5].id||e.path[4].id;console.log(t),"idFace"===t?this.$refs.imgIdFace.click():"idBack"===t?this.$refs.imgIdBack.click():"nationalityFace"===t?this.$refs.imgNationalityFace.click():"nationalityBack"===t?this.$refs.imgNationalityBack.click():console.log("eeeeeee")},uploadFile:function(e){var t=e.target.id.charAt(e.target.id.length-1);console.log(t),1==t?this.driver.locationFace=e.target.files[0]:2==t?this.driver.locationBack=e.target.files[0]:3==t?this.driver.nationalityFace=e.target.files[0]:4==t&&(this.driver.nationalityBack=e.target.files[0])}}},p=m,f=r("2877"),g=r("6544"),h=r.n(g),b=r("8336"),D=r("b0af"),x=r("62ad"),k=r("4bd4"),w=r("132d"),y=r("0fd9"),_=r("8654"),C=Object(f["a"])(p,l,s,!1,null,"4ec12e26",null),I=C.exports;h()(C,{VBtn:b["a"],VCard:D["a"],VCol:x["a"],VForm:k["a"],VIcon:w["a"],VRow:y["a"],VTextField:_["a"]});var $=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("v-card",[r("v-card-title",[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"بحث","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),r("v-data-table",{attrs:{headers:e.headerDrvier,items:e.driverData,loading:e.loadingMain,search:e.search},scopedSlots:e._u([{key:"item.img",fn:function(t){var i=t.item;return[i.img?r("img",{staticClass:"pa-2 rounded-circle",attrs:{width:"100px",height:"100px",src:i.img}}):r("v-icon",{staticClass:"accountIcon"},[e._v("mdi-account-circle")])]}},{key:"item.actions",fn:function(t){var i=t.item;return[r("v-icon",{attrs:{color:"success",medium:""},on:{click:function(t){return e.editDriver(i)}}},[e._v("mdi-pen")]),r("v-icon",{staticClass:"mr-2",attrs:{color:"error",medium:""},on:{click:function(t){return e.opendelDriver(i)}}},[e._v("mdi-delete")])]}},{key:"item.action",fn:function(t){var i=t.item;return[r("v-icon",{attrs:{color:"success"},on:{click:function(t){return e.refImgDriver(i)}}},[e._v("mdi-camera")]),r("input",{ref:"uploadImageProfile",staticClass:"d-none",attrs:{type:"file",rules:[e.allRules.required],single:""},on:{change:e.uploadFileProfileDriver}})]}}],null,!0)}),r("v-dialog",{attrs:{width:"500"},model:{value:e.openDeleteDriver,callback:function(t){e.openDeleteDriver=t},expression:"openDeleteDriver"}},[r("deleteItemsConfirmMsg",{attrs:{loading:e.loading,content:"الكابتن"},on:{submit:e.sureDelDriver,closeDeleteDilog:function(t){e.openDeleteDriver=!1}}})],1)],1)],r("v-dialog",{attrs:{width:"400",persistent:""},model:{value:e.openAddImg,callback:function(t){e.openAddImg=t},expression:"openAddImg"}},[r("AddImg",{attrs:{loading:e.loading,content:e.driver.img?"تأكيد تغير صورة الكابتن":"تأكيد وضع صورة جديدة للكابتن"},on:{closeAddImg:function(t){e.openAddImg=!1},AddImgs:e.addImg}})],1)],2)},B=[],F=r("5530"),R=(r("c740"),r("a434"),{props:["driverData","loadingMain","driver"],data:function(){return{search:"",loading:!1,userId:null,openDeleteDriver:!1,images:null,openAddImg:!1,headerDrvier:[{text:"الاسم",align:"center",value:"username"},{text:"البريد الالكتروني",align:"center",filterable:!1,value:"email"},{text:"العنوان",align:"center",value:"address"},{text:"رقم الهاتف",align:"center",value:"phone"},{text:"الصورة",align:"center",value:"img"},{text:"تعديل او إضافة صورة",align:"center",value:"action"},{text:"تعديل او حذف",align:"center",value:"actions"}]}},methods:{editDriver:function(e){this.$emit("openDialogAddDriver"),this.$emit("DriverInfo",Object(F["a"])({},e)),console.log(this.driver)},opendelDriver:function(e){console.log(e),this.userId=e._id,this.openDeleteDriver=!0,console.log(this.openDeleteDriver)},sureDelDriver:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e.userId),e.loading=!0,t.next=5,v.deleteDriver(e.userId);case 5:r=t.sent,console.log(r),e.loading=!1,e.openDeleteDriver=!1,e.$emit("deleteDriver",e.userId),e.ToasteSuccessMsg("تم مسح الكابتن بنجاح"),console.log(e.driverData),t.next=19;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0),e.loading=!1,e.toastErrorMsg("حدث خطأ اثناء مسح الكابتن");case 19:case"end":return t.stop()}}),t,null,[[0,14]])})))()},refImgDriver:function(e){this.$emit("DriverInfo",Object(F["a"])({},e)),this.$refs.uploadImageProfile.click()},uploadFileProfileDriver:function(e){this.images=e.target.files,console.log(this.images),this.images.length>0&&(this.openAddImg=!0,console.log(this.images.length))},addImg:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,i,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=new FormData,console.log(e.images),r.append("files",e.images[0]),r.append("_id",e.driver._id),e.loading=!0,t.next=8,v.addDriverImg(r);case 8:i=t.sent,console.log(i),e.loading=!1,e.openAddImg=!1,a=i.data.driver,n=e.driverData.findIndex((function(e){return e._id===a._id})),console.log(n),e.driverData.splice(n,1,a),e.ToasteSuccessMsg("تم اضافة صورة للكابتن بنجاح"),t.next=24;break;case 19:t.prev=19,t.t0=t["catch"](0),console.log(t.t0),e.loadingImg=!1,e.toastErrorMsg("يوجد خطأ اثناء اضافة صورة للكابتن");case 24:case"end":return t.stop()}}),t,null,[[0,19]])})))()}}}),N=R,j=r("99d9"),A=r("8fea"),V=r("169a"),O=Object(f["a"])(N,$,B,!1,null,"b513599a",null),E=O.exports;h()(O,{VCard:D["a"],VCardTitle:j["c"],VDataTable:A["a"],VDialog:V["a"],VIcon:w["a"],VTextField:_["a"]});var T={components:{DriverTable:E,AddEditDriver:I},data:function(){return{driver:{},addDriver:!1,driverData:[]}},methods:{},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loadingMainData=!0,t.next=4,v.getDriver();case 4:r=t.sent,e.driverData=r.data.drivers,e.loadingMainData=!1,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0),e.loadingMainData=!1;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},M=T,q=Object(f["a"])(M,i,a,!1,null,"8c4c7e18",null);t["default"]=q.exports;h()(q,{VDialog:V["a"]})}}]);
//# sourceMappingURL=chunk-ef9b4fc0.02ed239c.js.map