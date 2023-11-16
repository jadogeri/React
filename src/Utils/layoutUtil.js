export const myFunction = function() {
    let x = document.getElementById("navDemo");
    if (x.classNameName.indexOf("w3-show") == -1) {
      x.classNameName += " w3-show";
    } else { 
      x.classNameName = x.classNameName.replace(" w3-show", "");
    }
  }
  