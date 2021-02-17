// Scroll Header fixed
window.onscroll = function() { scrollWindow() };

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollWindow() {
  if ((document.body.scrollTop || document.documentElement.scrollTop) >= 50) {
    document.getElementById("home").classList.add("sticky");
    document.getElementById("btt").style.display = "block";
  } else if ((document.body.scrollTop || document.documentElement.scrollTop) === 50){
    document.getElementById("home").classList.add("sticky");
    document.getElementById("btt").style.display = "block";
  } else if ((document.getElementById("btt").pageYOffset || document.getElementById("btt").pageYOffset) <= 145){
    document.getElementById("home").classList.remove("sticky");
    document.getElementById("btt").style.display = "none";
  } else {
    document.getElementById("home").classList.remove("sticky");
    document.getElementById("btt").style.display = "none";
  } 
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//  Map from Google API 
/*function initMap() {
  var map = new google.maps.Map(document.getElementById("map_main"), {
    / Get latitude and longitude Location
    center: { lat: 14.062359, lng: 100.606918 },
    zoom: 10,
    disableDefaultUI: true,
  });
  / The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}*/

$('#pills-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})


// Detect request animation frame
var scroll = window.requestAnimationFrame ||
// IE Fallback
function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

$(function(){
  $(".link-map").click(function(){
    $($(this).attr('href')).scrollTop(-500);
  });
  $('.link-map').tooltip(options);
});
