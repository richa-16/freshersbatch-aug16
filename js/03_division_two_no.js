function myfunc() {
	var firstNo=document.getElementById("first").value;
	var secondNo=document.getElementById("second").value;
	var div;
	if(secondNo == 0)
		{
		
	alert("Please enter second no greater than 0");
		}
	else
		{
		div=firstNo / secondNo;
		document.write(div);
		
		}
	
}