function myfunc() {
	var fNo=document.getElementById("first").value;
	var sNo=document.getElementById("second").value;
	var count;
	
	var i,j;
	 for(i=fNo;i<=sNo;i++)
		 {
		 count=1;
		 for(j=2;j<=i/2;j++)
			 {
			 if(i%j==0)
				 {
				 count=0;
				 break;
				 }
			 }
		 if(count==1)
			 {
			 document.write(i+" , ");
			 }
		 }
	
	
}