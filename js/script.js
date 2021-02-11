// Scroll Header fixed
window.onscroll = function() { scrollWindow() };

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollWindow() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("home").classList.add("sticky");
  } else {
    document.getElementById("home").classList.remove("sticky");
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//  Map from Google API 
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    // Get latitude and longitude Location
    center: { lat: 14.062359, lng: 100.606918 },
    zoom: 10,
    disableDefaultUI: true,
  });
}