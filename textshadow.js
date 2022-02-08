console.log('TEXT SHADOW LOADED')
const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var box = document.querySelector('shadowbox')

function setTextShadow(e){
  var text = document.getElementById('text');
  // console.log(`attempting text shadow: ${e.clientX}`);
  let x = 0.1 * (e.clientX - (vw/2));
  let y = 0.05 * (e.clientY - (vh/2));

  // if(x > (vh/2)){
  //
  // }

  text.style.textShadow = `${x}px ${y}px rgba(200,0,50,0.5), ${-1.5 * x}px ${-1.5 * y}px rgba(0,200,200,0.5), ${-1 * x}px ${1.5 * y}px rgba(100,200,50,0.5), ${1.5 * x}px ${-1 * y}px rgba(250,200,0,0.5)`;
}