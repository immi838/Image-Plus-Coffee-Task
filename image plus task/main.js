
// used google maps js api
// Initialize and add the map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {lat:51.5260, lng:15.2551},
    mapId: '1617256eb1b4d6b'
  });


//   how to add marker to map
//   The marker, positioned at X
//   const marker = new google.maps.Marker({
//     position: X,
//     map: map,
//   });
}


//info required to make marker
//Name
//long/lat
//image url (marker image)
//scaled size width,height


//store into array throught the api call
// const markers = [
//     [

//     ]

// ]




// had difficulty parsing the JSON from the api call, so wasnt able to get out the data I wanted
// was only able to reach the point of using fetch to console.log the data 
// data required for setting a marker would need to be drawn out, stored into array and looped through to place the markers


async function fetchData() {
     const response = await fetch('http://coffeedrop.staging2.image-plus.co.uk/api/locations?page=2');
      // waits until the request completes...
      var data = await response.json();
      console.log(data);
    
     }

     fetchData()
   
