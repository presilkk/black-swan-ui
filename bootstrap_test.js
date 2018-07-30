
/*
 * Function to add a new class to the navbar section
 * to expand the vertical menu bar 
 */

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

/*
 * Function to remove the class responsive to return the navbar 
 * to the compressed form. 
 */
function removeResponsiveClass(event) {
    event.stopPropagation()
    var x = document.getElementById("myTopnav");

        if(x.classList.contains("responsive")){
            x.classList.remove("responsive")
        }
        document.getElementById("change-nav").style.display ="";
}