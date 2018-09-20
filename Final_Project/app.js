

// created function to open nav bar
function openNav() {
    document.getElementById('nav').style.width = "100%";
}
// created function to close nav bar
function closeNav() {
    document.getElementById('nav').style.width = "0%";
}

// find an element with the ID of button, listen for the click event and run the function, used query selector to select the class modal-bg
document.getElementById('button').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});
// go into the document and find the .close button, listen for the click event and create a function and use the query selector to grab the bg modal and change the display to none
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

// created function for form
function validate() {
    // declared variables
    var uname = document.getElementById("uname").value;
    var Email = document.getElementById("Email").value;
    var message = document.getElementById("message").value;
    var pattern = document.getElementById("pattern").value;
    // used "^[0-9]" to make sure that it checks for numbers 0-9, regexp matches text with a pattern
    var patcheck = new RegExp("^[0-9]");
//    created if else statements
    if(uname==="")
    {
        document.getElementById("div1").innerHTML="Enter a value";
        document.getElementById("div1").style.color="Red";
        
    }
    else
    {
        // definition help from:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
        // The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
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
    // .test, tests for a string, in this cases tests for a pattern
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

// aligned about me page and description of store policies
document.getElementById("myPicture2").style.textAlign = "center";
document.getElementById("aboutTitle").style.textAlign = "center";
document.getElementById("policyDescription").style.textAlign = "center";









