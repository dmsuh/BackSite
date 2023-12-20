"use strict";(self["webpackChunkmy_vuetify_app"]=self["webpackChunkmy_vuetify_app"]||[]).push([[95],{3949:function(e,t,a){var s=a(4677),r=a(9346);const l=e=>{const t=(0,s.createConfirmDialog)(r.Z,{title:e.title||null,message:e.message||null,confirmText:e.confirmText||null,cancelText:e.cancelText||null});return t.onConfirm(e.onConfirm),e.onCancel&&t.onCancel(e.onCancel),t};t["Z"]=l},5040:function(e,t,a){a.d(t,{Z:function(){return m}});var s=a(3396),r=a(2268),l=a(3289);const i={class:"card-header"},n={class:"card-header-title"},o={class:"toolbar"};function d(e,t,a,d,c,u){const p=(0,s.up)("el-card");return(0,s.wg)(),(0,s.j4)(p,{class:"box-card"},{header:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s._)("div",n,[(0,s.Wm)(l.t,{size:"small"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(e.icon),1)])),_:1}),(0,s._)("span",null,(0,r.zw)(e.title),1)]),(0,s._)("div",o,[(0,s.WI)(e.$slots,"actions")])])])),default:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"default")])),_:3})}var c=(0,s.aZ)({name:"PageCard",props:{title:{type:String,default:null},icon:{type:String,default:null},color:{type:String,default:""}}}),u=a(89);const p=(0,u.Z)(c,[["render",d]]);var m=p},95:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var s=a(3396),r=a(3289);const l=(0,s._)("img",{src:"https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif",style:{width:"100px",height:"80px"}},null,-1);function i(e,t,a,i,n,o){const d=(0,s.up)("el-button"),c=(0,s.up)("v-data-table"),u=(0,s.up)("page-card");return(0,s.wg)(),(0,s.j4)(u,{icon:"mdi-format-list-bulleted",title:e.$t("productStatus.table"),color:"grey"},{actions:(0,s.w5)((()=>[(0,s.Wm)(d,{circle:"",type:"success",onClick:t[0]||(t[0]=t=>e.handleCreate())},{default:(0,s.w5)((()=>[(0,s.Wm)(r.t,null,{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-plus")])),_:1})])),_:1}),e.itemsSelected.length?((0,s.wg)(),(0,s.j4)(d,{key:0,type:"danger",circle:"",onClick:t[1]||(t[1]=t=>e.handleDelete())},{default:(0,s.w5)((()=>[(0,s.Wm)(r.t,null,{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-delete")])),_:1})])),_:1})):(0,s.kq)("",!0)])),default:(0,s.w5)((()=>[(0,s.Wm)(c,{"server-options":e.serverOptions,"onUpdate:serverOptions":t[2]||(t[2]=t=>e.serverOptions=t),"items-selected":e.itemsSelected,"onUpdate:itemsSelected":t[3]||(t[3]=t=>e.itemsSelected=t),"server-items-length":e.dataTable.total,loading:e.isLoading,headers:e.headers,items:e.dataTable.data},{"item-action":(0,s.w5)((t=>[(0,s.Wm)(d,{type:"primary",circle:"",onClick:a=>e.handleUpdate(t)},{default:(0,s.w5)((()=>[(0,s.Wm)(r.t,null,{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-pencil-outline")])),_:1})])),_:2},1032,["onClick"])])),loading:(0,s.w5)((()=>[l])),_:1},8,["server-options","items-selected","server-items-length","loading","headers","items"])])),_:1},8,["title"])}var n=a(7139),o=a(5040),d=a(7315),c=a(3949),u=(0,s.aZ)({setup(){const e=(0,n.oR)(),[t,a,s]=(0,d.Z)((t=>e.dispatch("productStatus/loadTable",t))),[r,l,i]=(0,d.Z)((t=>e.dispatch("productStatus/deleteRows",t)));return{loadTable:t,status:a,error:s,deleteRows:r,deleteStatus:l,deleteError:i}},components:{PageCard:o.Z},computed:{isLoading(){return this.status===d.i.pending},dataTable(){return this.$store.getters["productStatus/getDataTable"]}},watch:{serverOptions:{handler:function(e){this.loadServerSide(e)},deep:!0}},data(){return{headers:[{text:"id",value:"id",sortable:!0},{text:"Название",value:"name",sortable:!0},{text:"Порядок сортировки",value:"sortOrder",sortable:!0},{text:"Действие",value:"action",width:60}],itemsSelected:[],serverOptions:{page:1,rowsPerPage:5,sortBy:"id",sortType:"desc"}}},mounted(){this.loadServerSide(this.serverOptions)},methods:{handleCreate(){this.$router.push({name:"product-status-create"})},handleUpdate(e){this.$router.push({name:"product-status-update",params:{id:e.id}})},async handleDelete(){const e=(0,c.Z)({title:"Удаление атрибутов",message:"Вы действительно хотите удалить выбранную группу атрибутов?",onConfirm:async()=>{await this.deleteRows(this.itemsSelected.map((e=>e.id))),this.itemsSelected=[],await this.loadServerSide(this.serverOptions)}});await e.reveal()},loadServerSide(e){const t={limit:e.rowsPerPage,offset:(e.page-1)*e.rowsPerPage};e.sortBy&&e.sortType&&(t.order=`${e.sortBy}:${e.sortType}`),this.loadTable(t)}}}),p=a(89);const m=(0,p.Z)(u,[["render",i]]);var h=m}}]);
//# sourceMappingURL=95.46c7ceb8.js.map