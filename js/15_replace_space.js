function myfunc() {
	var str=document.getElementById("s").value;
	str = str.replace(/\s/g,'');
	document.write(str)
}