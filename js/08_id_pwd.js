var flag=0;
function myfunc() {
	var uid=document.getElementById("id").value;
	var pass=document.getElementById("pwd").value;
	
	
		
	if(uid == "rich" )
		{
		 if(pass == "rich123")
		 {
		 alert("successfully enter");
		 }
	else{
		 alert("wrong id and pwd");
		 flag++;
		 if(flag==3)
			 {
			alert("no of attempts is complete");
			 
		 }
		}
}
	else
		 alert("wrong id and pwd");
		
}