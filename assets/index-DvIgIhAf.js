(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();const L=document.getElementById("cookie-banner"),k=document.getElementById("accept-cookies"),T=document.getElementById("main-content"),w=document.getElementById("exampleText"),o=document.getElementById("infoReveal");L.style.display="block";T.classList.add("hidden");k.addEventListener("click",()=>{L.style.display="none",T.classList.remove("hidden"),w.style.display="block",w.classList.add("exampleText-visible"),o.classList.remove("hidden"),B()});function B(){let p=navigator.userAgent,s=window.screen.width,g=window.screen.height,a=Intl.DateTimeFormat().resolvedOptions().timeZone,e=navigator.language||navigator.languages[0],t=navigator.hardwareConcurrency||"Unknown",i=navigator.deviceMemory?navigator.deviceMemory+" GB":"Unknown",v=navigator.cookieEnabled?"Yes":"No",f="ontouchstart"in window||navigator.maxTouchPoints>0?"Yes":"No",y=screen.orientation?screen.orientation.type:"Unknown",$=navigator.doNotTrack=="1"?"Enabled":"Disabled",h=navigator.connection?navigator.connection.effectiveType:"Unknown";fetch("https://ipapi.co/json/").then(r=>r.json()).then(r=>{let l=r.ip,d=`${r.city}, ${r.region}, ${r.country_name}`,u=document.referrer||"Direct visit or unknown referrer";o.innerHTML=`
        <p><strong>Browser/Device:</strong> ${p}</p>
        <p><strong>Screen Resolution:</strong> ${s}x${g}</p>
        <p><strong>Timezone:</strong> ${a}</p>
        <p><strong>Connection Type:</strong> ${h}</p>
        <p><strong>IP Address:</strong> ${l}</p>
        <p><strong>Location:</strong> ${d}</p>
        <p><strong>Referrer:</strong> ${u}</p>
        <p><strong>Browser Language:</strong> ${e}</p>
        <p><strong>CPU Cores:</strong> ${t}</p>
        <p><strong>Device Memory:</strong> ${i}</p>
        <p><strong>Cookies Enabled:</strong> ${v}</p>
        <p><strong>Touch Support:</strong> ${f}</p>
        <p><strong>Screen Orientation:</strong> ${y}</p>
        <p><strong>Do Not Track:</strong> ${$}</p>
      `,navigator.storage&&navigator.storage.estimate&&navigator.storage.estimate().then(function(n){let m=n.quota,c=n.usage;o.innerHTML+=`
            <p><strong>Total Browser Storage:</strong> ${(m/(1024*1024)).toFixed(2)} MB</p>
            <p><strong>Used Storage:</strong> ${(c/(1024*1024)).toFixed(2)} MB</p>
          `}),navigator.mediaDevices.enumerateDevices().then(n=>{let m=n.length>0?n.map(c=>`${c.kind}: ${c.label||"Unknown Device"}`).join("<br>"):"Internal/Unknown";o.innerHTML+=`
            <p><strong>Media Devices:</strong> ${m}</p>
          `}).catch(n=>{o.innerHTML+=`
            <p><strong>Media Devices:</strong> Internal/Unknown</p>
          `}),navigator.getBattery?navigator.getBattery().then(function(n){o.innerHTML+=`
            <p><strong>Battery Level:</strong> ${(n.level*100).toFixed(0)}%</p>
          `}):o.innerHTML+=`
          <p><strong>Battery Level:</strong> Unknown</p>
        `}).catch(r=>{let l="123.45.67.89",d="Unknown City",u=document.referrer||"Direct visit or unknown referrer";o.innerHTML=`
        <p><strong>Browser/Device:</strong> ${p}</p>
        <p><strong>Screen Resolution:</strong> ${s}x${g}</p>
        <p><strong>Timezone:</strong> ${a}</p>
        <p><strong>Connection Type:</strong> ${h}</p>
        <p><strong>IP Address:</strong> ${l}</p>
        <p><strong>Location:</strong> ${d}</p>
        <p><strong>Referrer:</strong> ${u}</p>
        <p><strong>Browser Language:</strong> ${e}</p>
        <p><strong>CPU Cores:</strong> ${t}</p>
        <p><strong>Device Memory:</strong> ${i}</p>
        <p><strong>Cookies Enabled:</strong> ${v}</p>
        <p><strong>Touch Support:</strong> ${f}</p>
        <p><strong>Screen Orientation:</strong> ${y}</p>
        <p><strong>Do Not Track:</strong> ${$}</p>
        <p><strong>Media Devices:</strong> Internal/Unknown</p>
        <p><strong>Battery Level:</strong> Unknown</p>
      `})}
