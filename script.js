const items=document.querySelectorAll('.item');
window.addEventListener('scroll',()=>{
 const y=window.scrollY;
 items.forEach((el,i)=>{
   const speed=(i%3+1)*0.15;
   el.style.transform+=` translateY(${-y*speed}px)`;
 });
});
document.addEventListener('mousemove',(e)=>{
 const x=(e.clientX/window.innerWidth-.5)*20;
 const y=(e.clientY/window.innerHeight-.5)*20;
 items.forEach((el,i)=>{
   el.style.marginLeft=`${x*(i%2?1:-1)}px`;
   el.style.marginTop=`${y}px`;
 });
});
