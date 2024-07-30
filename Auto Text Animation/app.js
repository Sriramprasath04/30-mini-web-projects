const contList = ["Content I ", "Content II ", "Content III "];

const spanEle = document.getElementById("head");
let contentIndex =0;
var charIndex = 0;
updateContent();

function updateContent () {
    if(charIndex == contList[contentIndex].length){
        charIndex = 0;
        contentIndex++;
        contentIndex = contentIndex%contList.length;
    }

    spanEle.innerHTML = `${contList[contentIndex].slice(0,charIndex)}`;
    charIndex++;
    setTimeout(updateContent, charIndex == contList[contentIndex].length? 1000 : 200);
}

