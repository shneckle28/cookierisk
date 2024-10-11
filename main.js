// This website was made to show  the dangers of cookies. Please do not copy this website.
// If you like what you see please send me a message and give me a star!!
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

const cookieBanner = document.getElementById("cookie-banner");
const acceptCookiesButton = document.getElementById("accept-cookies");
const mainContent = document.getElementById("main-content");
const exampleText = document.getElementById("exampleText");
const infoReveal = document.getElementById("infoReveal");

cookieBanner.style.display = "block";
mainContent.classList.add("hidden");

acceptCookiesButton.addEventListener("click", () => {
  cookieBanner.style.display = "none"; 
  mainContent.classList.remove("hidden");
  exampleText.style.display = "block"; 
  exampleText.classList.add("exampleText-visible");
  infoReveal.classList.remove("hidden");
  displayCollectedData(); 
});

function displayCollectedData() {
  let userAgent = navigator.userAgent;
  let screenWidth = window.screen.width;
  let screenHeight = window.screen.height;
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let browserLanguage = navigator.language || navigator.languages[0];
  let cpuCores = navigator.hardwareConcurrency || "Unknown";
  let deviceMemory = navigator.deviceMemory ? navigator.deviceMemory + " GB" : "Unknown";
  let cookiesEnabled = navigator.cookieEnabled ? "Yes" : "No";
  let touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0 ? "Yes" : "No";
  let screenOrientation = screen.orientation ? screen.orientation.type : "Unknown";
  let doNotTrack = navigator.doNotTrack == "1" ? "Enabled" : "Disabled";
  let connectionType = navigator.connection ? navigator.connection.effectiveType : "Unknown";

  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      let ipAddress = data.ip;
      let location = `${data.city}, ${data.region}, ${data.country_name}`;
      let referrer = document.referrer || "Direct visit or unknown referrer";

      infoReveal.innerHTML = `
        <p><strong>Browser/Device:</strong> ${userAgent}</p>
        <p><strong>Screen Resolution:</strong> ${screenWidth}x${screenHeight}</p>
        <p><strong>Timezone:</strong> ${timeZone}</p>
        <p><strong>Connection Type:</strong> ${connectionType}</p>
        <p><strong>IP Address:</strong> ${ipAddress}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Referrer:</strong> ${referrer}</p>
        <p><strong>Browser Language:</strong> ${browserLanguage}</p>
        <p><strong>CPU Cores:</strong> ${cpuCores}</p>
        <p><strong>Device Memory:</strong> ${deviceMemory}</p>
        <p><strong>Cookies Enabled:</strong> ${cookiesEnabled}</p>
        <p><strong>Touch Support:</strong> ${touchSupport}</p>
        <p><strong>Screen Orientation:</strong> ${screenOrientation}</p>
        <p><strong>Do Not Track:</strong> ${doNotTrack}</p>
      `;

      if (navigator.storage && navigator.storage.estimate) {
        navigator.storage.estimate().then(function(estimate) {
          let totalStorage = estimate.quota;
          let usedStorage = estimate.usage;
          
          infoReveal.innerHTML += `
            <p><strong>Total Browser Storage:</strong> ${(totalStorage / (1024 * 1024)).toFixed(2)} MB</p>
            <p><strong>Used Storage:</strong> ${(usedStorage / (1024 * 1024)).toFixed(2)} MB</p>
          `;
        });
      }

      navigator.mediaDevices.enumerateDevices()
        .then(devices => {
          let deviceList = devices.length > 0 
            ? devices.map(device => `${device.kind}: ${device.label || "Unknown Device"}`).join('<br>') 
            : "Internal/Unknown";

          infoReveal.innerHTML += `
            <p><strong>Media Devices:</strong> ${deviceList}</p>
          `;
        })
        .catch(error => {
          infoReveal.innerHTML += `
            <p><strong>Media Devices:</strong> Internal/Unknown</p>
          `;
        });

      if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
          infoReveal.innerHTML += `
            <p><strong>Battery Level:</strong> ${(battery.level * 100).toFixed(0)}%</p>
          `;
        });
      } else {
        infoReveal.innerHTML += `
          <p><strong>Battery Level:</strong> Unknown</p>
        `;
      }
    })
    .catch(error => {
      let ipAddress = "123.45.67.89";
      let location = "Unknown City";
      let referrer = document.referrer || "Direct visit or unknown referrer";

      infoReveal.innerHTML = `
        <p><strong>Browser/Device:</strong> ${userAgent}</p>
        <p><strong>Screen Resolution:</strong> ${screenWidth}x${screenHeight}</p>
        <p><strong>Timezone:</strong> ${timeZone}</p>
        <p><strong>Connection Type:</strong> ${connectionType}</p>
        <p><strong>IP Address:</strong> ${ipAddress}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Referrer:</strong> ${referrer}</p>
        <p><strong>Browser Language:</strong> ${browserLanguage}</p>
        <p><strong>CPU Cores:</strong> ${cpuCores}</p>
        <p><strong>Device Memory:</strong> ${deviceMemory}</p>
        <p><strong>Cookies Enabled:</strong> ${cookiesEnabled}</p>
        <p><strong>Touch Support:</strong> ${touchSupport}</p>
        <p><strong>Screen Orientation:</strong> ${screenOrientation}</p>
        <p><strong>Do Not Track:</strong> ${doNotTrack}</p>
        <p><strong>Media Devices:</strong> Internal/Unknown</p>
        <p><strong>Battery Level:</strong> Unknown</p>
      `;
    });
}