import{d as p,j as k,k as u,o as n,c as l,a as e,t as d,g as y,f as V,e as r,v as c,n as w,l as x,m,p as I,_ as b,i as v}from"./index-p2jwud9_.js";const S={class:"max-width"},E={class:"form-container"},$={class:"form-info"},q={class:"form-title"},C={key:0,class:"form-paragraph"},T={class:"form-group"},U={class:"form-group"},j={key:0,class:"error-message"},N={class:"form-group"},D={class:"form-group"},F={class:"checkbox-group"},M=p({__name:"TheForm",props:{title:{},description:{},backgroundImage:{}},setup(f){const a=k({name:"",email:"",phone:"",message:"",privacy:!1}),s=u(()=>a.email.trim()===""),g=u(()=>s.value?!0:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)),h=u(()=>s.value?"Email is required":g.value?"":"Invalid email format"),_=async()=>{if(!a.privacy){alert("You must agree to the privacy policy.");return}const i={name:a.name,email:a.email,phone:a.phone,message:a.message,privacyAccepted:a.privacy};console.log("Form data ready for submission:",i);try{(await fetch("https://api.hubapi.com/form-endpoint",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).ok?alert("Form submitted successfully!"):alert("There was an issue submitting the form.")}catch(o){console.error("Error submitting form:",o),alert("Error submitting form. Please try again later.")}};return(i,o)=>(n(),l("section",{class:"form-section",style:I({backgroundImage:`url(${i.backgroundImage})`})},[e("div",S,[e("div",E,[e("div",$,[e("h2",q,d(i.title),1),i.description?(n(),l("p",C,d(i.description),1)):y("",!0)]),e("form",{onSubmit:V(_,["prevent"]),class:"form"},[e("div",T,[o[5]||(o[5]=e("label",{for:"name"},"Name",-1)),r(e("input",{id:"name",type:"text",placeholder:"Input your name here","onUpdate:modelValue":o[0]||(o[0]=t=>a.name=t),required:""},null,512),[[c,a.name]])]),e("div",U,[o[6]||(o[6]=e("label",{for:"email"},"Email (*required)",-1)),r(e("input",{id:"email",type:"email",placeholder:"example@gmail.com","onUpdate:modelValue":o[1]||(o[1]=t=>a.email=t),class:w({invalid:!g.value&&a.email!==""}),required:""},null,2),[[c,a.email]]),h.value?(n(),l("span",j,d(h.value),1)):y("",!0)]),e("div",N,[o[7]||(o[7]=e("label",{for:"phone"},"Phone number",-1)),r(e("input",{id:"phone",type:"tel",placeholder:"+46701234567","onUpdate:modelValue":o[2]||(o[2]=t=>a.phone=t)},null,512),[[c,a.phone]])]),e("div",D,[o[8]||(o[8]=e("label",{for:"message"},"What can we do for you? (*required)",-1)),r(e("textarea",{id:"message",placeholder:"Describe your challenge","onUpdate:modelValue":o[3]||(o[3]=t=>a.message=t),required:""},null,512),[[c,a.message]])]),e("div",F,[r(e("input",{class:"checkbox",id:"privacy",type:"checkbox","onUpdate:modelValue":o[4]||(o[4]=t=>a.privacy=t),required:""},null,512),[[x,a.privacy]]),o[9]||(o[9]=e("label",{for:"privacy"},[m(" I agree to the "),e("a",{href:"#",class:"privacy-link"},"privacy policy"),m(" (*required) ")],-1))]),o[10]||(o[10]=e("button",{type:"submit",class:"form-button"},"Send",-1))],32)])])],4))}}),B=b(M,[["__scopeId","data-v-f3c6a130"]]),L={class:"location-section"},P={class:"location-container"},z={class:"location-card"},A=["src"],O={class:"location-info"},R={class:"card-title"},H=p({__name:"TheLocation",props:{imageUrl:{},location:{}},setup(f){return(a,s)=>(n(),l("section",L,[e("div",P,[s[1]||(s[1]=e("h2",{class:"location-title"},"Visit us",-1)),e("div",z,[e("img",{src:a.imageUrl,alt:"Location Image",class:"location-image"},null,8,A),e("div",O,[e("h3",R,d(a.location),1),s[0]||(s[0]=e("p",{class:"location-address"},[m(" Hornsgatan 156"),e("br"),m(" 117 28 Stockholm, Sweden"),e("br"),m(" +46 12 345 67 89 "),e("br"),e("a",{href:"mailto:hej@deslicer.com"},"hej@deslicer.com")],-1))])])])]))}}),J=b(H,[["__scopeId","data-v-0f8f4ff6"]]),Y=p({__name:"ContactView",setup(f){return(a,s)=>(n(),l("main",null,[v(B,{title:"Contact us today, get a savings estimation tomorrow",description:"Are you ready to start automating your SIEM system? Contact us for an initial talk and we can make a rough estimate on how much resources you may be able to save.",backgroundImage:"images/siem-automation-deslicer-contact-bg.jpg"}),v(J,{"image-url":"images/stockholm-office.jpg",location:"Stockholm"})]))}});export{Y as default};