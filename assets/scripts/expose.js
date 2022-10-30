// expose.js

window.addEventListener('DOMContentLoaded', init);


var expose_img;
var expose_audio;
var expose_button;

function init() {
  // TODO


  const nodeList = document.getElementById("expose").childNodes
  for (let i = 0; i < nodeList.length; i++) 
  {
    if (nodeList[i].nodeName == "IMG")
    {
      expose_img = nodeList[i];
    }
    else if (nodeList[i].nodeName == "AUDIO")
    {
      expose_audio = nodeList[i];
    }
    else if (nodeList[i].nodeName == "BUTTON")
    {
      expose_button = nodeList[i];
    }
  }

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

  if(x == "air-horn")
  { 
    expose_img.src="assets/images/air-horn.svg";
    expose_audio.src="assets/audio/air-horn.mp3";
  }
  else if(x == "car-horn")
  {
    expose_img.src="assets/images/car-horn.svg";
    expose_audio.src="assets/audio/car-horn.mp3";
  }
  else if(x == "party-horn")
  {
    expose_img.src="assets/images/party-horn.svg";
    expose_audio.src="assets/audio/party-horn.mp3";
  }else
  {
    expose_img.src="assets/images/no-image.png";
    expose_audio.src="";
  }
}
