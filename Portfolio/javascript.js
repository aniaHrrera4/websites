function alert1(){
	alert("WELCOME TO MY WEBSITE");
}
	function clock(){
           //****************************************************************************************|
           //		Defines variables
           //****************************************************************************************|
            var total="<br/>";
            var time = new Date();
           //****************************************************************************************|
           //		Function gets Number of day of week then assigns Text for Day.
           //****************************************************************************************|
				   if (time.getDay()==0) { total = total + "Sunday" ;}
				   else if (time.getDay()==1) {total= total+ "Monday";}
				   else if (time.getDay()==2) {total= total+ " Tuesday";}
				   else if (time.getDay()==3) {total= total+ " Wednesday";}
				   else if (time.getDay()==4) {total= total+ " Thursday";}
				   else if (time.getDay()==5) {total= total+ " Friday";}
				   else  {total= total+ " Saturday";}
		   
					total=total+", "

           //****************************************************************************************|
           //		Function gets Number of month of year then assigns Text for Month
           //		then adds it to total
           //****************************************************************************************|
                   
                    if (time.getMonth()==0){total= total + "January";}
                    else if (time.getMonth()==1){total= total+ "Febuary";}
                    else if (time.getMonth()==2) {total= total+ "March";}
                    else if (time.getMonth()==3) {total= total+ "April";}
                    else if (time.getMonth()==4) {total= total+ "May";}
                    else if (time.getMonth()==5) {total= total+ "June";}
                    else if (time.getMonth()==6) {total= total+ "July";}
                    else if (time.getMonth()==7) {total= total+ "August";}
                    else if (time.getMonth()==8) {total= total+ "September";}
                    else if (time.getMonth()==9) {total= total+ "October";}
                    else if (time.getMonth()==10) {total= total+ "November";}
                    else {total= total+ "December";}
					total=total+" "
					
					{ total=total+ time.getDate()+ " ";}

            //****************************************************************************************|
            //		Function gets numberic year and adds it to total
            //****************************************************************************************|
                    {total= total+""+ time.getFullYear() +"<br/> " ;}
					
					
					if (time.getHours()==0)
							{ time.getHours()=12;}
							
					var hours=time.getHours()
					var hour=parseInt(hours)-12;
						  
							if (time.getHours()>=12)
								{total=total+hour+":";}
								
							if (time.getHours()<=12)
								{total=total+hours+":";}
                  
							if (time.getMinutes()<10)
									total=total+ "0"+time.getMinutes()+":";
							else {total=total+time.getMinutes()+":";}

							if (time.getSeconds()<10)
									 {total=total+"0"+time.getSeconds();}
							else{total= total+time.getSeconds();}	
				

							if (time.getHours()>=12)
								total= total+" P.M.";
							else
								total= total+" A.M.";

							document.getElementById("showinfo").innerHTML=total;
							setTimeout("clock()",1000);
		    	
}


function bigImg1(x) {
    x.style.height = "400px";
    x.style.width = "310px";
}
function normalImg1(x) {
    x.style.height = "350px";
    x.style.width = "260px";
}

function bigImg2(x) {
    x.style.height = "250px";
    x.style.width = "250px";
}
function normalImg2(x) {
    x.style.height = "200px";
    x.style.width = "200px";
}

function bigImg3(x) {
    x.style.height = "210px";
    x.style.width = "350px";
}
function normalImg3(x) {
    x.style.height = "160px";
    x.style.width = "300px";
}




var slideIndex = 0;
showSlides();
function showSlides() {
	
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}