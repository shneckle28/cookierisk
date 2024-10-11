(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function g(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=g(e);fetch(e.href,n)}})();const L=document.getElementById("cookie-banner"),k=document.getElementById("accept-cookies"),T=document.getElementById("main-content"),w=document.getElementById("exampleText"),r=document.getElementById("infoReveal");L.style.display="block";T.classList.add("hidden");k.addEventListener("click",()=>{L.style.display="none",T.classList.remove("hidden"),w.style.display="block",w.classList.add("exampleText-visible"),r.classList.remove("hidden"),B()});function B(){let l=navigator.userAgent,s=window.screen.width,g=window.screen.height,a=Intl.DateTimeFormat().resolvedOptions().timeZone,e=navigator.language||navigator.languages[0],n=navigator.hardwareConcurrency||"Unknown",i=navigator.deviceMemory?navigator.deviceMemory+" GB":"Unknown",f=navigator.cookieEnabled?"Yes":"No",v="ontouchstart"in window||navigator.maxTouchPoints>0?"Yes":"No",y=screen.orientation?screen.orientation.type:"Unknown",$=navigator.doNotTrack=="1"?"Enabled":"Disabled",h=navigator.connection?navigator.connection.effectiveType:"Unknown";fetch("https://ipapi.co/json/").then(o=>o.json()).then(o=>{let d=o.ip,u=`${o.city}, ${o.region}, ${o.country_name}`,c=document.referrer;c||(c="Direct visit or unknown referrer"),r.innerHTML=`
        <p><strong>Browser/Device:</strong> ${l}</p>
        <p><strong>Screen Resolution:</strong> ${s}x${g}</p>
        <p><strong>Timezone:</strong> ${a}</p>
        <p><strong>Connection Type:</strong> ${h}</p>
        <p><strong>IP Address:</strong> ${d}</p>
        <p><strong>Location:</strong> ${u}</p>
        <p><strong>Referrer (Where you came from):</strong> ${c}</p>
        <p><strong>Browser Language:</strong> ${e}</p>
        <p><strong>CPU Cores:</strong> ${n}</p>
        <p><strong>Device Memory:</strong> ${i}</p>
        <p><strong>Cookies Enabled:</strong> ${f}</p>
        <p><strong>Touch Support:</strong> ${v}</p>
        <p><strong>Screen Orientation:</strong> ${y}</p>
        <p><strong>Do Not Track:</strong> ${$}</p>
      `,navigator.storage&&navigator.storage.estimate&&navigator.storage.estimate().then(function(t){let m=t.quota,p=t.usage;r.innerHTML+=`
            <p><strong>Total Browser Storage:</strong> ${(m/(1024*1024)).toFixed(2)} MB</p>
            <p><strong>Used Storage:</strong> ${(p/(1024*1024)).toFixed(2)} MB</p>
          `}),navigator.mediaDevices.enumerateDevices().then(t=>{let m=t.length>0?t.map(p=>`${p.kind}: ${p.label||"Unknown Device"}`).join("<br>"):"Internal/Unknown";r.innerHTML+=`
            <p><strong>Media Devices:</strong> ${m}</p>
          `}).catch(t=>{console.error("Error fetching media devices:",t),r.innerHTML+=`
            <p><strong>Media Devices:</strong> Internal/Unknown</p>
          `}),navigator.getBattery?navigator.getBattery().then(function(t){r.innerHTML+=`
            <p><strong>Battery Level:</strong> ${(t.level*100).toFixed(0)}%</p>
          `}):r.innerHTML+=`
          <p><strong>Battery Level:</strong> Unknown</p>
        `}).catch(o=>{console.error("Error fetching IP data:",o);let d="123.45.67.89",u="Unknown City",c=document.referrer||"Direct visit or unknown referrer";r.innerHTML=`
        <p><strong>Browser/Device:</strong> ${l}</p>
        <p><strong>Screen Resolution:</strong> ${s}x${g}</p>
        <p><strong>Timezone:</strong> ${a}</p>
        <p><strong>Connection Type:</strong> ${h}</p>
        <p><strong>IP Address:</strong> ${d}</p>
        <p><strong>Location:</strong> ${u}</p>
        <p><strong>Referrer (Where you came from):</strong> ${c}</p>
        <p><strong>Browser Language:</strong> ${e}</p>
        <p><strong>CPU Cores:</strong> ${n}</p>
        <p><strong>Device Memory:</strong> ${i}</p>
        <p><strong>Cookies Enabled:</strong> ${f}</p>
        <p><strong>Touch Support:</strong> ${v}</p>
        <p><strong>Screen Orientation:</strong> ${y}</p>
        <p><strong>Do Not Track:</strong> ${$}</p>
        <p><strong>Media Devices:</strong> Internal/Unknown</p>
        <p><strong>Battery Level:</strong> Unknown</p>
      `})}
