
(function(window){

	var helloSpeaker={};

helloSpeaker.speak =function speak(name){
	var speakWord = "Hello";
	helloSpeaker.name = name;
	console.log(speakWord+ " "+ helloSpeaker.name);
}
window.helloSpeaker = helloSpeaker;
  
})(window);


	


