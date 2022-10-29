// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  document.getElementById("horn-select").addEventListener("change", on_horn_select_changed)
  {

  };

  document.getElementById("volume").addEventListener("change", on_volum_changed)
  {

  }

}
function on_volum_changed() {
  //console.log("on_volum_changed");
  var x = document.getElementById("volume").value;
  //console.log(x);
  
  const nodeList = document.getElementById("volume-controls").childNodes
  for (let i = 0; i < nodeList.length; i++) 
  {
    if (nodeList[i].nodeName == "IMG")
    {
      if(x == 0)
      { 
          nodeList[i].src="assets/icons/volume-level-0.svg";
      }
      else if( x < 33 )
      {
        nodeList[i].src="assets/icons/volume-level-1.svg";
      }
      else if(x < 67 )
      {
        nodeList[i].src="assets/icons/volume-level-2.svg";
      }else
      {
        nodeList[i].src="assets/icons/volume-level-3.svg";
      }
    }
  }


}

function on_horn_select_changed() {
  //console.log("on_horn_select_changed");
  var x = document.getElementById("horn-select").value;
  //console.log(x);
  const nodeList = document.getElementById("expose").childNodes
  for (let i = 0; i < nodeList.length; i++) 
  {
    if (nodeList[i].nodeName == "IMG")
    {
      if(x == "air-horn")
      { 
          nodeList[i].src="assets/images/air-horn.svg";
      }
      else if(x == "car-horn")
      {
        nodeList[i].src="assets/images/car-horn.svg";
      }
      else if(x == "party-horn")
      {
        nodeList[i].src="assets/images/party-horn.svg";
      }else
      {
        nodeList[i].src="assets/images/no-image.png";
      }
    }
  }
}
