var canvas = document.getElementById("demo");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height =window.innerHeight - 50;

ctx.lineJoin= "round";
ctx.lineCap="round";

let drawing =false;
let lastx =0;
let lasty =0;
let hue = 0;
let flags = false;


function draw(e){
    if(drawing){
    console.log(e)
    ctx.beginPath(); 
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastx,lasty]=[e.offsetX,e.offsetY];
    if (flags){
      ctx.strokeStyle=`hsl(${hue},100%,50%)`
      hue ++
    }
    else{
     ctx.strokeStyle ="color"
    }
  
    }

}
function float_mix(){ 
ctx.strokeStyle=`hsl(${hue},100%,50%)`
flags =true;

}
function float_black(){
 ctx.strokeStyle=" #000"
  flags=false;
}
function float_white(){
   ctx.strokeStyle=" #fff"
    flags=false;
}
  function float_blue(){
    ctx.strokeStyle=" blue"
    flags=false;
  }
  function float_red(){
   ctx.strokeStyle=" red"
    flags=false;
  }
  function float_green(){
 ctx.strokeStyle=" green"
    flags=false;
  }

canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mousedown',(e)=>{
drawing=true ;
[lastx,lasty]=[e.offsetX,e.offsetY]
});
canvas.addEventListener('mouseup',()=>drawing=false)

    const pickr = Pickr.create({
      el: '.color-picker',
      theme: 'nano', 

      swatches: [
          'rgba(244, 67, 54, 1)',
          'rgba(233, 30, 99, 0.95)',
          'rgba(156, 39, 176, 0.9)',
          'rgba(103, 58, 183, 0.85)',
          'rgba(63, 81, 181, 0.8)',
          'rgba(33, 150, 243, 0.75)',
          'rgba(3, 169, 244, 0.7)',
          'rgba(0, 188, 212, 0.7)',
          'rgba(0, 150, 136, 0.75)',
          'rgba(76, 175, 80, 0.8)',
          'rgba(139, 195, 74, 0.85)',
          'rgba(205, 220, 57, 0.9)',
          'rgba(255, 235, 59, 0.95)',
          'rgba(255, 193, 7, 1)'
      ],
  
      components: {
          preview: true,
          opacity: true,
          hue: true,
  
       
          interaction: {
              hex: true,
              rgba: true,
              hsla: true,
              input: true,
              clear: true,
              save: true,
          }
  
      }
      
  });
  pickr.on('change', (color, instance) => {
    color = color.toRGBA()
   console.log(color);
   this.ctx.strokeStyle=`rgba(${color[0]},${color[1]},${color[2]},${color[3]})`
  })
    .on('swatchselect', (color, instance) => {
      console.log('swatchselect', color, instance);  
  })
var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;
  ctx.lineWidth =slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
 ctx.lineWidth =slider.value;
}
window.onload
  ctx.lineWidth =slider.value;
