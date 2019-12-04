if (window.matchMedia('(max-width: 640px)').matches) {
  document.getElementById('buttons-container').style.display = "none";
  document.getElementById('swipe-tip').style.display = "block";
  let j = document.querySelectorAll(".description-wrapper");
  for (let i = 0; i < j.length; i++) {
    j[i].style.display = 'none';
  }
  let jj = document.querySelectorAll(".content__tip");
  for (let i = 0; i < jj.length; i++) {
    jj[i].style.display = 'none';
  }
  document.getElementById('description-show-hide').style.display = "inline-block";
}

if (window.matchMedia('(min-width: 641px)').matches) {
  document.getElementById('swipe-tip').style.display = "none";
}

const content = document.getElementById('content');

let x1 = 0;
let x2 = 0;

content.addEventListener('mousedown', function(event) {
  x1 = event.pageX;
});

document.getElementById('theyalow').addEventListener('mouseup', (event) => {
  x2 = event.pageX;
  if ((Math.abs(x1 - x2) >= 10) && (x1 < x2)) {
    backward();
  } else if ((Math.abs(x1 - x2) >= 10) && (x1 > x2)) {
    forward();
  } else {
    window.location.href = './links/theyalow/theyalow.html';
  }
});

document.getElementById('repair-design-project').addEventListener('mouseup', (event) => {
  x2 = event.pageX;
  if ((Math.abs(x1 - x2) >= 10) && (x1 < x2)) {
    backward();
  } else if ((Math.abs(x1 - x2) >= 10) && (x1 > x2)) {
    forward();
  } else {
    window.location.href = './links/repair-design-project/repair-design-project.html';
  }
});

content.addEventListener('touchstart', (event) => {
  x1 = event.touches[0].clientX;
});
content.addEventListener('touchend', (event) => {
  x2 = event.changedTouches[0].clientX;
  if (x1 < x2) {
    backward();
  } else if (x1 > x2) {
    forward();
  }
  
});

let button1 = document.getElementById('btn-1');
let button2 = document.getElementById('btn-2');

let contentResponsiveWidth = document.getElementById('content').offsetWidth;
let position = 0;

button1.addEventListener('click', forward);

function forward() {
  document.getElementById('content').style.transition = 'transform 300ms linear';
  let imagesCount = document.getElementById('content').children.length - 1;
  let currentPosition = document.getElementById('content').style.transform.match(/\d+/);
    if (currentPosition == null) {
      currentPosition = 0;
      position = 0;
    } else {
      currentPosition = Number(currentPosition[0]);
    }
  if ((currentPosition > 0) && ((imagesCount * contentResponsiveWidth) > currentPosition)) {
    document.getElementById('content').style.transform = 'translateX(-' + String(currentPosition + contentResponsiveWidth) + 'px)';
    position += 1;
  } else if ((currentPosition > 0) && ((imagesCount * contentResponsiveWidth) == currentPosition)) {
    document.getElementById('content').style.transform = 'translateX(0)';
    position = 0;
  } else if ((currentPosition == 0) && (imagesCount > 0)) {
    document.getElementById('content').style.transform = 'translateX(-' + String(currentPosition + contentResponsiveWidth) + 'px)';
    position += 1;
  }
}

button2.addEventListener('click', backward);

function backward() {
  document.getElementById('content').style.transition = 'transform 300ms linear';
  let imagesCount = document.getElementById('content').children.length - 1;
  let currentPosition = document.getElementById('content').style.transform.match(/\d+/);
    if (currentPosition == null) {
      currentPosition = 0;
      position = 0;
    } else {
      currentPosition = Number(currentPosition[0]);
    }
  if ((currentPosition > 0) && (imagesCount > 0)) {
    document.getElementById('content').style.transform = 'translateX(-' + String(currentPosition - contentResponsiveWidth) + 'px)';
    position -= 1;
  } else if ((currentPosition == 0) && (imagesCount > 0)) {
    document.getElementById('content').style.transform = 'translateX(-' + String(imagesCount * contentResponsiveWidth) + 'px)';
    position = imagesCount;
  }
}

let showHideDescription = document.getElementById("description-show-hide");
showHideDescription.addEventListener('click', () => {
  if (showHideDescription.innerHTML == 'Show Description') {
    let x = document.querySelectorAll('.description-wrapper');
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = 'inline-block';
    }
    let y = document.querySelectorAll('.content__tip');
    for (let i = 0; i < y.length; i++) {
      y[i].style.display = 'inline-block';
    }
    showHideDescription.innerHTML = 'Hide Description';
  } else if (showHideDescription.innerHTML == 'Hide Description') {
    let z = document.querySelectorAll('.description-wrapper');
    for (let i = 0; i < z.length; i++) {
      z[i].style.display = 'none';
    }
    let zz = document.querySelectorAll('.content__tip');
    for (let i = 0; i < zz.length; i++) {
      zz[i].style.display = 'none';
    }
    showHideDescription.innerHTML = 'Show Description';
  }
});

window.matchMedia('(max-width: 640px)').addListener(e => 
  {
    if (e.matches) {
      showHideDescription.innerHTML = 'Show Description';
      document.getElementById('buttons-container').style.display = "none";
      document.getElementById('swipe-tip').style.display = "block";
      let a = document.querySelectorAll(".description-wrapper");
      for (let i = 0; i < a.length; i++) {
        a[i].style.display = 'none';
      }
      let b = document.querySelectorAll(".content__tip");
      for (let i = 0; i < b.length; i++) {
        b[i].style.display = 'none';
      }
      document.getElementById('description-show-hide').style.display = "inline-block";
    }
  });

window.matchMedia('(min-width: 641px)').addListener(e => 
  {
    if (e.matches) {
      document.getElementById('buttons-container').style.display = "inline-block";
      document.getElementById('swipe-tip').style.display = "none";
      let c = document.querySelectorAll(".description-wrapper");
      for (let i = 0; i < c.length; i++) {
        c[i].style.display = 'inline-block';
      }
      let d = document.querySelectorAll(".content__tip");
      for (let i = 0; i < d.length; i++) {
        d[i].style.display = 'inline-block';
      }
      document.getElementById('description-show-hide').style.display = "none";
    }
  });

window.onresize = function() {
  document.getElementById('content').style.transition = 'initial';
  contentResponsiveWidth = document.getElementById('container').offsetWidth;
  document.getElementById('content').style.transform = 'translateX(-' + String(position * contentResponsiveWidth) + 'px)';
};

const expansionPanelButton = document.getElementById('education__button');
const expansionPanel = document.getElementById('education__content');
expansionPanelButton.onclick = function () {
  expansionPanelButton.classList.toggle('is-open');
  if (expansionPanel.style.maxHeight) {
    expansionPanel.style.maxHeight = null;
  } else {
    expansionPanel.style.maxHeight = expansionPanel.scrollHeight + 'px';
  }
}

const leftSpan = document.getElementById('container__left-span');
leftSpan.addEventListener('click', forward);

const rightSpan = document.getElementById('container__right-span');
rightSpan.addEventListener('click', forward);
