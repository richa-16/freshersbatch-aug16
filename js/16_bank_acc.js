function Bank(a_no ,a_name, a_bal)
{
	this.a_no=a_no;
	this.a_name=a_name;
	this.a_bal=a_bal;
	
}
function withdraw() {
	var a_no=document.getElementById("a_no").value;
	var a_name=document.getElementById("a_name").value;
	var a_bal=document.getElementById("a_bal").value;
	var a_amt=document.getElementById("a_amt").value;
	
	var bankobj=new Bank(a_no, a_name, a_bal);
	
		bankobj.a_bal=a_bal- a_amt;
		document.getElementById("a_bal").value=bankobj.a_bal;
		
		}
	

function deposit() {
	var a_no=document.getElementById("a_no").value;
	var a_name=document.getElementById("a_name").value;
	var a_bal=document.getElementById("a_bal").value;
	var a_amt=document.getElementById("a_amt").value;
	
	var bankobj=new Bank(a_no, a_name, a_bal);
	
	bankobj.a_bal=parseInt(a_bal) + parseInt(a_amt);
	document.getElementById("a_bal").value=bankobj.a_bal;
		
	
		
}