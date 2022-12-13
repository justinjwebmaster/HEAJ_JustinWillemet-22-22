var css = document.createElement('style');
css.type = 'text/css';
css.innerHTML = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
document.body.appendChild(css);
var img = document.createElement('img');
img.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
img.style.animation = 'spin 2s linear infinite';
document.body.appendChild(img);