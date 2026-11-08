(function(){
  var c=document.getElementById('fx'),x=c.getContext('2d'),W,H,P=[],mx=-999,my=-999,dpr=Math.min(devicePixelRatio||1,2),still=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function size(){W=c.width=innerWidth*dpr;H=c.height=innerHeight*dpr;P=[];var n=Math.min(90,Math.floor(innerWidth/14));for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:(Math.random()*1.3+.5)*dpr,vx:(Math.random()-.5)*.28*dpr,vy:(Math.random()-.5)*.28*dpr,g:Math.random()>.6})}
  size();addEventListener('resize',size);
  addEventListener('pointermove',function(e){mx=e.clientX*dpr;my=e.clientY*dpr});
  function f(){x.clearRect(0,0,W,H);var L=130*dpr;
    for(var i=0;i<P.length;i++){var p=P[i];if(!still){p.x+=p.vx;p.y+=p.vy}
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      x.fillStyle=p.g?'rgba(255,241,204,.85)':'rgba(77,242,224,.7)';x.beginPath();x.arc(p.x,p.y,p.r,0,6.3);x.fill();
      for(var j=i+1;j<P.length;j++){var q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<L){x.strokeStyle='rgba(122,92,255,'+(1-d/L)*.35+')';x.lineWidth=dpr*.5;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}
      var d2=Math.hypot(p.x-mx,p.y-my);if(d2<170*dpr){x.strokeStyle='rgba(226,184,97,'+(1-d2/(170*dpr))*.6+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(mx,my);x.stroke()}}
    if(!still)requestAnimationFrame(f)}
  f();
})();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});
document.querySelectorAll('.card').forEach(function(k){k.addEventListener('pointermove',function(e){var r=k.getBoundingClientRect();k.style.setProperty('--mx',(e.clientX-r.left)+'px');k.style.setProperty('--my',(e.clientY-r.top)+'px')})});
var dlg=document.getElementById('dlg'),sel=document.getElementById('sel'),mb=document.getElementById('mb');
var orig=mb.innerHTML;
document.querySelectorAll('.order').forEach(function(b){b.addEventListener('click',function(){mb.innerHTML=orig;sel=document.getElementById('sel');sel.value=b.dataset.pkg;bind();dlg.showModal()})});
dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});
function bind(){document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();var d=new FormData(this);
  var body='Name: '+d.get('n')+'\nEmail: '+d.get('e')+'\nPackage: '+d.get('p')+'\n\n'+d.get('d');
  location.href='mailto:hello@novaforge.example?subject='+encodeURIComponent('New order: '+d.get('p'))+'&body='+encodeURIComponent(body);
  mb.innerHTML='<div class="ok">Thank you! Your order is on its way. We’ll reply within 24 hours.</div>'})}
bind();

const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.img-container');
let currentIndex = 0;

function nextSlide() {
   currentIndex++;
   
   // Loop back to the first slide if we reach the end
   if (currentIndex >= slides.length) {
      currentIndex = 0;
   }
   
   // Shift the track to show the current slide
   track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/* Change slide automatically every 3000ms (3 seconds) */
setInterval(nextSlide, 3000);
