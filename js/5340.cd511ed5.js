"use strict";(self["webpackChunkmy_vuetify_app"]=self["webpackChunkmy_vuetify_app"]||[]).push([[5340],{5277:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var r=o(3396),a=o(3289);function u(e,t,o,u,i,s){const n=(0,r.up)("el-button"),d=(0,r.up)("customer-group-form"),l=(0,r.up)("page-card");return(0,r.wg)(),(0,r.j4)(l,{icon:"mdi-pencil-outline",title:e.$t("customerGroup.create"),color:"grey"},{actions:(0,r.w5)((()=>[(0,r.Wm)(n,{onClick:t[0]||(t[0]=t=>e.handleSubmit()),type:"success",circle:""},{default:(0,r.w5)((()=>[(0,r.Wm)(a.t,null,{default:(0,r.w5)((()=>[(0,r.Uk)("mdi-content-save-outline")])),_:1})])),_:1}),(0,r.Wm)(n,{onClick:t[1]||(t[1]=t=>e.handleBack()),type:"default",circle:""},{default:(0,r.w5)((()=>[(0,r.Wm)(a.t,null,{default:(0,r.w5)((()=>[(0,r.Uk)("mdi-backup-restore")])),_:1})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Wm)(d,{ref:"form",modelValue:e.model,"onUpdate:modelValue":t[2]||(t[2]=t=>e.model=t),"is-loading":e.isLoading,"is-new":""},null,8,["modelValue","is-loading"])])),_:1},8,["title"])}var i=o(4870),s=o(7139),n=o(7315),d=o(5040),l=o(8438),m=(0,r.aZ)({setup(){const e=(0,s.oR)(),[t,o,r]=(0,n.Z)((t=>e.dispatch("customerGroup/createForm",t))),a=(0,i.iH)();return{saveForm:t,saveStatus:o,saveError:r,form:a}},components:{PageCard:d.Z,CustomerGroupForm:l.Z},computed:{isLoading(){return this.saveStatus===n.i.pending}},data(){return{model:{sortOrder:0,description:"",name:"New group"}}},methods:{handleBack(){this.$router.push({name:"customer-group"})},async handleSubmit(){if(this.form&&await this.form.validate()){const e=await this.saveForm(this.model);"undefined"!==typeof e&&(this.model=e),this.model?.id&&this.$router.push({name:"customer-group-update",params:{id:this.model.id}})}}}}),c=o(89);const p=(0,c.Z)(m,[["render",u]]);var f=p}}]);
//# sourceMappingURL=5340.cd511ed5.js.map