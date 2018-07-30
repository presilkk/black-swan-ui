function addResponsiveClass(event) {
    event.stopPropagation()
    var x = document.getElementById("myTopnav");
    if (x.classList.contains("topnav")) {
        if(x.classList.contains("responsive")){
            x.classList.remove("responsive")
        }else{
            x.className += " responsive";
        }
        document.getElementById("change-nav").style.display ="none";
    } else {
        x.classList.remove("responsive")
    }
}

function removeResponsiveClass(event) {
    event.stopPropagation()
    var x = document.getElementById("myTopnav");

        if(x.classList.contains("responsive")){
            x.classList.remove("responsive")
        }
        document.getElementById("change-nav").style.display ="";
}