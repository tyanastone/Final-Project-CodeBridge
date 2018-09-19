// aligned content to center of div on bragging rights page and increased font size for instructions and title

document.getElementById("allCereal").style.textAlign = "center";
document.getElementById("haul2").style.textAlign = "center";
document.getElementById("haul3").style.textAlign = "center";
document.getElementById("haul4").style.textAlign = "center";
document.getElementById("haul6").style.textAlign = "center";
document.getElementById("haul7").style.textAlign = "center";
document.getElementById("form2").style.textAlign = "center";
document.getElementById("titleBrags").style.textAlign = "center";
document.getElementById("titleBrags").style.fontSize = "60px";
document.getElementById("bragsInstructions").style.textAlign = "center";
document.getElementById("bragsInstructions").style.fontSize = "20px";
document.getElementById("footer").style.textAlign = "center";

document.getElementById("myPicture2").style.textAlign = "center";
document.getElementById("aboutTitle").style.textAlign = "center";
document.getElementById("policyDescription").style.textAlign = "center";





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






// function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//         alert("Name must be filled out");
//         return false;
//     }
// }
// find an element with the ID of button, listen for the click event and run the function, used query selector to select the class modal-bg
document.getElementById('button').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});
// go into the document and find the .close button, listen for the click event and create a function and use the query selector to grab the bg modal and change the display to none
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});
// created function for form
function validate()
{
    // declared variables
    var uname = document.getElementById("uname").value;
    var Email = document.getElementById("Email").value;
    var message = document.getElementById("message").value;
    var pattern = document.getElementById("pattern").value;
    var patcheck = new RegExp("^[0-9]");
//    created if else statements
    if(uname==="")
    {
        document.getElementById("div1").innerHTML="Enter a value";
        document.getElementById("div1").style.color="Red";
        
    }
    else
    {
        document.getElementById("div1").innerHTML="";
    }
    if(Email.indexOf("@")> -1)
    {
        document.getElementById("div2").innerHTML="";
    }
     else
    {
        document.getElementById("div2").innerHTML="Enter the correct email address";
        document.getElementById("div2").style.color="Red";
        
    }
    if(message.length<=5)
    {
        document.getElementById("div3").innerHTML="Message must be 250 characters minimum";
        document.getElementById("div3").style.color="Red";
    }
     else
    {
        document.getElementById("div3").innerHTML="";
    }
    
    if(!patcheck.test(pattern))
    {
        document.getElementById("div4").innerHTML="Only Numbers";
        document.getElementById("div4").style.color="Red";
    }
    else
    {
        document.getElementById("div4").innerHTML="";
    }
}















