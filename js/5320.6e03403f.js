"use strict";(self["webpackChunkmy_vuetify_app"]=self["webpackChunkmy_vuetify_app"]||[]).push([[5320],{8099:function(){},5320:function(e,t,l){l.r(t),l.d(t,{default:function(){return v}});var o=l(3396),u=l(7718),a=l(3369);function n(e,t){const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(u.q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(a.K,{fluid:"",style:{height:"100%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(l)])),_:1})])),_:1})}var i=l(89);const r={},s=(0,i.Z)(r,[["render",n]]);var v=s},7718:function(e,t,l){l.d(t,{q:function(){return s}});var o=l(3396),u=l(7396),a=l(7041),n=l(9903),i=l(320),r=l(9888);const s=(0,i.a)({name:"VApp",props:{...(0,u.GB)({fullHeight:!0}),...(0,a.x$)()},setup(e,t){let{slots:l}=t;const i=(0,a.ER)(e),{layoutClasses:s,layoutStyles:v,getLayoutItem:c,items:f,layoutRef:d}=(0,u.te)(e),{rtlClasses:y}=(0,n.Vw)();return(0,r.L)((()=>{var e;return(0,o.Wm)("div",{ref:d,class:["v-application",i.themeClasses.value,s.value,y.value],style:v.value},[(0,o.Wm)("div",{class:"v-application__wrap"},[null==(e=l.default)?void 0:e.call(l)])])})),{getLayoutItem:c,items:f,theme:i}}})},3369:function(e,t,l){l.d(t,{K:function(){return i}});var o=l(3396),u=(l(8099),l(1138)),a=l(320),n=l(9888);const i=(0,a.a)({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...(0,u.Q)()},setup(e,t){let{slots:l}=t;return(0,n.L)((()=>(0,o.Wm)(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},l))),{}}})},7396:function(e,t,l){l.d(t,{$Y:function(){return y},GB:function(){return f},eW:function(){return p},o8:function(){return d},te:function(){return g}});l(1703);var o=l(3712),u=l(3396),a=l(4870),n=l(3766),i=l(7514),r=l(131);const s=Symbol.for("vuetify:layout"),v=Symbol.for("vuetify:layout-item"),c=1e3,f=(0,n.U)({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),d=(0,n.U)({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function y(){const e=(0,u.f3)(s);if(!e)throw new Error("Could not find injected Vuetify layout");return e}function p(e){var t;const l=(0,u.f3)(s);if(!l)throw new Error("Could not find injected Vuetify layout");const o=null!=(t=e.id)?t:`layout-item-${(0,i.sq)()}`,n=(0,i.FN)("useLayoutItem");(0,u.JJ)(v,{id:o});const r=(0,a.iH)(!1);(0,u.se)((()=>r.value=!0)),(0,u.dl)((()=>r.value=!1));const{layoutItemStyles:c,layoutItemScrimStyles:f}=l.register(n,{...e,active:(0,u.Fl)((()=>!r.value&&e.active.value)),id:o});return(0,u.Jd)((()=>l.unregister(o))),{layoutItemStyles:c,layoutRect:l.layoutRect,layoutItemScrimStyles:f}}const m=(e,t,l,o)=>{let u={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...u}}];for(const n of e){const e=t.get(n),i=l.get(n),r=o.get(n);if(!e||!i||!r)continue;const s={...u,[e.value]:parseInt(u[e.value],10)+(r.value?parseInt(i.value,10):0)};a.push({id:n,layer:s}),u=s}return a};function g(e){const t=(0,u.f3)(s,null),l=(0,u.Fl)((()=>t?t.rootZIndex.value-100:c)),n=(0,a.iH)([]),f=(0,a.qj)(new Map),d=(0,a.qj)(new Map),y=(0,a.qj)(new Map),p=(0,a.qj)(new Map),g=(0,a.qj)(new Map),{resizeRef:h,contentRect:w}=(0,o.y)(),b=(0,u.Fl)((()=>{var t;const l=new Map,o=null!=(t=e.overlaps)?t:[];for(const e of o.filter((e=>e.includes(":")))){const[t,o]=e.split(":");if(!n.value.includes(t)||!n.value.includes(o))continue;const u=f.get(t),a=f.get(o),i=d.get(t),r=d.get(o);u&&a&&i&&r&&(l.set(o,{position:u.value,amount:parseInt(i.value,10)}),l.set(t,{position:a.value,amount:-parseInt(r.value,10)}))}return l})),I=(0,u.Fl)((()=>{const e=[...new Set([...y.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[];for(const l of e){const e=n.value.filter((e=>{var t;return(null==(t=y.get(e))?void 0:t.value)===l}));t.push(...e)}return m(t,f,d,p)})),x=(0,u.Fl)((()=>!Array.from(g.values()).some((e=>e.value)))),S=(0,u.Fl)((()=>{const e=I.value[I.value.length-1].layer;return{"--v-layout-left":(0,r.kb)(e.left),"--v-layout-right":(0,r.kb)(e.right),"--v-layout-top":(0,r.kb)(e.top),"--v-layout-bottom":(0,r.kb)(e.bottom),...x.value?void 0:{transition:"none"}}})),$=(0,u.Fl)((()=>I.value.slice(1).map(((e,t)=>{let{id:l}=e;const{layer:o}=I.value[t],u=d.get(l);return{id:l,...o,size:Number(u.value)}})))),F=e=>$.value.find((t=>t.id===e)),C=(0,i.FN)("createLayout"),L=(0,a.iH)(!1);(0,u.bv)((()=>{L.value=!0})),(0,u.JJ)(s,{register:(e,t)=>{let{id:o,order:a,position:i,layoutSize:s,elementSize:m,active:h,disableTransitions:w,absolute:S}=t;y.set(o,a),f.set(o,i),d.set(o,s),p.set(o,h),w&&g.set(o,w);const F=(0,r.bY)(v,null==C?void 0:C.vnode),R=F.indexOf(e);R>-1?n.value.splice(R,0,o):n.value.push(o);const j=(0,u.Fl)((()=>$.value.findIndex((e=>e.id===o)))),k=(0,u.Fl)((()=>l.value+2*I.value.length-2*j.value)),q=(0,u.Fl)((()=>{const e="left"===i.value||"right"===i.value,t="right"===i.value,u="bottom"===i.value,a={[i.value]:0,zIndex:k.value,transform:`translate${e?"X":"Y"}(${(h.value?0:-110)*(t||u?-1:1)}%)`,position:S.value||l.value!==c?"absolute":"fixed",...x.value?void 0:{transition:"none"}};if(!L.value)return a;if(j.value<0)throw new Error(`Layout item "${o}" is missing`);const n=$.value[j.value];if(!n)throw new Error(`Could not find layout item "${o}`);const r=b.value.get(o);return r&&(n[r.position]+=r.amount),{...a,height:e?`calc(100% - ${n.top}px - ${n.bottom}px)`:m.value?`${m.value}px`:void 0,left:t?void 0:`${n.left}px`,right:t?`${n.right}px`:void 0,top:"bottom"!==i.value?`${n.top}px`:void 0,bottom:"top"!==i.value?`${n.bottom}px`:void 0,width:e?m.value?`${m.value}px`:void 0:`calc(100% - ${n.left}px - ${n.right}px)`}})),z=(0,u.Fl)((()=>({zIndex:k.value-1})));return{layoutItemStyles:q,layoutItemScrimStyles:z,zIndex:k}},unregister:e=>{y.delete(e),f.delete(e),d.delete(e),p.delete(e),g.delete(e),n.value=n.value.filter((t=>t!==e))},mainStyles:S,getLayoutItem:F,items:$,layoutRect:w,rootZIndex:l});const R=(0,u.Fl)((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),j=(0,u.Fl)((()=>({zIndex:l.value,position:t?"relative":void 0,overflow:t?"hidden":void 0})));return{layoutClasses:R,layoutStyles:j,getLayoutItem:F,items:$,layoutRect:w,layoutRef:h}}}}]);
//# sourceMappingURL=5320.6e03403f.js.map