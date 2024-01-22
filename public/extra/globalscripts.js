

document.addEventListener('contextmenu', event => event.preventDefault());
console.log('HELOOOOOOOOOOOOOOOO')
//document.addEventListener("visibilitychange", event=>console.log(event))
const _window = document.getElementById('html')
window.addEventListener("blur", event=>{

    //_window.style.filter = "blur(15px)"

})
window.addEventListener("focus", event=>{
    _window.style.filter = "blur(0px)"
})

window.addEventListener("onkeydown", event=>{
    console.log('key',event)
})


if (window.sidebar){
    document.onmousedown=false
    document.onclick=true
}

document.addEventListener("keyup", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode == 44) {
        stopPrntScr();
    }
});

function stopPrntScr() {

    var inpFld = document.createElement("input");
    inpFld.setAttribute("value", ".");
    inpFld.setAttribute("width", "0");
    inpFld.style.height = "0px";
    inpFld.style.width = "0px";
    inpFld.style.border = "0px";
    document.body.appendChild(inpFld);
    inpFld.select();
    document.execCommand("copy");
    inpFld.remove(inpFld);
}
function AccessClipboardData() {
    try {
        window.clipboardData.setData('text', "Access   Restricted");
    } catch (err) {
    }
}
setInterval("AccessClipboardData()", 300);
    


