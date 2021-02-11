/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/*
document.querySelector("#myTopnav [data-action=toggleMenu]").addEventListener("click", myFunction);

function myFunction() {
    var nav = document.getElementById("myTopnav");
    console.log(nav);
    nav.classList.toggle("topnav");
}*/