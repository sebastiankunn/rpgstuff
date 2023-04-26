var initialiseFadePageLink = [];

function fadePage(i) {
  var container = document.getElementsByClassName("section2")[0];
  var transitionAnchors = document.getElementsByClassName("transition");
  var current = "#" + transitionAnchors[i].parentNode.getAttribute("id");
  var destination = transitionAnchors[i].getAttribute("href");

  transitionAnchors[i].setAttribute("href", current);
  container.classList.add("fadeout");

  setTimeout(function () {
    window.location.hash = destination;
    container.classList.remove("fadeout");
    transitionAnchors[i].setAttribute("href", destination);
  }, 500);
}

function fadePageLinks(i) {
  return function () {
    var transitionAnchors = document.getElementsByClassName("transition");
    transitionAnchors[i].addEventListener(
      "click",
      function () {
        fadePage(i);
      },
      false
    );
  };
}

function initialiseFadePageLinks() {
  var transitionAnchors = document.getElementsByClassName("transition");
  for (var i = 0; i < transitionAnchors.length; i++) {
    initialiseFadePageLink[i] = fadePageLinks(i);
    initialiseFadePageLink[i]();
  }
}

window.addEventListener("load", initialiseFadePageLinks, false);
let flag = [0, 0, 0, 0, 0];
const images = {
  0: img0,
  1: img1,
  2: img2,
  3: img3,
  4: img4
};
const labels = {
  0: idcard,
  1: mind,
  2: aesthetic,
  3: story,
  4: people
};
const afters = {
  0: img0after,
  1: img1after,
  2: img2after,
  3: img3after,
  4: img4after
};

var prev = 0;
function clickedImg(imag, val,after) {
  for (let i = 0; i < 5; i++) {
    if (i == val - 1) {
      flag[i] = 1;
      switch (val) {
        case 1:
          imag.src = "https://i.ibb.co/0Kp1m49/primrosecolored-copia.png";
          console.log("clicked 1");
          break;
        case 2:
          imag.src = "https://i.ibb.co/QmpXrZC/p1.png";
          console.log("clicked 2");
          break;
        case 3:
          imag.src = "https://i.ibb.co/x8yFqsy/p2.png";
          console.log("clicked 3");
          break;
        case 4:
          imag.src = "https://i.ibb.co/y4SDqzb/p3.png";
          console.log("clicked 4");
          break;
        case 5:
          imag.src = "https://i.ibb.co/zZrRpR3/p5.png";
          console.log("clicked 5");
          break;
      }
      imag.style.opacity = 1;
      labels[i].style.opacity = 1;
      labels[i].style.width = "110px";
    } else {
      flag[i] = 0;
      images[i].src = "https://i.ibb.co/xXt6nxw/primrose.png";
      labels[i].style.opacity = "0";
      labels[i].style.width = "60px";
      afters[i].style.opacity=0;
    }
    
  }
}

function changeImg(imgone, val,after) {
  switch (val) {
    case 1:
      imgone.style.opacity=0;
      after.style.opacity=1;
      break;
    case 2:
      imgone.style.opacity=0;
      after.style.opacity=1;
      break;
    case 3:
     
      imgone.style.opacity=0;
      after.style.opacity=1;
      break;
    case 4:

      imgone.style.opacity=0;
      after.style.opacity=1;
      break;
    case 5:
     
      imgone.style.opacity=0;
      after.style.opacity=1;
      break;
  }
  imgone.style.opacity=1;
}

function changeBack(img, val,after) {
  if (flag[val - 1] != 1) {
    img.style.opacity=1;
    after.style.opacity=0;
  }
}
