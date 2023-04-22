// div container for Will
const container = document.createElement('div');
document.body.appendChild(container);

// Will photo
const image = document.createElement('img');
image.src = chrome.runtime.getURL('images/Will.png');
image.style.position = 'fixed';
image.style.top = '0';
image.style.right = '0';
image.style.zIndex = '999999'
container.appendChild(image);
// clearfix to fix blur, etc.?


// create eyes
// whites of eyes
const eyeWhiteLeft = document.createElement('div');
eyeWhiteLeft.style.background = 'white';
eyeWhiteLeft.style.height = '19px';
eyeWhiteLeft.style.width = '19px';
eyeWhiteLeft.style.borderRadius = '50%'
eyeWhiteLeft.style.position = 'fixed';
eyeWhiteLeft.style.zIndex = '9999999'
eyeWhiteLeft.style.top = '46px';
eyeWhiteLeft.style.right = '63px';
eyeWhiteLeft.style.display = 'flex';
container.appendChild(eyeWhiteLeft);
const eyeWhiteRight = document.createElement('div');
eyeWhiteRight.style.background = 'white';
eyeWhiteRight.style.height = '19px';
eyeWhiteRight.style.width = '19px';
eyeWhiteRight.style.borderRadius = '50%'
eyeWhiteRight.style.position = 'fixed';
eyeWhiteRight.style.zIndex = '9999999'
eyeWhiteRight.style.top = '46px';
eyeWhiteRight.style.right = '35px';
eyeWhiteRight.style.display = 'flex';
container.appendChild(eyeWhiteRight);

// eye color
const eyeColorLeft = document.createElement('div');
eyeColorLeft.setAttribute('class', 'eyecolor');
eyeColorLeft.style.background = 'RGB(105,97,18)';
eyeColorLeft.style.height = '9px';
eyeColorLeft.style.width = '9px';
eyeColorLeft.style.borderRadius = '50%'
eyeColorLeft.style.position = 'fixed';
eyeColorLeft.style.zIndex = '99999999'
eyeColorLeft.style.top = '51px';
eyeColorLeft.style.right = '68px';
eyeColorLeft.style.display = 'flex';
eyeWhiteLeft.appendChild(eyeColorLeft);

const eyeColorRight = document.createElement('div');
eyeColorRight.setAttribute('class', 'eyecolor');
eyeColorRight.style.background = 'RGB(105,97,18)';
eyeColorRight.style.height = '9px';
eyeColorRight.style.width = '9px';
eyeColorRight.style.borderRadius = '50%'
eyeColorRight.style.position = 'fixed';
eyeColorRight.style.zIndex = '99999999'
eyeColorRight.style.top = '51px';
eyeColorRight.style.right = '40px';
eyeColorRight.style.display = 'flex';
eyeWhiteRight.appendChild(eyeColorRight);

const eyeColors = document.querySelectorAll('.eyecolor');

window.addEventListener('mousemove', (e) => {
  eyeColors.forEach((eyeColor) => {
    const rect = eyeColor.getBoundingClientRect();
    console.log(rect);
    const x = (e.pageX - rect.left) / 200 + 'px';
    const y = (e.pageY - rect.top) / 150 + 'px';
    eyeColor.style.transform = 'translate3d(' + x + ',' + y + ', 0px)';
  })
})