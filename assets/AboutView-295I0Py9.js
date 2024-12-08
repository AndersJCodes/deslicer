import{d as m,o as n,c as i,a as e,F as _,r as f,t as c,_ as y,b as u,w as x,n as v,e as T,v as M,f as I,g as S,h as C,i as d,H as $}from"./index-p2jwud9_.js";const D={class:"about-section"},F={class:"team"},O={class:"team-grid"},E=["src","alt"],H={class:"role"},A={class:"bio"},B=m({__name:"TheTeam",setup(p){const o=[{name:"Roger Lindquist",role:"Founder / CEO",bio:"Roger is an experienced IT professional with over 25 years in various roles, including IT Manager, Architect, and Consultant, now specializing in infrastructure, security, and automation.",image:"images/deslicer-roger-2.png"},{name:"Saikrishna Gundeti",role:"Founder / CTO",bio:"Saikrishna excels at aligning IT capabilities with business goals, drawing on over 15 years of experience in IT operations, data analytics, and automation. His expertise spans Splunk, AI/ML, and multi-cloud environments.",image:"./images/deslicer-saikrishna-2.png"},{name:"Daniel Young",role:"Founder / CSO",bio:"Daniel is a technology leader with a strong background in software engineering, operational intelligence, and strategic leadership. His vision has driven Deslicer’s growth and customer success.",image:"./images/deslicer-daniel-2.png"}];return(r,a)=>(n(),i("section",D,[a[1]||(a[1]=e("div",{class:"vision-mission"},[e("div",{class:"mission"},[e("h2",null,"Deslicer at a glance"),e("p",null," We make your SIEM system more human, by letting the computer do the hard work of onboarding, maintenance, and updates. Now you can spend more time on insights, threat defense, and company growth. ")]),e("div",{class:"vision"},[e("h2",null,"Our story"),e("p",null," Deslicer was founded by three SIEM industry veterans with a mission to transform SIEM implementations into a streamlined, turnkey solution. Their extensive experience in the industry has given them deep insight into potential bottlenecks and opportunities for innovation. ")])],-1)),e("div",F,[a[0]||(a[0]=e("h2",null,"Our Team",-1)),e("div",O,[(n(),i(_,null,f(o,s=>e("div",{class:"team-member",key:s.name},[e("img",{src:s.image,alt:`Photo of ${s.name}`},null,8,E),e("h3",null,c(s.name),1),e("p",H,c(s.role),1),e("p",A,c(s.bio),1)])),64))])])]))}}),U=y(B,[["__scopeId","data-v-a6b53ddb"]]),V="/deslicer/svg/chat.svg",q={key:0,class:"chat-body"},z={key:0,class:"message-with-image"},N=["src"],L={key:1},j={ref:"lastMessage"},G=m({__name:"ChatBot",setup(p){const o=u(""),r=u([]),a=u(null),s=u(!0),w=()=>{s.value=!s.value},b=async()=>{if(o.value.trim()!==""){r.value.push({text:o.value,isUser:!0});try{const t=await(await fetch("https://yesno.wtf/api")).json();r.value.push({text:t.answer,isUser:!1,image:t.image})}catch{r.value.push({text:"Oops! Something went wrong. Try again later.",isUser:!1})}o.value="",await C(),h()}},h=()=>{a.value&&(a.value.scrollTop=a.value.scrollHeight)};return x(r,()=>{h()}),(g,t)=>(n(),i("div",{class:v(["chat-container",{minimized:s.value}])},[e("div",{class:"chat-header",onClick:w},t[1]||(t[1]=[e("img",{src:V,alt:""},null,-1)])),s.value?S("",!0):(n(),i("div",q,[e("div",{class:"chat-messages",ref_key:"chatMessages",ref:a},[(n(!0),i(_,null,f(r.value,(l,k)=>(n(),i("div",{key:k,class:v(["chat-message",{user:l.isUser}])},[l.image?(n(),i("div",z,[e("img",{src:l.image,alt:"GIF response"},null,8,N),e("p",null,c(l.text),1)])):(n(),i("p",L,c(l.text),1))],2))),128)),e("div",j,null,512)],512),e("form",{onSubmit:I(b,["prevent"]),class:"chat-input"},[T(e("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),type:"text",placeholder:"Ask me a yes/no question...",required:""},null,512),[[M,o.value]]),t[2]||(t[2]=e("button",{type:"submit"},"Send",-1))],32)]))],2))}}),R=y(G,[["__scopeId","data-v-1eb36a6a"]]),Q=m({__name:"AboutView",setup(p){return(o,r)=>(n(),i("main",null,[d($,{subHeader:"Our Mission",header:"SIEM management for humans",paragraph:"Focus on analysis and growth, instead of onboardings, support and updates.",image:"./images/siem-automation-desclier-about-hero.jpg"}),d(U),d(R)]))}});export{Q as default};