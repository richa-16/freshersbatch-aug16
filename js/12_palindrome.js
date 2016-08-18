function reverse(s) {
   return st=s.split('').reverse().join('');
}
function myfunc() {
	var str1=document.getElementById("str").value;
	var st2;
	st2=str1;
	str1=reverse(st2);
	
	if(str1==st2)
		{
		document.getElementById('dis').innerHTML="this string is palindrome";
		}
	else
		document.getElementById('dis').innerHTML="this string is not palindrome";
}