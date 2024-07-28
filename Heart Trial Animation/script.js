const bodyEl = document.querySelector("body");
bodyEl.addEventListener('mousemove', (event)=>{
    const spanEle = document.createElement("span");
    spanEle.style.top = `${event.offsetY}px`;
    spanEle.style.left = `${event.offsetX}px`;
    const size = Math.random()*90;
    spanEle.style.width = `${size}px`;
    spanEle.style.height = `${size}px`;
    bodyEl.appendChild(spanEle);
    setTimeout(()=>{
        spanEle.remove();
    }, 3000);
})
