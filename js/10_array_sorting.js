var arr=[30, 10, 20, 40, 50, 80];
function asc() {
	var i=0;
	var j;
	
	var temp;
	 for (i in arr){
	        for (j=0;j<=(i-1);j++){
	            if (arr[j] > arr[j+1])
	            {
	                temp=arr[j];
	                arr[j]=arr[j+1];
	                arr[j+1]=temp;
	            }
	        }
	    }
	 for(i in arr)
		 {
		 document.write(arr[i]);
		 }	
}

function desc() {
	var i=0;
	var j;
	var n=6;
	var temp;
	for (i = 0; i < n; ++i)
    {
        for (j = i + 1; j < n; ++j)
        {
            if (arr[i] < arr[j])
            {
              
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
	for(i in arr)
	 {
	 document.write(arr[i]);
	 }	
}