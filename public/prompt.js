function initialize() {
	var mapCanvas = document.getElementById('map');
    var mapOptions = {
          center: {lat:42.212, lng:-83.353},

          zoom: 13
        }
    mapholder = new google.maps.Map(mapCanvas, mapOptions);
}

var mapholder; 


//  $(document).ready(function () {
//         $("#name").keypress(
//             function (event) {
//                 if (event.which == 13) {
//                         var usersName = document.getElementById("name");
//         				var displayBox = document.getElementById("displayName");
//      				    usersName.style.display = "none";
         			   
//         			    displayBox.style.display = "inline";
                    
//                     }
//                }
//             );
        
// });



