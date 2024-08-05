const inputEle = document.querySelector(".input");
const bodyEle = document.body;

inputEle.checked =JSON.parse(localStorage.getItem("mode"));

updateBackground(); 

function updateBackground(){
    if(inputEle.checked){
        bodyEle.style.backgroundColor = 'black';
    } else {
        bodyEle.style.backgroundColor = "white";
    }
    
}

inputEle.addEventListener("input", ()=>{
    updateBackground();
    updateLocalStorage();
});

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEle.checked));
}