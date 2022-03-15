function MyForm(){
    //asign input fields to a variable
    var fullname = document.forms["Form"]["name"];
    var EMail = document.forms["Form"]["email"];
    var number = document.forms["Form"]["number"];
    var password = document.forms["Form"]["password"];
    var c_password = document.forms["Form"]["c_Password"];
    
    
    if (fullname.value ==""){
        window.alert("please enter your fullname")
        fullname.focus();
        return false;}

    if (EMail.value =="" ){
        window.alert("please enter your email")
        EMail.focus();
        return false;}

    if (number.value =="" ){
        window.alert("please enter your number")
        number.focus();
        return false;}

    if (password.length == 8 ){
        window.alert("password must be atleast 8 characters")
        password.focus();
        return false;}

    if (c_password.length == 8 ){
        window.alert("password doesn't match")
        c_password.focus();
        return false;}
        alert("successfull")
    }