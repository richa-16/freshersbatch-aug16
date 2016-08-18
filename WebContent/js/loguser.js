
var person="-";
function loginUser(){

	var username = document.getElementById('Uname').value;
	var password = document.getElementById('pwd').value;
	
	if (typeof(Storage) !== "undefined") {
	    // Store
		var count = 0;
		str_count = localStorage.getItem("countUsers");
		count = parseInt(str_count);
		console.log("Count users "+count);
		
		
		var x =1;
		var login = 0;
		// store userId in sessionStorage as well 
		var userId = 0;
		var userName = 0;
		for(x =1 ; x <=count ; x++){
			var user = JSON.parse(localStorage.getItem(x));
			var uName = user[0].name;
		    person=user[0].name;
		  	var uPass = user[0].password;
			console.log("Id "+x+" : User name " +uName);
			console.log("Id "+x+" : User password " +uPass);
			var uCheck = username.localeCompare(uName);
			var pCheck = password.localeCompare(uPass);
			console.log(uCheck);
			console.log(pCheck);
			if(username==uName && password==uPass) {
				// if password and username is matching then break 
				console.log("LoggedIN");
				login = 1;
				
				userId = x;
				userName = user[0].name;
				break;
			}
		}

		if(login == 1){
			localStorage.userVerified=1;
			sessionStorage.loggeIn = 1;
			sessionStorage.userId = userId;
			sessionStorage.userName = userName;
			//alert(sessionStorage.loggeIn + " " +sessionStorage.userName+ " " );
			//$("#success1").html( "<strong>Success!</strong> Registered Successfully.");
		   //alert("Logged in");
			//document.getElementById("success1").innerHTML += "<strong>Success!</strong> Log In Successful.";
			window.location.href  = "index.html";
		
		}else{
			console.log("Not loggedIn");
			//alert("Wrong username and password");
			 document.getElementById("Uname").value="";
			 document.getElementById("pwd").value="";
			document.getElementById("no").innerHTML += "<strong>Wrong username or password</strong>";
		}
	    
	} 
}
	
	
function registerUser(){

	var name = document.getElementById('usr').value;
	var email = document.getElementById('uEmail').value;
	var realname = parseInt(document.getElementById('name').value);
	var password = document.getElementById('pwd').value;
	var Cpassword = document.getElementById('confirm').value;
	
	//checking the validation of fields
	if((name.length == 0) ||(realname.length == 0) || (email.length == 0) || (Cpassword.length == 0) || (password.length == 0)){
			alert("Please enter details.");
			return;
		}		
	
	if(password != Cpassword){
		alert("Wrong password!");
	}
    
    
	//localStorage.clear();
	console.log("In register User");
	var count = 0;
	var str_count =localStorage.getItem("countUsers");
	
	if (str_count == null || str_count == "null")
	{
	      count = 0;
	} 
    else 
    {
	      count = parseInt(str_count);
	} 
	
	count++;
	console.log("Count "+count);
	var copy=0;
	
	for(x =1 ; x <count ; x++)
	{
			var user = JSON.parse(localStorage.getItem(x));
			var uName = user[0].name;
			console.log("Id "+x+" : User name " +uName);
			var uCheck = name.localeCompare(uName);
			console.log(uCheck);
			
			if(name==uName){
				copy=1;
				break;
			}
	}
	
	if(copy==0)
			{
				var userArray = [{
				name: name,
				realname: realname,
				email: email,
				password: password,
				Cpassword: Cpassword
				}];
	
				localStorage.setItem(count , JSON.stringify(userArray));
				localStorage.setItem("countUsers", count);
				sessionStorage.userName = name;
				
				
	
				console.log("User is registered ");
				//document.getElementById("success").innerHTML += "<strong>Success!</strong> Registered Successfully.";
				//$("#success").html( "<strong>Success!</strong> Registered Successfully.");
				//alert("Registered Successfully");
				
				localStorage.userVerified=1;
				count = count + 1;
				console.log("Last count "+ count);
				window.location.href = "index.html";
			}
			
	else    {
		document.getElementById("usr").value="";
		document.getElementById("uEmail").value="";
		document.getElementById("name").value="";
		document.getElementById("pwd").value="";
		document.getElementById("confirm").value="";
		     document.getElementById("danger").innerHTML += "<strong>Username already exists.</strong>";
			}
	}
	
	
function userVerified(){
	
	if(localStorage.userVerified==1){
		
		var i=localStorage.countUsers;
		var u=sessionStorage.userName;
		document.getElementById("dusr").innerHTML="Welcome "+ u;
		document.getElementById("dusr1").innerHTML +="<button onclick=\"logout();\">Log Out</button> ";
		document.getElementById("log_user").innerHTML="";
		document.getElementById("signOut").innerHTML="";
		
	}else{
		//redirectPage();
	}
}

function logout(){
	console.log("Called logout ");
	localStorage.userVerified=0;
	//alert("In log out");
	sessionStorage.loggeIn = 0;
	redirectPage();
}

function redirectPage(){
	//window.location.href = "index.html";
	//window.location.assign("index.html");
	location.reload();
}