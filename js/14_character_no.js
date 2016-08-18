function myfunc() {
	var st1=document.getElementById("st").value;
	var i;
	var count=0;
	for(i=0;i< st1.length;i++)
		{
		if(((st1.charAt(i) >='A') &&( st1.charAt(i) <='Z')) || ((st1.charAt(i) >='a') && (st1.charAt(i) <='z'))) 
		count=count+1;
		}
	document.getElementById('spa').innerHTML=+count;
}