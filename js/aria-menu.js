function whosFocused() {
  var curElement = document.activeElement;
  //localStorage.setItem('curFocus',curElement);
  //console.log("currently selected:" + curElement);
  //console.log(curElement.nextSibling.nextSibling);
  //console.log(curElement.nextSibling.nextSibling.className);
  if(typeof(curElement.nextSibling) != 'undefined' && curElement.nextSibling != null){
    var nextDude = curElement.nextSibling.nextSibling;
    if (nextDude.className == "aria-subnav") {
      //clear any open subnavs
      //clearSubNavOpen();

      //force open subnav
      nextDude.className = "aria-subnav open";
      window.setTimeout(function (){
          nextDude.focus();
      }, 0);
    }
  } else {
    //clearSubNavOpen();
  }
}

function clearSubNavOpen() {
  var findSubOpen = document.getElementsByClassName("aria-subnav open");
  var runClearOpen = Array.prototype.filter.call(findSubOpen, function(clearThisUl) {
    clearThisUl.className = "aria-subnav";
  });
}

document.getElementById("aria-navbar").addEventListener("keydown", whosFocused, false);
document.getElementById("nextNav").addEventListener("focus", clearSubNavOpen, false);
document.getElementById("main").addEventListener("focus", clearSubNavOpen, false);
//just incase your moving your mouse too. its good for everyone
document.getElementById("aria-navbar").addEventListener("mouseleave", clearSubNavOpen, false);
