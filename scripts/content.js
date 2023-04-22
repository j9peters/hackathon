const image = document.createElement('img');
image.src = chrome.runtime.getURL('images/Will.png');
image.style.position = 'fixed';
image.style.top = '0';
image.style.right = '0';
image.style.zIndex = '999999'
document.body.appendChild(image);
// clearfix to fix blur, etc.?
