(this.webpackJsonpcovidapp=this.webpackJsonpcovidapp||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(4),a=n.n(o),i=(n(22),n(3)),s=(n(23),n(8),n(1)),d=function(){return Object(s.jsx)("div",{id:"Header",class:"header",children:Object(s.jsx)("h1",{children:"Covid Tracker"})})},l=function(e){return Object(s.jsxs)("tr",{id:e.country.replaceAll(" ",""),children:[Object(s.jsx)("td",{children:e.country}),Object(s.jsx)("td",{children:e.data})]})},u=n(5),j=n.n(u),b=n(6),p=(n(44),function(e){return Object(s.jsxs)("div",{class:"main-body",children:[Object(s.jsx)(b.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,toastStyle:{backgroundColor:"blue",color:"white"}}),Object(s.jsxs)("div",{id:"selectcnt",children:[Object(s.jsx)("div",{}),Object(s.jsxs)("select",{id:"cntry",children:[Object(s.jsx)("option",{value:"Default",children:"Choose Country"}),0===e.country.length?Object(s.jsx)("option",{children:"Waiting!"}):e.country.map((function(e,t){return Object(s.jsx)("option",{children:e},"cntry"+String(t))}))]}),Object(s.jsx)("button",{onClick:function(e){e.preventDefault(),function(){if("Default"!==document.getElementById("cntry").value){var e,t,n,c=document.getElementById("date").value,r=new Date;if("T"===c){var o=document.getElementById("cntry");if(null==o)return;var a=o.value.replaceAll(" ",""),i=document.getElementById(a),s=i.style.backgroundColor;return i.style.backgroundColor="white",i.style.animation="glow 4s 1",i.style.backgroundColor=s,void i.scrollIntoView()}"Y"===c?(r.setDate(r.getDate()-1),e=String(r.getDate()).padStart(2,"0"),t=String(r.getMonth()+1).padStart(2,"0"),n=r.getFullYear(),c=n+"-"+t+"-"+e):(e=String(r.getDate()).padStart(2,"0"),t=String(r.getMonth()+1).padStart(2,"0"),n=r.getFullYear(),c=n-1+"-"+t+"-"+e);var d={method:"GET",url:"https://covid-193.p.rapidapi.com/history",params:{country:document.getElementById("cntry").value.toLowerCase(),day:c},headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"7bbbf7ef36msh496831d8995bb5cp167ac0jsn1214f1d375f4"}};j.a.request(d).then((function(e){var t=e.data.response[e.data.response.length-1],n=document.getElementById("type").innerHTML.toLowerCase();b.b.info(t.country+" : "+t.cases[n]+" "+n+" cases on "+c+"!")})).catch((function(e){console.error(e)}))}else b.b.error("Please choose a country!")}()},children:"Find"}),Object(s.jsx)("div",{})]}),Object(s.jsxs)("div",{id:"extras",children:[Object(s.jsxs)("select",{id:"date",children:[Object(s.jsx)("option",{value:"T",children:"Today"}),Object(s.jsx)("option",{value:"Y",children:"Yesterday"}),Object(s.jsx)("option",{value:"L",children:"Last Year"})]}),Object(s.jsxs)("select",{onChange:function(t){t.preventDefault(),e.update(t.target.value)},children:[Object(s.jsx)("option",{value:"Active",children:"Active"}),Object(s.jsx)("option",{value:"Critical",children:"Critical"}),Object(s.jsx)("option",{value:"New",children:"New"}),Object(s.jsx)("option",{value:"Recovered",children:"Recovered"}),Object(s.jsx)("option",{value:"Total",children:"Total"})]})]}),Object(s.jsxs)("table",{id:"Table",children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Countries"}),Object(s.jsx)("th",{id:"type",children:"Active"})]}),0===e.data.length?Object(s.jsx)("h4",{children:"Waiting!"}):e.data.map((function(e,t){return Object(s.jsx)(l,{country:e.country,data:e.data},"cntryno"+String(t))}))]})]})});var h=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([]),a=Object(i.a)(o,2),l=a[0],u=a[1],b=Object(c.useState)([]),h=Object(i.a)(b,2),O=h[0],v=h[1],y=Object(c.useState)("active"),g=Object(i.a)(y,2),f=g[0],x=g[1];return Object(c.useEffect)((function(){j.a.request({method:"GET",url:"https://covid-193.p.rapidapi.com/statistics",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"7bbbf7ef36msh496831d8995bb5cp167ac0jsn1214f1d375f4"}}).then((function(e){r(e.data.response);for(var t=[],c=[],o=0;o<e.data.response.length;o++)t.push({country:e.data.response[o].country,data:n[o].cases[f.toLowerCase()]?n[o].cases[f.toLowerCase()]:"NA"}),c.push(n[o].country);c.sort(),v(c),u(t)})).catch((function(e){console.error(e)}))}),[n]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{}),Object(s.jsx)(p,{data:l,country:O,update:function(e){x(e.toLowerCase());for(var t=[],c=0;c<n.length;c++)t.push({country:n[c].country,data:n[c].cases[e.toLowerCase()]?n[c].cases[e.toLowerCase()]:"NA"});u(t),document.getElementById("type").innerHTML=e}}),Object(s.jsx)("button",{id:"topbtn",onClick:function(){document.getElementById("Header").scrollIntoView()},children:"Top \u219f"})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),O()},8:function(e,t,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.d4968af4.chunk.js.map