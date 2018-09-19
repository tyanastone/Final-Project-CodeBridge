// created function to open nav bar
function openNav() {
    document.getElementById('nav').style.width = "100%";
}
// created function to close nav bar
function closeNav() {
    document.getElementById('nav').style.width = "0%";
}
// created an alert box so that submit button goes somewhere
// function contactForm() {
//     alert("Thanks for submitting");
// }




// aligned content to center of div on bragging rights page and increased font size for instructions and title

document.getElementById("allCereal").style.textAlign = "center";
document.getElementById("haul2").style.textAlign = "center";
document.getElementById("haul3").style.textAlign = "center";
document.getElementById("haul4").style.textAlign = "center";
document.getElementById("form2").style.textAlign = "center";
document.getElementById("titleBrags").style.textAlign = "center";
document.getElementById("titleBrags").style.fontSize = "60px";
document.getElementById("bragsInstructions").style.textAlign = "center";
document.getElementById("bragsInstructions").style.fontSize = "20px";
document.getElementById("footer").style.textAlign = "center";


// find an element with the ID of button, listen for the click event and run the function, used query selector to select the class modal-bg
document.getElementById('button').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});
// go into the document and find the .close button, listen for the click event and create a function and use the query selector to grab the bg modal and change the display to none
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});













