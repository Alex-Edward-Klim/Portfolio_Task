document.getElementById("back-btn").addEventListener("click", gotoMainPage);
function gotoMainPage() {
  window.location.href = '../../index.html';
}

let version = "desktop";

document.getElementById("mobile-btn").addEventListener("click", mobileView);
function mobileView() {
  version = "mobile";
  document.getElementById("frame").style.maxWidth = "640px";
  document.getElementById("mobile-btn").style.display = "none";
  if (window.innerWidth > 640) {
  document.getElementById("desktop-btn").style.display = "block";
  }
  document.getElementById("back-btn").style.right = "initial";
  document.getElementById("back-btn").style.left = "65%";
}

document.getElementById("desktop-btn").addEventListener("click", desktopView);
function desktopView() {
  version = 'desktop';
  document.getElementById("frame").style.maxWidth = "initial";
  document.getElementById("desktop-btn").style.display = "none";
  if (window.innerWidth > 640) {
    document.getElementById("mobile-btn").style.display = "block";
  }
  document.getElementById("back-btn").style.left = "initial";
  document.getElementById("back-btn").style.right = "0";
}

window.matchMedia('(min-width: 641px)').addListener(e => 
  {
    if (e.matches && version == 'desktop') {
      document.getElementById("mobile-btn").style.display = "block";
    } else if (e.matches && version == 'mobile') {
      document.getElementById("desktop-btn").style.display = "block";
    } else {
      document.getElementById("mobile-btn").style.display = "none";
      document.getElementById("desktop-btn").style.display = "none";
    }
  });

if (window.matchMedia('(max-width: 640px)').matches) {
  version = 'mobile';
  document.getElementById("desktop-btn").style.display = "none";
  document.getElementById("mobile-btn").style.display = "none";
  document.getElementById("frame").style.maxWidth = "640px";
  document.getElementById("back-btn").style.right = "initial";
  document.getElementById("back-btn").style.left = "65%";
} else if (window.matchMedia('(min-width: 641px)').matches) {
  version = 'desktop';
  document.getElementById("mobile-btn").style.display = "block";
  document.getElementById("back-btn").style.left = "initial";
  document.getElementById("back-btn").style.right = "0";
}
