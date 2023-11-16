import React from 'react'

var myIndex = 0;
carousel();

function carousel() {
  let i;
  var x = document.getElementsByclassNameName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

export default function Carousel() {
  return (
    <>
    {/* <!-- Automatic Slideshow Images --> */}
  <div className="mySlides w3-display-container w3-center">
    <img src="/w3images/la.jpg" style="width:100%" />
    <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
      <h3>Los Angeles</h3>
      <p><b>We had the best time playing at Venice Beach!</b></p>   
    </div>
  </div>
  <div className="mySlides w3-display-container w3-center">
    <img src="/w3images/ny.jpg" style="width:100%" />
    <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
      <h3>New York</h3>
      <p><b>The atmosphere in New York is lorem ipsum.</b></p>    
    </div>
  </div>
  <div className="mySlides w3-display-container w3-center">
    <img src="/w3images/chicago.jpg" style="width:100%" />
    <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
      <h3>Chicago</h3>
      <p><b>Thank you, Chicago - A night we won't forget.</b></p>    
    </div>
  </div>

    </>
  )
}
