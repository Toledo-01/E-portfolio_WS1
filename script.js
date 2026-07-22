window.onload = function(){
    window.alert("Welcome to my Portfolio!");
    console.log("Page loaded");
}

function changeHeading(){
    document.getElementById("tagline").innerText = "Future Web Developer";
    console.log("Heading Text Changed");
}

function changeStyle(){
    document.getElementById("course") .style.color = "var(--buttons)";
    document.getElementById("course") .style.fontSize = "20px";
    console.log("Style Changed");
}

function toogleTheme(){
   var element = document.body.classList.toggle("dark-mode"); 
   console.log("Theme Toggled");
}


function showInfo(){
    alert("Name: Maria Fernanda C. Toledo\nCourse: BSIT\nEmail: mt6768471@gmail.com\nPhone: 09632846382");
    console.log("Personal Info Shown");
}

function setText(elementId, newText){
    document.getElementById(elementId) .innerText = newText;
    console.log("Text set for: " + elementId);
}






