import{_ as e,d as a,J as s,r as t,a as n,o as r,c as u,e as l,w as o,a9 as d,aa as i,b as p,i as m,ab as f,a7 as c,a8 as v}from"./index-4bcd09b7.js";import{u as _}from"./user-4ac8f6d6.js";import"./index-f3780401.js";import"./index-437fd757.js";import"./use-route-fa30e426.js";const h={class:"login"},x=(e=>(c("data-v-37dfd6fc"),e=e(),v(),e))((()=>p("h2",null,"登录",-1))),b=m(" 登录 ");var w=e(a({__name:"index",setup(e){const a=_(),m=s({name:"admin",pwd:"123456"}),c=t(null),v=()=>{c.value.validate().then((async({valid:e,errors:s})=>{if(e){const e={...m};a.login(e).then((e=>{f.push({path:"/member"})}))}else console.log("error submit!!",s)}))};return(e,a)=>{const s=n("nut-form-item"),t=n("nut-button"),f=n("nut-form");return r(),u("div",h,[x,l(f,{ref_key:"ruleForm",ref:c,"model-value":m},{default:o((()=>[l(s,{required:"",prop:"name",rules:[{required:!0,message:"请输入用户名"}]},{default:o((()=>[d(p("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>m.name=e),class:"nut-input-text",placeholder:"请输入用户名",type:"text"},null,512),[[i,m.name]])])),_:1}),l(s,{required:"",prop:"pwd",rules:[{required:!0,message:"请填写联系电话"}]},{default:o((()=>[d(p("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>m.pwd=e),class:"nut-input-text",placeholder:"请输入密码",type:"password"},null,512),[[i,m.pwd]])])),_:1}),l(t,{block:"",type:"info",onClick:v},{default:o((()=>[b])),_:1})])),_:1},8,["model-value"])])}}}),[["__scopeId","data-v-37dfd6fc"],["__file","/home/runner/work/vue3-vite2-h5-template-sunnie/vue3-vite2-h5-template-sunnie/src/views/login/index.vue"]]);export{w as default};