(()=>{"use strict";const t=20;function e(o,n,l){const c=o.next();c.value&&function(e,o,n){!function(){const t=document.getElementById("asdf");t.getContext("2d").clearRect(0,0,t.width,t.height)}(),function(e,o){const n=document.getElementById("asdf").getContext("2d"),l=o=>{const l=[e[o[0]],e[o[1]]];n.beginPath(),n.moveTo(t+5*l[0].x,t+5*l[0].y),n.lineTo(t+5*l[1].x,t+5*l[1].y),n.strokeStyle="black",n.lineWidth=4,n.stroke()};for(const t of o)l(t)}(o,n),function(e,o){const n=document.getElementById("asdf").getContext("2d");for(let s=0;s<e;s++)l=o[s].x,c=o[s].y,n.beginPath(),n.arc(5*l+t,5*c+t,10,0,2*Math.PI,!1),n.stroke(),n.fillStyle="blue",n.fill();var l,c}(e,o)}(n,l,c.value),setTimeout((()=>{e(o,n,l)}),100)}{const t=document.getElementById("submit");t&&(t.onclick=()=>{for(let t=0;t<10;t++)console.log(Math.random());const t=document.getElementById("nodeInput"),o=document.getElementById("edgeInput");if(t&&o){const n=parseInt(t.value.trim()),l=o.value.trim().split(/\s/).map((t=>parseInt(t)));if(2*n==l.length){const t=[];for(let e=0;e<n;e++)t[e]={x:l[2*e],y:l[2*e+1]};e(function*(t,e){let o=t/2,n=0,l=0;const c=[];e.sort(((t,e)=>t.x-e.x));for(let e=0;e<t;e++)c[e]=e;const s=e=>(e+t)%t,r=(t,o)=>{t=s(t),o=s(o);const n=e[c[t]].x-e[c[o]].x,l=e[c[t]].y-e[c[o]].y;return Math.sqrt(n*n+l*l)};for(let e=0;e<t;e++)for(let n=e+1;n<t;n++)o=Math.max(o,r(e,n));const a=(t,e)=>{if((t=s(t))>(e=s(e))){const o=t;t=e,e=o}for(let o=0;t+o<e-o;o++){const n=c[t+o];c[t+o]=c[e-o],c[e-o]=n}};let d=[];const f=()=>{let e=0;for(let o=0;o<t;o++)e+=r(o-1,o);return e};n=f();for(let e=0;e<1e6;e++){for(let e=0;e<1e3;e++){const e=Math.floor(Math.random()*t),r=Math.floor(Math.random()*t);n=f(),a(e,r),l=f();const i=[];for(let e=0;e<t;e++)i.push([c[s(e-1)],c[e]]);const u=Math.exp((n-l)/(1*o));l<n||u>=Math.random()?d=i:a(e,r),o*=.9999}yield d}}(n,t),n,t)}else document.write("정점의 개수와 간선의 개수가 모순됩니다.")}else document.write("Node Count & Graph Data 모두 입력하세요.")}),console.log("1")}})();