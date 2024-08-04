const btn = document.getElementById("btn");

btn.addEventListener("mouseover", (event)=>{
    const x = event.pageX - btn.offsetLeft;
    const y = event.pageY - btn.offsetTop;
    btn.style.setProperty("--xPos", x+"px");
    btn.style.setProperty("--yPos", y+"px");
});

const imgContainerEle = document.querySelector(".image-container");

btn.addEventListener("click", ()=>{
    let imgCount = 12;
    loadImage(imgCount);
});

function loadImage(imgCount){
    for(let i=0; i<imgCount ;i++){
        const imgEle = document.createElement("img");
        imgEle.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`;
        imgContainerEle.appendChild(imgEle);
    }
}