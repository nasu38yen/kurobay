import{X as f,Y as g,B as d,Z as p,u as x,$ as l,a0 as y,p as m}from"./DsocThBg.js";function $(){return m().public["nuxt-scripts"]}function v(r,e){var o,n,u;r=typeof r=="string"?{src:r}:r,e=f(e,(o=$())==null?void 0:o.defaultScriptOptions);const s=e.trigger==="onNuxtReady"?"preload":"preconnect",i=r.src&&!r.src.startsWith("/"),t=g(r);r.src&&e.trigger!=="server"&&(s==="preload"||i)&&d({link:[{rel:s,as:s==="preload"?"script":void 0,href:r.src,crossorigin:i?typeof r.crossorigin<"u"?r.crossorigin:"anonymous":void 0,key:`nuxt-script-${t}`,tagPriority:s==="preload"?"high":0,fetchpriority:"low"}]}),e.trigger==="onNuxtReady"&&(e.trigger=p);const c=x();c.$scripts=c.$scripts||l({}),!!((n=c.$scripts)!=null&&n[t])||(u=performance==null?void 0:performance.mark)==null||u.call(performance,"mark_feature_usage",{detail:{feature:e.performanceMarkFeature??`nuxt-scripts:${t}`}});const a=y(r,e);return c.$scripts[t]=a,a}export{v as u};
