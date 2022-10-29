// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  document.getElementById("horn-select").addEventListener("change", on_horn_select_changed)
  {

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
