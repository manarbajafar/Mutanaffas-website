function verifyPassword() {  
    var pswd = document.getElementById("pswd").value; 
    
    //minimum password length validation 
    if(pswd.length < 6 && pswd!="") {  
        alert("Password length must be atleast 6 characters.");
        return false;
    } 

    //(? = .*\d) should contain at least one digit
    //(?=.*[a-zA-Z]) should contain at least one letter (lower case or upper case)
    //{6,} length must be at least 6 characters
    var regex =/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
    if(!regex.test(pswd)){
        alert("Password should containat at least one digit and one letter.");
        return false;
    }

    //If password validation passed
    alert("Registration completed successfully.");
    return true;
}