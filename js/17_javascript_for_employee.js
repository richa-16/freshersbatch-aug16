function employeeList(id,name,salary,dept_id ){
this.id=id;
this.name=name;
this.salary=salary;
this.dept_id=dept_id;


 
	this.sortEmpId=function(s)
	{
		document.write("The details of employee according to sorted id are as follows:<br>");
		s.sort(function(id1, id2){return id1.salary-id2.salary});
		
		document.write("Id: "+s[0].id+", Name: "+s[0].name+", Salary: "+s[0].salary+", Dept_Id: "+s[0].dept_id);
		document.write("<br>Id: "+s[1].id+", Name: "+s[1].name+", Salary: "+s[1].salary+", Dept_Id: "+s[1].dept_id);
		document.write("<br>Id: "+s[2].id+", Name: "+s[2].name+", Salary: "+s[2].salary+", Dept_Id: "+s[2].dept_id);
		document.write("<br>Id: "+s[3].id+", Name: "+s[3].name+", Salary: "+s[3].salary+", Dept_Id: "+s[3].dept_id);
		document.write("<br>Id: "+s[4].id+", Name: "+s[4].name+", Salary: "+s[4].salary+", Dept_Id: "+s[4].dept_id);
		document.write("<br>Id: "+s[5].id+", Name: "+s[5].name+", Salary: "+s[5].salary+", Dept_Id: "+s[5].dept_id);
		document.write("<br>Id: "+s[6].id+", Name: "+s[6].name+", Salary: "+s[6].salary+", Dept_Id: "+s[6].dept_id);
   }
 }
 
 function employeeSort()
 {
    var emp1=new employeeList(101,"Ashish",1200,1);
	var emp2=new employeeList(455,"Seema",1100,3);
	var emp3=new employeeList(12,"Ram",1000,2);
	var emp4=new employeeList(13,"Harish",15000,10);
	var emp5=new employeeList(15,"Ravi",3500,4);
	var emp6=new employeeList(9,"Ravi",6500,5);
	
	
      var emp = [emp1, emp2, emp3, emp4,emp5,emp6];
      emp1.sortEmpId(emp);
      
      
 
 }