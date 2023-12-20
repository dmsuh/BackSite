"use strict";(self["webpackChunkmy_vuetify_app"]=self["webpackChunkmy_vuetify_app"]||[]).push([[5111],{7828:function(e,t,r){r.d(t,{rQ:function(){return n}});var i=r(4956),s=r(5658);class l{constructor(){(0,i.Z)(this,"rules",void 0),(0,i.Z)(this,"currentField",void 0),(0,i.Z)(this,"locale",void 0),this.rules={},this.currentField="",this.locale=(0,s.QT)()}field(e){return this.currentField=e,this.rules[e]||(this.rules[e]=[]),this}required(e="blur"){return this.checkField()?(this.setRuleItem({required:!0,message:this.locale.t("main.rules.required"),trigger:e}),this):this}decimal(e=!1,t="blur"){if(!this.checkField())return this;const r=function(e,t){return/^[-+]?[0-9]+\.[0-9]+$/.test(t)};return this.setRuleItem({required:e,type:"string",message:this.locale.t("main.rules.decimal"),validator:r,trigger:t}),this}phone(e=!1,t="blur"){if(!this.checkField())return this;const r=function(e,t){return/^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/.test(t)};return this.setRuleItem({required:e,type:"string",message:this.locale.t("main.rules.phone"),validator:r,trigger:t}),this}length(e=0,t=255,r="blur"){return this.checkField()?(this.setRuleItem({min:e,max:t,message:this.locale.t("main.rules.length",[e,t]),trigger:r}),this):this}minLength(e=0,t="blur"){return this.checkField()?(this.setRuleItem({min:e,message:this.locale.t("main.rules.minLength",[e]),trigger:t}),this):this}maxLength(e=255,t="blur"){return this.checkField()?(this.setRuleItem({max:e,message:this.locale.t("main.rules.maxLength",[e]),trigger:t}),this):this}enum(e,t="blur"){return this.checkField()?(this.setRuleItem({type:"enum",enum:e,message:this.locale.t("main.rules.enum"),trigger:t}),this):this}boolean(e="blur"){return this.checkField()?(this.setRuleItem({type:"boolean",message:this.locale.t("main.rules.boolean"),trigger:e}),this):this}date(e="blur"){return this.checkField()?(this.setRuleItem({type:"date",message:this.locale.t("main.rules.date"),trigger:e}),this):this}url(e="blur"){return this.checkField()?(this.setRuleItem({type:"url",message:this.locale.t("main.rules.url"),trigger:e}),this):this}email(e="blur"){return this.checkField()?(this.setRuleItem({type:"email",message:this.locale.t("main.rules.email"),trigger:e}),this):this}number(e="blur"){return this.checkField()?(this.setRuleItem({type:"number",message:this.locale.t("main.rules.number"),trigger:e}),this):this}string(e="blur"){return this.checkField()?(this.setRuleItem({type:"string",message:this.locale.t("main.rules.string"),trigger:e}),this):this}end(){return this.rules}setRuleItem(e){Array.isArray(this.rules[this.currentField])?this.rules[this.currentField].push(e):this.rules[this.currentField]=e}checkField(){return!!this.currentField&&(this.rules[this.currentField]||(this.rules[this.currentField]=[]),!0)}}class u{constructor(e){(0,i.Z)(this,"builder",void 0),this.builder=e}title(e=255){return this.builder.field("title").required().string().maxLength(e),this}name(e=64){return this.builder.field("name").required().string().maxLength(e),this}isoCode2(e=2){return this.builder.field("isoCode2").string().length(e,e),this}isoCode3(e=3){return this.builder.field("isoCode3").string().length(e,e),this}image(e=!1,t=255){return this.builder.field("image").string("change").maxLength(t,"change"),e&&this.builder.required("change"),this}code(e=10,t=!0){return this.builder.field("code").string().maxLength(e),t&&this.builder.required(),this}fromName(e=64){return this.builder.field("fromName").required().string().maxLength(e),this}toName(e=64){return this.builder.field("toName").required().string().maxLength(e),this}message(e=64){return this.builder.field("message").required().string().maxLength(e),this}amount(){return this.builder.field("amount").required().decimal(),this}voucherThemeId(){return this.builder.field("voucherThemeId").required().number(),this}toEmail(e=96){return this.builder.field("toEmail").required().email().maxLength(e),this}isActive(){return this.builder.field("isActive").required().boolean(),this}fromEmail(e=96){return this.builder.field("fromEmail").required().email().maxLength(e),this}firstName(e=64){return this.builder.field("firstName").required().string().maxLength(e),this}lastName(e=64){return this.builder.field("lastName").required().string().maxLength(e),this}middleName(e=64){return this.builder.field("middleName").string().maxLength(e),this}customerGroupId(e=!0){return this.builder.field("customerGroupId").number("change"),e&&this.builder.required("change"),this}countryId(e=!0){return this.builder.field("countryId").number("change"),e&&this.builder.required("change"),this}zoneId(e=!0){return this.builder.field("zoneId").number("change"),e&&this.builder.required("change"),this}email(e=96){return this.builder.field("email").required().email().maxLength(e),this}phone(e=32){return this.builder.field("phone").required().string().maxLength(e),this}postcode(e=10){return this.builder.field("postcode").string().maxLength(e),this}city(e=128){return this.builder.field("city").required().string().maxLength(e),this}address(e="address",t=!1,r=128){return this.builder.field(e).string().maxLength(r),t&&this.builder.required(),this}company(e=!1,t=64){return this.builder.field("company").string().maxLength(t),e&&this.builder.required(),this}password(e=!1,t=6,r=32){return this.builder.field("password").string().length(t,r),e&&this.builder.required(),this}unit(e=!1,t=4){return this.builder.field("unit").string(),e&&this.builder.required(),t&&this.builder.maxLength(t),this}value(e=!1){return this.builder.field("value").string(),e&&this.builder.required(),this}metaDescription(e=!1){return this.builder.field("metaDescription").string().maxLength(255),e&&this.builder.required(),this}metaKeyword(e=!1){return this.builder.field("metaKeyword").string().maxLength(255),e&&this.builder.required(),this}seoUrl(e=!1){return this.builder.field("seoUrl").string().maxLength(255),e&&this.builder.required(),this}metaTitle(e=!1){return this.builder.field("metaTitle").string().maxLength(255),e&&this.builder.required(),this}location(e=!1){return this.builder.field("location").string().maxLength(128),e&&this.builder.required(),this}description(e=!1,t){return this.builder.field("description").string(),e&&this.builder.required(),t&&this.builder.maxLength(t),this}points(){return this.builder.field("points").required().number(),this}sortOrder(e=!1){return this.builder.field("sortOrder").number(),e&&this.builder.required(),this}price(){return this.builder.field("price").required().decimal(),this}close(){return this.builder.end()}}class n{static builder(){return new l}static templates(){return new u(this.builder())}}const d=function(){return e=>"string"===typeof e?!!e.length||"Данное поле обязательно!":!(null===e||void 0===e)||"Данное поле обязательно!"},a=function(e){return t=>t.length>e||`Минимальное количество символов ${e}!`},h=function(e){return t=>t.length<e||`Минимальное количество символов ${e}!`},o=function(){const e=/^[\w-\]+@[\w-]+\.[a-z]{2,4}$/i;return t=>e.test(t)||"Введите корректную почту"},m=function(){const e=/^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;return t=>e.test(t)||"Введите корректный номер телефона"};d(),h(64),d(),h(64),d(),o(),d(),m(),d(),a(6),h(64),d(),h(64),d(),h(64),h(64),d(),h(64),h(64),d(),o(),d(),m(),d(),a(6),h(64)},5040:function(e,t,r){r.d(t,{Z:function(){return c}});var i=r(3396),s=r(2268),l=r(3289);const u={class:"card-header"},n={class:"card-header-title"},d={class:"toolbar"};function a(e,t,r,a,h,o){const m=(0,i.up)("el-card");return(0,i.wg)(),(0,i.j4)(m,{class:"box-card"},{header:(0,i.w5)((()=>[(0,i._)("div",u,[(0,i._)("div",n,[(0,i.Wm)(l.t,{size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.icon),1)])),_:1}),(0,i._)("span",null,(0,s.zw)(e.title),1)]),(0,i._)("div",d,[(0,i.WI)(e.$slots,"actions")])])])),default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3})}var h=(0,i.aZ)({name:"PageCard",props:{title:{type:String,default:null},icon:{type:String,default:null},color:{type:String,default:""}}}),o=r(89);const m=(0,o.Z)(h,[["render",a]]);var c=m},5111:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var i=r(3396),s=r(3289);function l(e,t,r,l,u,n){const d=(0,i.up)("el-button"),a=(0,i.up)("return-reason-form"),h=(0,i.up)("page-card");return(0,i.wg)(),(0,i.j4)(h,{icon:"mdi-pencil-outline",title:e.$t("returnReason.update"),color:"grey"},{actions:(0,i.w5)((()=>[(0,i.Wm)(d,{onClick:t[0]||(t[0]=t=>e.handleSubmit()),type:"success",circle:""},{default:(0,i.w5)((()=>[(0,i.Wm)(s.t,null,{default:(0,i.w5)((()=>[(0,i.Uk)("mdi-content-save-outline")])),_:1})])),_:1}),(0,i.Wm)(d,{onClick:t[1]||(t[1]=t=>e.handleBack()),type:"default",circle:""},{default:(0,i.w5)((()=>[(0,i.Wm)(s.t,null,{default:(0,i.w5)((()=>[(0,i.Uk)("mdi-backup-restore")])),_:1})])),_:1})])),default:(0,i.w5)((()=>[(0,i.Wm)(a,{ref:"form",modelValue:e.model,"onUpdate:modelValue":t[2]||(t[2]=t=>e.model=t),"is-loading":e.isLoading},null,8,["modelValue","is-loading"])])),_:1},8,["title"])}var u=r(4870),n=r(7139),d=r(7315),a=r(5040),h=r(4846),o=(0,i.aZ)({setup(){const e=(0,n.oR)(),[t,r,i]=(0,d.Z)((t=>e.dispatch("returnReason/loadForm",t))),[s,l,a]=(0,d.Z)(((t,r)=>e.dispatch("returnReason/updateForm",{id:t,dataForm:r}))),h=(0,u.iH)();return{loadForm:t,loadStatus:r,loadError:i,saveForm:s,saveStatus:l,saveError:a,form:h}},components:{PageCard:a.Z,ReturnReasonForm:h.Z},computed:{isLoading(){return this.saveStatus===d.i.pending||this.loadStatus===d.i.pending}},data(){return{model:null}},async mounted(){this.model=await this.loadForm(this.$route.params.id)},methods:{handleBack(){this.$router.push({name:"return-reason"})},async handleSubmit(){if(this.form&&await this.form.validate()){const e=await this.saveForm(this.$route.params.id,this.model);"undefined"!==typeof e&&(this.model=e)}}}}),m=r(89);const c=(0,m.Z)(o,[["render",l]]);var g=c},4846:function(e,t,r){r.d(t,{Z:function(){return h}});var i=r(3396);function s(e,t,r,s,l,u){const n=(0,i.up)("el-input"),d=(0,i.up)("el-form-item"),a=(0,i.up)("el-input-number"),h=(0,i.up)("el-form"),o=(0,i.Q2)("loading");return(0,i.wy)(((0,i.wg)(),(0,i.j4)(h,{ref:"form",model:e.model,rules:e.rules,"label-width":"250px"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{label:e.$t("main.labels.name"),prop:"name"},{default:(0,i.w5)((()=>[(0,i.Wm)(n,{modelValue:e.model.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model.name=t),placeholder:e.$t("main.labels.name")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,i.Wm)(d,{label:e.$t("main.labels.sortOrder"),prop:"sortOrder"},{default:(0,i.w5)((()=>[(0,i.Wm)(a,{modelValue:e.model.sortOrder,"onUpdate:modelValue":t[1]||(t[1]=t=>e.model.sortOrder=t),placeholder:e.$t("main.labels.sortOrder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1},8,["model","rules"])),[[o,e.isLoading]])}var l=r(4870),u=r(7828),n=(0,i.aZ)({name:"ReturnReasonForm",setup(){return{form:(0,l.iH)(),rules:(0,l.qj)(u.rQ.templates().name().sortOrder().close())}},props:{modelValue:Object,isLoading:Boolean,isNew:{type:Boolean,default:!1}},watch:{modelValue:{handler:function(e){this.model=e},deep:!0},model:{handler:function(e){this.$emit("update:modelValue",e)},deep:!0}},data(){return{model:this.modelValue||{sortOrder:0,name:""},isValid:!1}}}),d=r(89);const a=(0,d.Z)(n,[["render",s]]);var h=a}}]);
//# sourceMappingURL=5111.63c21343.js.map