
// First section creates 256 div grid, ID's it, and puts a number in it.

/*var myDivs; 

 for (var i = 0; i<256; i++) {

myDivs = document.createElement('div');

myDivs.id = "squares";

myDivs.innerHTML = i+1;

document.body.appendChild(myDivs);
}*/

// next section 

$(window).bind("load",function() {

var resolutionDefault = 16;


	function buildDefault () { 
		var tbl = document.createElement("table");
		tbl.id="table";


		for (var i = 0; i<resolutionDefault; i++) {

			var r=tbl.insertRow(i);
			for ( var j = 0; j<resolutionDefault; j++)  {
				var c=r.insertCell(j);
				c.id = "cells";

				var cellDiv = document.createElement('div');
				cellDiv.id = "squares2";
				c.appendChild(cellDiv);
				//cellDiv.innerHTML = j + 1;
			}
		}
		$('#container').append(tbl); // puts the input variable into the selector 

		 
		$("div #squares2").mouseenter(function() { 
			// $(this).css("background-color",'rgba(0,0,0,.1'); // jquery sets alpha but not the same as opacity 
			
			this.style.backgroundColor = "black";  // changes opacity by .1
			if ( this.style.opacity == "") { 
				this.style.opacity = .1; 
			}

			else if (this.style.opacity<1){ 
				x=this.style.opacity;
				y=parseFloat(x);
				y+=.1; 
				this.style.opacity=y;
			}
						 
            //var number=Math.floor(Math.random()*16777215); /// random colors
			//var hexString = number.toString(16);
			//hexString = hexString.replace('','#');
			//$(this).css("background-color",hexString});


        });




					
          


		document.getElementById("clickMe").onclick = function() {
			
			


			var lastRes = resolutionDefault;
    		resolutionDefault=prompt( "Increase resolution with a higher number of squares");
			
																		
			
			if(resolutionDefault !== null) {
				$('#container').empty();
				buildDefault();

			}
			


    	 };


	};  // end of default builder function 
        
buildDefault();

});  //wrapper function to .js from loading initilally 



  
