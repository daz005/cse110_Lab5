// explore.js

window.addEventListener('DOMContentLoaded', init);

var explore_img;
var explore_button;

function init() {
  
  populateVoiceList();
  
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) 
  {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const nodeList = document.getElementById("explore").childNodes
  for (let i = 0; i < nodeList.length; i++) 
  {
    if (nodeList[i].nodeName == "IMG")
    {
      explore_img = nodeList[i];
    }
    else if (nodeList[i].nodeName == "BUTTON")
    {
      explore_button = nodeList[i];
    }
  }

  explore_button.addEventListener("click", on_play)
  {

  }


}

function on_play() {
  console.log("on_play");
  
  const inputtext= document.getElementById("text-to-speak").value;
  //console.log(inputtext);

  const selectedOption = document.getElementById("voice-select").selectedOptions[0].getAttribute('data-name');
  //console.log(selectedOption);

  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(inputtext);
  
  // utterThis.addEventListener('end', (event) => {
  //   console.log("utterThis.onend");
  //   explore_img.src="assets/images/smiling.png";
  //   document.getElementById("text-to-speak").value="";
  // });

  // utterThis.addEventListener('start', (event) => {
  //   console.log("utterThis.onstart");
  //   explore_img.src="assets/images/smiling-open.png";
  // });
  
  // utterThis.addEventListener('error', (event) => { 
  //   console.log("utterThis.error");
  //   explore_img.src="assets/images/smiling.png";
  //   document.getElementById("text-to-speak").value="";
  // });

  const voices = speechSynthesis.getVoices();
  for (let i = 0; i < voices.length ; i++) 
  {
    if (voices[i].name === selectedOption) 
    {
      utterThis.voice = voices[i];
      console.log("voices[i]=");
      console.log(voices[i]);
    }
  }

  utterThis.volume = 0.5;
  synth.speak(utterThis);
}

function populateVoiceList() 
{
  if (typeof speechSynthesis === 'undefined') 
  {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) 
  {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) 
    {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}


