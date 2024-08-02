const btnEle = document.getElementById("submit");

/*
 We can't access/affect the psudo elements in the CSS from using javascript so we can use the varibales of CSS 
 in the place inside the psudo class and access it.
*/

btnEle.addEventListener("mouseover",(event)=>{
    const x = event.pageX - btnEle.offsetLeft;
    const y = event.pageY - btnEle.offsetTop;

    btnEle.style.setProperty("--xPos", x+"px");
    btnEle.style.setProperty("--yPos", y+"px");
});