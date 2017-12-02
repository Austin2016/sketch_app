$(window).bind("load",function() {

var resolution = 16;
var state ="random";
var state2=1; // can be black or random  

	function buildDefault () { 
		var tbl = document.createElement("table");
		tbl.id="table";


		for (var i = 0; i<resolution; i++) {

			var r=tbl.insertRow(i);
			for ( var j = 0; j<resolution; j++)  {
				var c=r.insertCell(j);
				c.id = "cells";

				var cellDiv = document.createElement('div');
				cellDiv.id = "squares2";
				c.appendChild(cellDiv);
				//cellDiv.innerHTML = j + 1;
			}
		}
		$('#container').append(tbl); // puts the input variable into the selector 

		 
		$('div #squares2').mouseenter(function() { 
		
						 
            if (state == "random") { 

         		this.style.backgroundColor = getRandomColor();

         		

         	}
	            
	        else { 

	        	this.style.backgroundColor = state;

	        	
	        }


            if (state2==1)  {
	            if ( this.style.opacity == "") { 
					this.style.opacity = .1; 
			    }

			    else if (this.style.opacity<1){ 
					x=this.style.opacity;
					y=parseFloat(x);    // converts x from string to double
					y+=.1; 
					this.style.opacity=y;
			    } 
			}    
	        
	        else {

	        		this.style.opacity=1;

	        }	



        });




					
          


		document.getElementById("clickMe").onclick = function() {
			
			


			var lastRes = resolution;
    		resolution=prompt( "Increase resolution with a higher number of squares");
			
																		
			
			if(resolution !== null) {
				$('#container').empty();
				buildDefault();

			}
			


    	 };


	};  // end of default builder function 
        
buildDefault();

//Events and Functions 



            document.getElementById("clickMe2").onclick = function() { 

            	state="black";



            }

            document.getElementById("clickMe3").onclick = function() { 

            	state="random";



            }

            document.getElementById("clickMe4").onclick = function() { 


 				if (document.getElementById("clickMe4").value=="shading on") {
            		document.getElementById("clickMe4").value ="shading off";
            		}
            	else {
            		document.getElementById("clickMe4").value="shading on";
            	}

            	if (state2==1) { 
            		state2=0;  
            	} 
            	else {
            		state2=1;
            	}




            }
             
			function getRandomColor () { 
            	var number=Math.floor(Math.random()*16777215); /// random colors
				var hexString = number.toString(16);
				hexString = hexString.replace('','#');
				return hexString; 
			}


});  //wrapper function to .js from loading initilally 

	

  
