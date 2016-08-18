function myfunc() {
	var fac=document.getElementById("fact").value;
	var i;
	for(i=fac-1;i>=1;i--)
		{
		fac=fac*i;
		}
	document.write(fac);
}