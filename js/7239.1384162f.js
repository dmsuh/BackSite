"use strict";(self["webpackChunkmy_vuetify_app"]=self["webpackChunkmy_vuetify_app"]||[]).push([[7239],{3949:function(e,t,a){var r=a(4677),s=a(9346);const l=e=>{const t=(0,r.createConfirmDialog)(s.Z,{title:e.title||null,message:e.message||null,confirmText:e.confirmText||null,cancelText:e.cancelText||null});return t.onConfirm(e.onConfirm),e.onCancel&&t.onCancel(e.onCancel),t};t["Z"]=l},5040:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(3396),s=a(2268),l=a(3289);const n={class:"card-header"},i={class:"card-header-title"},o={class:"toolbar"};function d(e,t,a,d,u,c){const p=(0,r.up)("el-card");return(0,r.wg)(),(0,r.j4)(p,{class:"box-card"},{header:(0,r.w5)((()=>[(0,r._)("div",n,[(0,r._)("div",i,[(0,r.Wm)(l.t,{size:"small"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e.icon),1)])),_:1}),(0,r._)("span",null,(0,s.zw)(e.title),1)]),(0,r._)("div",o,[(0,r.WI)(e.$slots,"actions")])])])),default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default")])),_:3})}var u=(0,r.aZ)({name:"PageCard",props:{title:{type:String,default:null},icon:{type:String,default:null},color:{type:String,default:""}}}),c=a(89);const p=(0,c.Z)(u,[["render",d]]);var m=p},7239:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var r=a(3396),s=a(3289);const l=(0,r._)("img",{src:"https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif",style:{width:"100px",height:"80px"}},null,-1);function n(e,t,a,n,i,o){const d=(0,r.up)("el-button"),u=(0,r.up)("v-data-table"),c=(0,r.up)("page-card");return(0,r.wg)(),(0,r.j4)(c,{icon:"mdi-format-list-bulleted",title:e.$t("returnStatus.table"),color:"grey"},{actions:(0,r.w5)((()=>[(0,r.Wm)(d,{circle:"",type:"success",onClick:t[0]||(t[0]=t=>e.handleCreate())},{default:(0,r.w5)((()=>[(0,r.Wm)(s.t,null,{default:(0,r.w5)((()=>[(0,r.Uk)("mdi-plus")])),_:1})])),_:1}),e.itemsSelected.length?((0,r.wg)(),(0,r.j4)(d,{key:0,type:"danger",circle:"",onClick:t[1]||(t[1]=t=>e.handleDelete())},{default:(0,r.w5)((()=>[(0,r.Wm)(s.t,null,{default:(0,r.w5)((()=>[(0,r.Uk)("mdi-delete")])),_:1})])),_:1})):(0,r.kq)("",!0)])),default:(0,r.w5)((()=>[(0,r.Wm)(u,{"server-options":e.serverOptions,"onUpdate:serverOptions":t[2]||(t[2]=t=>e.serverOptions=t),"items-selected":e.itemsSelected,"onUpdate:itemsSelected":t[3]||(t[3]=t=>e.itemsSelected=t),"server-items-length":e.dataTable.total,loading:e.isLoading,headers:e.headers,items:e.dataTable.data},{"item-action":(0,r.w5)((t=>[(0,r.Wm)(d,{type:"primary",circle:"",onClick:a=>e.handleUpdate(t)},{default:(0,r.w5)((()=>[(0,r.Wm)(s.t,null,{default:(0,r.w5)((()=>[(0,r.Uk)("mdi-pencil-outline")])),_:1})])),_:2},1032,["onClick"])])),loading:(0,r.w5)((()=>[l])),_:1},8,["server-options","items-selected","server-items-length","loading","headers","items"])])),_:1},8,["title"])}var i=a(7139),o=a(5040),d=a(7315),u=a(3949),c=(0,r.aZ)({setup(){const e=(0,i.oR)(),[t,a,r]=(0,d.Z)((t=>e.dispatch("returnStatus/loadTable",t))),[s,l,n]=(0,d.Z)((t=>e.dispatch("returnStatus/deleteRows",t)));return{loadTable:t,status:a,error:r,deleteRows:s,deleteStatus:l,deleteError:n}},components:{PageCard:o.Z},computed:{isLoading(){return this.status===d.i.pending},dataTable(){return this.$store.getters["returnStatus/getDataTable"]}},watch:{serverOptions:{handler:function(e){this.loadServerSide(e)},deep:!0}},data(){return{headers:[{text:"id",value:"id",sortable:!0},{text:"Название",value:"name",sortable:!0},{text:"Порядок сортировки",value:"sortOrder",sortable:!0},{text:"Действие",value:"action",width:60}],itemsSelected:[],serverOptions:{page:1,rowsPerPage:5,sortBy:"id",sortType:"desc"}}},mounted(){this.loadServerSide(this.serverOptions)},methods:{handleCreate(){this.$router.push({name:"return-status-create"})},handleUpdate(e){this.$router.push({name:"return-status-update",params:{id:e.id}})},async handleDelete(){const e=(0,u.Z)({title:"Удаление атрибутов",message:"Вы действительно хотите удалить выбранную группу атрибутов?",onConfirm:async()=>{await this.deleteRows(this.itemsSelected.map((e=>e.id))),this.itemsSelected=[],await this.loadServerSide(this.serverOptions)}});await e.reveal()},loadServerSide(e){const t={limit:e.rowsPerPage,offset:(e.page-1)*e.rowsPerPage};e.sortBy&&e.sortType&&(t.order=`${e.sortBy}:${e.sortType}`),this.loadTable(t)}}}),p=a(89);const m=(0,p.Z)(c,[["render",n]]);var h=m}}]);
//# sourceMappingURL=7239.1384162f.js.map