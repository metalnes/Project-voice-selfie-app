    var SpeechRecognition=window.webkitSpeechRecognition;
  var recognition=new SpeechRecognition()  

  function start(){
     document.getElementById("SpeechText").innerHTML="Pls Speak System is listening"
     recognition.start()
  }
recognition.onresult=function(event){
    console.log(event)
    content=event.results[0][0].transcript
document.getElementById("Speechtext").innerHTML=content
if(content=="take my selfie"||content=="take my selfie"||content=="selfie")
speak()

}
function speak(){
    var synth=window.speechSynthesis
    setTimeout( function(){
        img_id="selfie1"
        takesnapshot()
        speak_data="Taking your selfie in 10 seconds"
        var utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis)
    
    
    },5000)




}
