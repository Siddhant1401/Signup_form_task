var regexName = /^[a-zA-Z]+$/;
var isValidFirstName=false;
var isValidLastName=false;
var regexEmail = /^[a-zA-z0-9.-_]+@[a-zA-Z]+\.(com|org)$/;
var isValidEmail=false;
var regexMobile = /^[0-9]+$/;
var isValidMobile=false;
var isValidPassword=false;
var isValidConfirmPassword=false;


function onLoad(){
    var firstNameWarning=document.getElementById("firstNameWarning");
    var lastNameWarning=document.getElementById("lastNameWarning");
    var emailWarning = document.getElementById("emailWarning");
    var mobileWarning = document.getElementById("mobileWarning");
    var passwordWarning = document.getElementById("passwordWarning");
    var confirmpasswordWarning = document.getElementById("confirmpasswordWarning");
    
}

function onSubmitClick(){
    //First Name Validation
    var firstName = document.getElementById("firstName").value;
    if(!regexName.test(firstName) && firstName !=""){
        firstNameWarning.classList.remove("warning-hide");
        firstNameWarning.setAttribute('title','Only Aplhabets are allowed');
        isValidFirstName=false;

    }
    else if(regexName.test(firstName)){
        firstNameWarning.classList.add("warning-hide");
        isValidFirstName=true;


    }
    else if(firstName == ""){
        firstNameWarning.classList.remove("warning-hide");
        firstNameWarning.setAttribute('title','First Name field cannot be empty');
        isValidFirstName=false;

    }

    //Last Name Validation
    var lastName = document.getElementById("lastName").value;
    if(!regexName.test(lastName) && lastName !=""){
        lastNameWarning.classList.remove("warning-hide");
        lastNameWarning.setAttribute('title','Only Aplhabets are allowed');
        isValidLastName=false;
        

    }
    else if(regexName.test(lastName)){
        lastNameWarning.classList.add("warning-hide");
        isValidLastName=true;


    }
    else if(lastName == ""){
        lastNameWarning.classList.remove("warning-hide");
        lastNameWarning.setAttribute('title','Last Name field cannot be empty');
        isValidLastName=false;

    }

    //Email Validation

    var email = document.getElementById("email").value;
    if(!regexEmail.test(email) && email !=""){
        emailWarning.classList.remove("warning-hide");
        emailWarning.setAttribute('title','Invalid Email Address');
        isValidEmail=false;

    }
    else if(regexEmail.test(email)){
        emailWarning.classList.add("warning-hide");
        isValidEmail=true;
    }
    else if(email == ""){
        emailWarning.classList.remove("warning-hide");
        emailWarning.setAttribute('title','Email field cannot be Empty');
        isValidEmail=false;

    }

    //Mobile Validation
    var mobile = document.getElementById("mobile").value;
    if((!regexMobile.test(mobile) && mobile.length < 10 && mobile.length !=0) || ((!regexMobile.test(mobile) &&  mobile.length !=0) )){
        mobileWarning.classList.remove("warning-hide");
        mobileWarning.setAttribute('title','Invalid Mobile Number');
        isValidMobile=false;
    }
    else if(regexMobile.test(mobile) && mobile.length == 10){
        mobileWarning.classList.add('warning-hide');
        isValidMobile=true;
    }
    else if(mobile.length == 0){
        mobileWarning.classList.remove("warning-hide");
        mobileWarning.setAttribute('title','Mobile Number cannot be Empty');
        isValidMobile=false;
    }

    //Password Validation
    var password = document.getElementById("password").value;

    if(password == ""){
        passwordWarning.classList.remove("warning-hide");
        passwordWarning.setAttribute('title','Password Cannot be Empty');
        isValidPassword=false;

    }
    else if(password.length < 8){
        passwordWarning.classList.remove("warning-hide");
        passwordWarning.setAttribute('title','Length of the Password must greater than 7 Characters');
        isValidPassword=false;

    }
    else{
        passwordWarning.classList.add("warning-hide");
        isValidPassword=true;

    }

    //Confirm Password Validation
    var confirmpassword = document.getElementById("confirmpassword").value;
    if(confirmpassword != password){
        confirmpasswordWarning.classList.remove("warning-hide");
        confirmpasswordWarning.setAttribute('title','Password does not match');
        isValidConfirmPassword=false;
    }
    else{
        confirmpasswordWarning.classList.add("warning-hide");
        isValidConfirmPassword=true;

    }

    //On successfull submission
    if(isValidFirstName &&
        isValidLastName && 
        isValidEmail && 
        isValidMobile && 
        isValidPassword && 
        isValidConfirmPassword ){
            alert("Success");
            document.getElementById("signup-form").reset();
        }
}

function onCancelClick(){
    firstNameWarning.classList.add("warning-hide");
    lastNameWarning.classList.add("warning-hide");
    emailWarning.classList.add("warning-hide");
    mobileWarning.classList.add("warning-hide");
    passwordWarning.classList.add("warning-hide");
    confirmpasswordWarning.classList.add("warning-hide");

}