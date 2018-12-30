
console.log("Hi")
var upassInp=document.querySelector("#passLogin");
var RegexpUser=/^[a-zA-Z0-9_-]{1,20}$/;
console.log("ddd")
upassInp.addEventListener("blur",function(){
	
	var alert=document.querySelector("#userpasslogin .alert");
	if(RegexpUser.test(upassInp.value) == false)
		{
			upassInp.classList.remove("in-valid")
			alert.style.display="block"	;
		}
	else{
		upassInp.classList.add("in-valid")
			alert.style.display="none"	;
	}
})


var userMailInp=document.querySelector("#emailLogin ");
var RegexpMail=/^(\w{1,}[!#$%^&*()-_.+]{0,1}){1,}@[a\w_]{4,64}(\.[a-z]{1,6}){1,3}$/;
userMailInp.addEventListener("blur",function(){
	var alert=document.querySelector("#userNamelogin .alert");
	var alertwrong=document.querySelector("#userNamelogin .alertwrong");
	if(RegexpMail.test(userMailInp.value) == false)
		{console.log("false"+" "+userMailInp.value)
		if(userMailInp.value ==""){
			userMailInp.classList.remove("in-valid")
			alert.style.display="block"	;
			alertwrong.style.display="block"	;
		}
		else{
			userMailInp.classList.remove("in-valid")
			alert.style.display="none"	;
			alertwrong.style.display="block"	;
		}
			
		}
	else{
		userMailInp.classList.add("in-valid")
			alert.style.display="none"	;
			alertwrong.style.display="none"	;
	}
})
