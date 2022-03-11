function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);
    let message = document.getElementById("message");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Passwords match";
            alert("Correct Password")
        }
        else{
            message.textContent = "Password don't match";
            alert("Incorrect Password")
        }
    }
    else{
        alert("Pleasse enter correct password");
        message.textContent = "";
    }
}