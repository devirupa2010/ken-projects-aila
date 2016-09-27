(function(window){

	var byeSpeaker={};

byeSpeaker.speak =function speak(name){
	var speakWord = "good bye";
	byeSpeaker.name = name;
	console.log(speakWord+ " "+byeSpeaker.name);
}
window.byeSpeaker = byeSpeaker;
  
})(window);