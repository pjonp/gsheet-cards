(this["webpackJsonpgsheet-cards"]=this["webpackJsonpgsheet-cards"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),i=(t(10),t(2)),o=t(1),s=(t(11),t(12)),m="https://sheets.googleapis.com/v4/spreadsheets/".concat("1XohTWIr1RiBLp4ovmcs8rLuczRbOHG3-VRiREk4wEbk","/values/").concat("EARN PIECES by watching Charlie! - CLAIM REWARDS!","!A1:D500?key=").concat("AIzaSyCRemx367BUxEkAiXtSs7Wm9biGrTqf1bA");Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement((function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)([1,2,3]),u=Object(o.a)(l,2),p=u[0],E=u[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),f=h[0],g=h[1];Object(n.useEffect)((function(){s(m).then((function(e){return e.json()})).then((function(e){r(e.values||[])})).catch()}),[]);var v=function(e){var a=parseInt(e.target.value),t=Object(i.a)(p);t.indexOf(a)>=0?t.splice(t.indexOf(a),1):t.push(a),E(t)},b=function(e){if("Copied To Clipboard!"!==e.target.value){e.target.select(),e.target.setSelectionRange(0,99999),document.execCommand("Copy");var a=e.target.value,t=e.target;e.target.value="Copied To Clipboard!",setTimeout((function(){t.value=a}),2e3)}},C=/(\d+)(?=\/)/,k=Object(i.a)(t).filter((function(e,a){if(a>0&&e[0]===t[a-1][0])return!1;for(var n=0;n<=p.length;n++)if(e[1]==="TIER ".concat(p[n])&&e[0].toLowerCase().startsWith(f.toLowerCase()))return!0;return!1})).sort().map((function(e,a){var t=e[1],n="TIER 1"===t?"6,000":"TIER 2"===t?"12,000":"20,000";return c.a.createElement("div",{className:"itemContainer",key:e[0]},c.a.createElement("div",{className:"itemContainerBack"},c.a.createElement("a",{href:e[3],target:"_blank",rel:"noopener noreferrer",className:"itemName"},c.a.createElement("i",{class:"fab fa-steam-square"})," "+e[0]),c.a.createElement("div",{className:"itemImage",style:{backgroundImage:"url(".concat("/gsheet-cards/card_back.jpg",")")}},c.a.createElement("textarea",{rows:"2",onClick:b,value:"!redeem game".concat(t.replace("TIER ","")," ").concat(e[0]),readOnly:"readonly"})),c.a.createElement("div",{className:"itemInfo"},c.a.createElement("p",{className:"itemTier"},t),c.a.createElement("p",{className:"itemCost"},n," ",c.a.createElement("i",{className:"fas fa-puzzle-piece"},"'s")))),c.a.createElement("div",{className:"itemContainerFront"},c.a.createElement("p",{className:"itemName"},e[0]),c.a.createElement("div",{className:"itemImage",style:{backgroundImage:"url(https://steamcdn-a.akamaihd.net/steam/apps/".concat(C.exec(e[3])[0],"/header.jpg)")}}),c.a.createElement("div",{className:"itemInfo"},c.a.createElement("p",{className:"itemTier"},t),c.a.createElement("p",{className:"itemCost"},n," ",c.a.createElement("i",{className:"fas fa-puzzle-piece"},"'s")))))}));return c.a.createElement("div",{id:"appContainer"},c.a.createElement("h1",{id:"appHeader"},"CHARLIE'S STREAM STORE AVAILABILITY"),c.a.createElement("h2",{id:"appSubHeader"},"EARN PIECES by watching & chatting on Twitch"),c.a.createElement("nav",{id:"filterControl"},c.a.createElement("input",{type:"text",placeholder:"Filter By Name",value:f,onChange:function(e){g(e.target.value)}}),c.a.createElement("span",null,c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",value:"1",name:"tier",onChange:v,checked:p.some((function(e){return 1===e}))}),"Tier 1"),c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",value:"2",name:"tier",onChange:v,checked:p.some((function(e){return 2===e}))}),"Tier 2"),c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",value:"3",name:"tier",onChange:v,checked:p.some((function(e){return 3===e}))}),"Tier 3"))),c.a.createElement("div",{id:"contentContainer"},t.length?k.length?k:c.a.createElement("p",null,"No Games Found With These Filters"):c.a.createElement("p",null,"Loading...")))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.b92955be.chunk.js.map