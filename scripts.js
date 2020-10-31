/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function(){
	
	var email = document.getElementById("email");
	var message = document.getElementsByClassName("message")[0];
	var submit = document.getElementsByTagName("button")[0];
	
	submit.addEventListener("click", function(e){
		e.preventDefault();
		
		if (email.value == ""){
			message.innerHTML = "Please enter a valid email address"
		}else{
			message.innerHTML = `Thank you! Your email address ${email.value} has been added to our mailing list!`;
		}
	});
});