//Function shad is when the person scrolls a box shadow will appear at the bottom of the navigation
function shad(){
    document.getElementById("navigation").style.boxShadow = "2px 4px 4px gray";
}
//Function cawt is when someone tryies to copy anything from the article portion of the html an alert at the top will pop up saying "Don't Copy My Homework Please"
function cawt(){
    alert("Don't Copy My Homework Please");
}
//Function ohver() is for when someone puts their mouse over the title of the page the title will scale 1.4 times bigger in the time span of three seconds
// so it looks smooth and stay like so until the page is refreshed
function ohver(){
    document.getElementById("title").style.transform = "scale(1.4)";
    document.getElementById("title").style.transition = "3s";
}

