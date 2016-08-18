function Employ(eid,ename,sal,dept) {
	
	this.id=eid;
	this.name=ename;
	this.salary=sal;
	this.dept_id=dept;
	
	 this.sortEnpId=function(s){
		 

			document.write("Id: "+s[0].id+", Name: "+s[0].name+", Salary: "+s[0].salary+", Dept_Id: "+s[0].dept_id);
			document.write("<br>Id: "+s[1].id+", Name: "+s[1].name+", Salary: "+s[1].salary+", Dept_Id: "+s[1].dept_id);
			document.write("<br>Id: "+s[2].id+", Name: "+s[2].name+", Salary: "+s[2].salary+", Dept_Id: "+s[2].dept_id);
			document.write("<br>Id: "+s[3].id+", Name: "+s[3].name+", Salary: "+s[3].salary+", Dept_Id: "+s[3].dept_id);
			document.write("<br>Id: "+s[4].id+", Name: "+s[4].name+", Salary: "+s[4].salary+", Dept_Id: "+s[4].dept_id);
			document.write("<br>Id: "+s[5].id+", Name: "+s[5].name+", Salary: "+s[5].salary+", Dept_Id: "+s[5].dept_id);
			document.write("<br>Id: "+s[6].id+", Name: "+s[6].name+", Salary: "+s[6].salary+", Dept_Id: "+s[6].dept_id);
	 }
}
function sort_emp()
{
var emp1=new Employ(102,"abc",10000,01);	
var emp2=new Employ(105,"xc",20000,02);
var emp3=new Employ(103,"lbc",10000,01);
var emp4=new Employ(101,"mbc",30000,03);
var emp5=new Employ(104,"nbc",40000,02);

var arr=[emp1,emp2,emp3,emp4,emp5];
emp1.sortEmpId(arr);

}