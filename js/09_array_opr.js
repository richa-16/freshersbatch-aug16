var arr=[10,20,60,40,50,30];
function maxno() {
	var i=1;
	for(i in arr)
		{
		if(arr[0]<arr[i])
			{
			arr[0]=arr[i];
			}
		}
	document.write(arr[0]);
}

function minno() {
	var i=1;
	for(i in arr)
		{
		if(arr[0]>arr[i])
			{
			arr[0]=arr[i];
			}
		}
	document.write(arr[0]);
}
function avg() {
	var i=1;
	var j=0;
	sum=0;
	for(i in arr)
		{j++;
		sum=sum+arr[i];
		}
	document.write(sum/j);
}
function total() {
	sum=0;
	for(i in arr)
		{
		sum+=arr[i];
		}
	document.write(sum);
}