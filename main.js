Webcam.attach;
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
   document.getElementById("textbox").innerHTML="";
   recognition.start();
}

   recognition.onresult=function (event)
   {
     console.log(event);
   
     var Content=event.results[0][0].transcript;
     console.log(Content);
     if(Content=="take my selfie")
     {
      console.log("taking selfie ---");
      speak();
     }
     document.getElementById("textbox").innerHTML=Content;
   }

 function speak()
 {
   var synth=window.speechSynthesis;
   speak_data="taking your selfie in 5 seconds";
   var utterThis=new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);
   Webcam.attach(camera);
 }  

Webcam.set(
   {
      width:360,
      height:250,
      image_format:'jpeg',
      jpeg_quality:90
   }
)

camera=document.getElementById("camera");
function take_snapshot()
{
   console.log(img_id)
    Webcam.snap(function(data_uri)
{
  if(img_id=="bridge.jpg")
  {
    document.getElementById("result1").innerHTML='<img_id="bridge.jpg" scr="'+data_uri+'"/>';
  }

  if(img_id=="sun.jpg")
  {
    document.getElementById("result2").innerHTML='<img_id="sun.jpg" scr="'+data_uri+'"/>';
  }

  if(img_id=="moon.jpg")
  {
    document.getElementById("result3").innerHTML='<img_id="moon.jpg" scr="'+data_uri+'"/>';
  }
}    
)};


setTimeout(function()
{
  img_id="bridge.jpg";
  take_snapshot();
  speak_data="Taking your next selfie in 10 seconds";
  var utterThis=new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
},10000)

setTimeout(function()
{
  img_id="sun.jpg";
  take_snapshot();
  speak_data="Taking your next selfie in 10 seconds";
  var utterThis=new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
},10000)

setTimeout(function()
{
  img_id="moon.jpg";
  take_snapshot();
  speak_data="Taking your next selfie in 10 seconds";
  var utterThis=new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
},10000)


function save()
{
  link=document.getElementById("link");
  image=document.getElementById("selfie").src;
  link.href=image;
  link.click();
}