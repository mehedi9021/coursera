function validateFirstName() {
    // test input for 2-15 allowed characters
    var fName = document.getElementById("firstName").value;
    var rel = /^[a-zA-Z\s\'\-']{2,15}$/;
    if(rel.test(fName)) {
        // if input is valid, update page to show successful entry
        document.getElementById("firstNamePrompt").style.color = "green";
        document.getElementById("firstNamePrompt").innerHTML = fName;
        return true;
    } else {
        // if input is invalid, update page to prompt for new input
        document.getElementById("firstNamePrompt").style.color = "Red";
        document.getElementById("firstNamePrompt").innerHTML = "<strong> Enter 2-15 characters.</strong>";
        return true;
    }
}

function validateLastName() {
    // test input for 2-15 allowed characters
    var lName = document.getElementById("lastName").value;
    var rel = /^[a-zA-Z\s\'\-']{2,15}$/;
    if(rel.test(lName)) {
        // if input is valid, update page to show successful entry
        document.getElementById("lastNamePrompt").style.color = "green";
        document.getElementById("lastNamePrompt").innerHTML = lName;
        return true;
    } else {
        // if input is invalid, update page to prompt for new input
        document.getElementById("lastNamePrompt").style.color = "Red";
        document.getElementById("lastNamePrompt").innerHTML = " <strong>Enter 2-15 characters.</strong>";
        return true;
    }
}

function validateEmail() {
    var eMail = document.getElementById("email").value;
    var rel = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(rel.test(eMail)) {
        // if input is valid, update page to show successful entry
        document.getElementById("emailPrompt").style.color = "green";
        document.getElementById("emailPrompt").innerHTML = eMail;
        return true;
    } else {
        // if input is invalid, update page to prompt for new input
        document.getElementById("emailPrompt").style.color = "Red";
        document.getElementById("emailPrompt").innerHTML = " <strong>Invalid Email Address</strong>";
        return true;
    }
}

function validatePhone() {
    // test xxx-xxx-xxxx
    var phoneNumber = document.getElementById("phone").value;
    var rel = /^\d{3}-\d{3}-\d{4}$/;
    if(rel.test(phoneNumber)) {
        // if input is valid, update page to show successful entry
        document.getElementById("phonePrompt").style.color = "green";
        document.getElementById("phonePrompt").innerHTML = phoneNumber;
        return true;
    } else {
        // if input is invalid, update page to prompt for new input
        document.getElementById("phonePrompt").style.color = "Red";
        document.getElementById("phonePrompt").innerHTML = "<strong>xxx-xxx-xxxx.</strong>";
        return true;
    }
}