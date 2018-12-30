


var fristnameInp=document.querySelector("#fristnameSignup");
var RegexpFUser=/^[a-zA-Z0-9_-]{1,50}$/;
fristnameInp.addEventListener("blur",function(){
	console.log("sign up")
	var alert=document.querySelector("#FristNameSignUpDiv .alert");
	if(RegexpFUser.test(fristnameInp.value) == true)
		{console.log("true"+" "+fristnameInp.value)
			fristnameInp.classList.add("in-valid")
			alert.style.display="none"	;
		}
	
	else{console.log("false"+" "+fristnameInp.value)
	fristnameInp.classList.remove("in-valid")
			alert.style.display="block";
	}
/*	if(fristnameInp.value == "")
		{
			var alertwrong=document.querySelector("#FristNameSignUpDiv .alertwrong");
			alertwrong.style.display="block"	;
		}
*/	
	})
	var lastnameInp=document.querySelector("#lastnameSignup");
var RegexpUser=/^[a-zA-Z0-9_-]{1,50}$/;
lastnameInp.addEventListener("blur",function(){
	console.log("sign up")
	var alert=document.querySelector("#LastNameSignUpDiv .alert");
	if(RegexpUser.test(lastnameInp.value) == true)
		{console.log("true"+" "+lastnameInp.value)
			lastnameInp.classList.add("in-valid")
			alert.style.display="none"	;
		}
	
	else{console.log("false"+" "+lastnameInp.value)
	lastnameInp.classList.remove("in-valid")
			alert.style.display="block"	;
	}
})

	var UnameInp=document.querySelector("#usernameSignup");
var RegexpLUser=/^[a-zA-Z0-9_-]{1,50}$/;
UnameInp.addEventListener("blur",function(){
	console.log("sign up")
	var alert=document.querySelector("#userNameSignUDivpDiv .alert");
	if(RegexpLUser.test(UnameInp.value) == true)
		{console.log("true"+" "+UnameInp.value)
			UnameInp.classList.add("in-valid")
			alert.style.display="none"	;
		}
	
	else{console.log("false"+" "+UnameInp.value)
	UnameInp.classList.remove("in-valid")
			alert.style.display="block"	;
	}
})


var EmailInpSigUp=document.querySelector("#emailSignup");
var RegexpEmailUser=/^(\w{1,}[!#$%^&*()-_.+]{0,1}){1,}@[a\w_]{4,64}(\.[a-z]{1,6}){1,3}$/;
EmailInpSigUp.addEventListener("blur",function(){
	console.log("sign up")
	var alert=document.querySelector("#EmailSignUpDiv .alert");
	var  alertwrong=document.querySelector("#EmailSignUpDiv .alertwrong");
	if(RegexpEmailUser.test(EmailInpSigUp.value) == true)
		{console.log("true"+" "+EmailInpSigUp.value)
			EmailInpSigUp.classList.add("in-valid")
			alert.style.display="none"	;
			alertwrong.style.display="none"	;
		}
	
	else{
		console.log("false"+" "+EmailInpSigUp.value)
		if(EmailInpSigUp.value ==""){
			EmailInpSigUp.classList.remove("in-valid")
			alert.style.display="block"	;
		}
		else{
			EmailInpSigUp.classList.remove("in-valid")
			alert.style.display="none"	;
			alertwrong.style.display="block"	;
		}
	
	}
})


var PassInpSigUp=document.querySelector("#passSignup");
var RegexpPassUser=/^[a-zA-Z0-9_-]{1,50}$/;
PassInpSigUp.addEventListener("blur",function(){
	console.log("sign up")
	var alert=document.querySelector("#PassSignUpDiv .alert");
	if(RegexpPassUser.test(PassInpSigUp.value) == true)
		{console.log("true"+" "+PassInpSigUp.value)
			PassInpSigUp.classList.add("in-valid")
			alert.style.display="none"	;
		}
	
	else{console.log("false"+" "+PassInpSigUp.value)
	PassInpSigUp.classList.remove("in-valid")
			alert.style.display="block"	;
	}
})


var REPassInpSigUp=document.querySelector("#repassSignup");
var RegexpRepassUser=/^[a-zA-Z0-9_-]{1,50}$/;
var PassInpSigUp=document.querySelector("#passSignup");
REPassInpSigUp.addEventListener("blur",function(){
	console.log("sign up")
	var alert=document.querySelector("#rePassSignUpDiv .alert");
	var alertwrong=document.querySelector("#rePassSignUpDiv .alertwrong");
	if(RegexpRepassUser.test(REPassInpSigUp.value) == true)
		{console.log("true"+" "+REPassInpSigUp.value)
			REPassInpSigUp.classList.add("in-valid")
			alert.style.display="none"	;
		 alertwrong.style.display="none";
		}
	
	else{console.log("false"+" "+REPassInpSigUp.value)
	REPassInpSigUp.classList.remove("in-valid")
			alert.style.display="block"	;
	}
	
	if(PassInpSigUp.value ==REPassInpSigUp.value)
		{
			console.log("t"+" "+REPassInpSigUp.value+"  "+PassInpSigUp.value)
		}
	else{
		alertwrong.style.display="block"	;
	}
})

var butttonSigUp=document.querySelector("#buttonSignup");
butttonSigUp.addEventListener("click",function(){
	var fristnameInp=document.querySelector("#fristnameSignup");
var lastnameInp=document.querySelector("#lastnameSignup");
var UnameInp=document.querySelector("#usernameSignup");
var EmailInpSigUp=document.querySelector("#emailSignup");
var PassInpSigUp=document.querySelector("#passSignup");
var REPassInpSigUp=document.querySelector("#repassSignup");
	
	var alert=document.querySelector("#wrongbutton");
	if(fristnameInp.value =="" || lastnameInp.value =="" || UnameInp.value =="" || UnameInp.value =="" || EmailInpSigUp.value =="" || PassInpSigUp.value =="" || REPassInpSigUp.value =="" )
		{
			
						alert.style.display="none"	;

		}
	
})