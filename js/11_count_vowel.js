var str=['w','e','l','c','o','m','e','h','e','l','l','o'];
function myfunc() {
	var j;
	var a=0,e=0,i=0,o=0,u=0;
	for(j in str)
		{
		if(str[j]=='a')
			a++;
	if(str[j]=='e')
		e++;
	if(str[j]=='i')
		i++;
	if(str[j]=='o')
		o++;
	if(str[j]=='u')
		u++;
}

document.write(a);
document.write(e);
document.write(i);
document.write(o);
document.write(u);
}