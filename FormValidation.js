var namerror=document.getElementById('name-error');
var emailerror=document.getElementById('email-error');
var mobileerror=document.getElementById('mobile-error');
var pwderror=document.getElementById('pwd-error');
var submiterror=document.getElementById('submit-error');

function ValidateName(){
      var name=document.getElementById('contact-name').value;
      if(name.length==0){
        namerror.innerHTML='Name is required';
        return false;
      }
      if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
              namerror.innerHTML='Write full name';
              return false;
      }
      namerror.innerHTML=' <i class="fa fa-check" aria-hidden="true"></i>';
      return true
}
ValidateName();

 function Validatemobile(){
       var mobile=document.getElementById('contact-mobile').value;
       if(mobile.length==0){
        mobileerror.innerHTML="Mobile no is required";
        return false;
       }
       if(mobile.length!==10){
        mobileerror.innerHTML="Mobile no should be 10 digits";
        return false;
       }
       if(!mobile.match(/^[0-9]{10}$/)){
        mobileerror.innerHTML="Only digit please";
        return false;
       }
       mobileerror.innerHTML=' <i class="fa fa-check" aria-hidden="true"></i>';
       return true
}
Validatemobile();

function Validateemail(){
    var email=document.getElementById('contact-email').value;
    if(email.length==0){
        emailerror.innerHTML='Email is required'
        return false
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-zA-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML='Email Invalid'
        return false
    }
    emailerror.innerHTML=' <i class="fa fa-check" aria-hidden="true"></i>';
    return true

}
Validateemail();

 function Validatepassword(){
        var pwd=document.getElementById('contact-password').value;

        if(pwd.length==0){
            pwderror.innerHTML='Password is required';
            return false
        }
        if(pwd.length!==8){
            pwderror.innerHTML='Password must be 8 characters'
            return false
        }
        pwderror.innerHTML=' <i class="fa fa-check" aria-hidden="true"></i>';
        return true
}
Validatepassword();

function ValidateForm(){
    if(!ValidateName() || !Validateemail()|| !Validatemobile()|| !Validatepassword()){
        submiterror.style.display='block';
        submiterror.innerHTML='Please fix error to submit'
        setTimeout(function(){
            submiterror.style.display='none';},3000);
        return false;
    }
   

}
ValidateForm();