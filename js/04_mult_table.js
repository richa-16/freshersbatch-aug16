function myfunc() {
	var tableNo=document.getElementById("no").value;
	var i;
	for(i=1; i<=10;i++)
		{
		document.write("  "+tableNo*i+"  ");
		
		}
var confirmation=confirm("do you want to continue with next number or quit");
if(confirmation == true)
	{
	window.location.reload(confirmation);
	}
}