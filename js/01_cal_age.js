function myfunc()
{
	var age=document.getElementById("myAge").value;
	var date=new Date();
	var mydate=date.getFullYear();
	var year=mydate-age;
	alert(year);
	
	}