import{d as c,x as p,c as _,e as d,t as u,I as g,K as l,n as m,k as i}from"./DsocThBg.js";const f={class:"absolute text-sm font-medium py-0.5 group-hover:border-primary-500 -top-3 border border-300 rounded-full bg-white px-3.5 text-gray-600 dark:bg-gray-800 dark:border-gray-500 dark:text-white"},b=c({__name:"Tag",setup(o){const t=p();return(n,a)=>{var r,e,s;return _(),d("span",f,u((s=(e=(r=g(t))==null?void 0:r.directory)==null?void 0:e.featured)==null?void 0:s.labelForCard),1)}}}),x=c({__name:"Tag",props:["tag"],setup(o){const t=p().directory.tags,n=o,a=t==null?void 0:t.find(e=>e.name===n.tag),r=l(()=>a!=null&&a.color?`${a.color}-tag`:"gray-tag");return(e,s)=>(_(),d("span",{class:m(g(r))},u(o.tag),3))}}),h=i(x,[["__scopeId","data-v-024f4efd"]]);export{b as _,h as a};
