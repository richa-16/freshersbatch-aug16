
var advertisementsCount=25;
var advertisements=[{name:"Merc",category:"Cars and Bikes",loc:"../images/cars/c1.jpg",status:"available",price:"1000",city:"Pune"},
                    {name:"Merc",category:"Cars and Bikes",loc:"../images/cars/11.jpg",status:"available",price:"1000",city:"Pune"},
                    {name:"BMW",category:"Cars and Bikes",loc:"../images/cars/c2.jpg",status:"available",price:"",city:"Mumbai"},
                    {name:"Swift",category:"Cars and Bikes",loc:"../images/cars/c3.jpg",status:"",price:"",city:"Nagpur"},
                    {name:"DC Avanti",category:"Cars and Bikes",loc:"../images/cars/c4.jpg",status:"available",price:"1000",city:"Pune"},
                    {name:"Polo",category:"Cars and Bikes",loc:"../images/cars/c5.jpg",status:"available",price:"1000",city:"Mumbai"},
                    {name:"Audi",category:"Cars and Bikes",loc:"../images/cars/c6.jpg",status:"available",price:"1000",city:"Nagpur"},
                    {name:"Indica",category:"Cars and Bikes",loc:"../images/cars/c1.jpg",status:"available",price:"1000",city:"Pune"},
                    {name:"Merc",category:"Cars and Bikes",loc:"../images/cars/c2.jpg",status:"available",price:"1000",city:"Mumbai"},
                    {name:"BMW",category:"Cars and Bikes",loc:"../images/cars/c3.jpg",status:"available",price:"1000",city:"Nagpur"},
                    {name:"Bike",category:"Cars and Bikes",loc:"../images/bikes/b1.jpg",status:"available",price:"1000",city:"Pune"},
                    {name:"Moto",category:"Mobile and Tablets",loc:"../images/mob/m1.png",status:"available",price:"1000",city:"Mumbai"},
                    {name:"Sony",category:"Mobile and Tablets",loc:"../images/mob/m2.png",status:"available",price:"1000",city:"Nagpur"},
                    {name:"Iphone",category:"Mobile and Tablets",loc:"../images/mob/m1.png",status:"available",price:"1000",city:"Pune"},
                    {name:"Nexus",category:"Mobile and Tablets",loc:"../images/mob/tab1.jpg",status:"available",price:"1000",city:"Mumbai"},
                    {name:"Lenovo",category:"Mobile and Tablets",loc:"../images/mob/tab2.jpg",status:"available",price:"1000",city:"Nagpur"},
                    {name:"Iphone",category:"Mobile and Tablets",loc:"../images/mob/tab3.png",status:"available",price:"1000",city:"Pune"},
                    {name:"Nexus",category:"Mobile and Tablets",loc:"../images/mob/m1.png",status:"available",price:"1000",city:"Mumbai"},
                    {name:"Lenovo",category:"Mobile and Tablets",loc:"../images/mob/m2.png",status:"available",price:"1000",city:"Nagpur"},
                    {name:"Sony",category:"Mobile and Tablets",loc:"../images/mob/tab1.jpg",status:"available",price:"1000",city:"Pune"},
                    {name:"Home",category:"Homes",loc:"../images/home/h1.jpg",status:"available",price:"1000",city:"Mumbai"},
                    {name:"Home",category:"Homes",loc:"../images/home/h2.jpg",status:"available",price:"1000",city:"Nagpur"},
                    {name:"Home",category:"Homes",loc:"../images/home/h3.jpg",status:"available",price:"1000",city:"Pune"},
                    {name:"Home",category:"Homes",loc:"../images/home/h4.jpg",status:"available",price:"1000",city:"Mumbai"},
                    {name:"Home",category:"Homes",loc:"../images/home/rowhouse.jpg",status:"available",price:"1000",city:"Nagpur"},
                    ];







function search(){
	
	//var sort_basis = document.getElementById("filter").value;
	//var getLocalDatabaseForAds = getLocalDatabaseForAds(); 
	// replace advertisements variable with localStorage
	var temp = advertisements;
	/*if(sort_basis=="ByDate"){
		for(var d=0; d<advertisements.length; d++){
			var t;
			t = advertisements[d].date.substring(3,5);
			temp[d].date = temp[d].date+t+"";			
			t=advertisements[d].date.substring(0,2);
			temp[d].date += t + "";
			temp[d].date=temp[d].date.substring(6,14);
		}
		temp.sort(function(a, b){return b.date-a.date});
	}
	
	if(sort_basis=="LowesttoHighest"){
		temp=advertisements;
		temp.sort(function(a, b){return a.price-b.price});
	}
	
	if(sort_basis=="HighesttoLowest"){
		temp=advertisements;
		temp.sort(function(a, b){return b.price-a.price});
	}
	*/
	
	//var category = document.getElementById("category").value.toUpperCase();
	var keyword = document.getElementById("srch-term").value.toUpperCase();
	
	var id = 0;

	for(var i=0;i<temp.length;i++){

		var temp1=temp[i].name.toUpperCase();
		var temp2=temp[i].city.toUpperCase();
		if(temp1.indexOf(keyword)>=0 ||temp2.indexOf(keyword)>=0){
			if(temp[i].status!="sold"){

				//document.getElementById("searchresult").innerHTML += "<div class='result'><span><img src='"+temp[i].src+"'> </span><b>Product Name:</b>"+temp[i].product+"<br><b>Seller Name:</b>"+temp[i].name+" <br><b>Email: </b>"+temp[i].email+"<br><span><b>Price:</b>"+" Rs "+temp[i].price+"</span><br><b>Contact:</b></div><br><hr>";
				id++;
				document.write( 
								"<img src=\""+temp[i].loc+"\" width=\"100px\" height=\"100px\">"+
							+
							temp[i].product+"<br><br><br><br>"
							+temp[i].price+"<br><br><br>"+
							temp[i].city+"<br><br><br>"+temp[i].name+"<br><br><br>");
			}
		}
	}

	
	
		
}
	


	

	
	

var key;
var id=0;

function post()
	{
			
		
		
				
		
		
				var name = document.getElementById("name").value;
				var category = document.getElementById("cat").value;
				var email = document.getElementById("email").value;
				var loc = document.getElementById("loc").value;
				var price = document.getElementById("price").value;
				var city = document.getElementById("city").value;

				var test=[{name:name,category:category,loc:loc,price:price,city:city}];
	
				localStorage.setItem(id, JSON.stringify(test));
			      window.content.localStorage[key]=JSON.stringify(id);
				var retrievedMovieArray = JSON.parse(parseInt(window.content.localStorage[key]),localStorage.getItem(id));
				for (var p in retrievedMovieArray)  {


				
							
						document.write(retrievedMovieArray[p].name);
						id++;
						}
					

	}

