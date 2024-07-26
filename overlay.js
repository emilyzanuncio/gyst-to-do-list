/*------------------- TOP OVERLAY MENU -------------------*/
function openNav() {
  document.getElementById("navScreen").style.height = "100%";

  document.getElementById("link").style.transform = "translateY(-40px)";
  document.getElementById("mt1").style.transform = "rotate(20deg)";
  document.getElementById("mt2").style.transform = "rotate(0)";
}

function closeNav() {
  document.getElementById("navScreen").style.height = "0%";
  document.getElementById("link").style.transform = "translateY(0px)";
  document.getElementById("mt1").style.transform = "rotate(0)";
  document.getElementById("mt2").style.transform = "rotate(20deg)";
}

/*------------------- TOP OVERLAY MENU -------------------*/
function openCfg() {
  document.getElementById("sideConfig").style.width = "25%";
  document.getElementById("overlay").style.display = "block";
  document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}


/*function closeCfg() {
  document.getElementById("sideConfig").style.width = "0";
  document.getElementById("overlay").style.display = "none";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
}*/


function closeCfg() {
  document.getElementById("sideConfig").style.width = "0";
  document.getElementById("overlay").style.display = "none";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
}

window.addEventListener('click', function(e){
  // If config is open and you click outside, execute closeCfg()
  if(document.getElementById("sideConfig").style.width = "25%" && 
  (!document.getElementById("sideConfig").contains(e.target)) && 
  (!document.getElementById("icon").contains(e.target))){
    closeCfg();
  }
})

/* */