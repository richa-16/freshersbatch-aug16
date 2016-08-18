function myfunc(){
	var str=document.getElementById("pwd").value;
	var a=str.indexOf("@");
	var b=str.lastIndexOf(".");
	var len=str.length;
	if(a== -1 && ((str.length-b-1)>2))
		{
		document.write("email is not valid");
		}
	else
		document.write("email is valid");
}