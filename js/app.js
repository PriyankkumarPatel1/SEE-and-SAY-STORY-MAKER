// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

// textToSpeak variable of 5 array to create new sentence from different element of 5 arrays
var textToSpeak = new Array;

// querySelectors of html elements to grab event listner
var nounButton = document.querySelector('#nounButton');
var verbButton = document.querySelector('#verbButton');
var adjectiveButton = document.querySelector('#adjectiveButton');
var noun2Button = document.querySelector('#noun2Button');
var placeButton = document.querySelector('#placeButton');
var output = document.querySelector('p');

var speakButton = document.querySelector('#speakButton');
var randomSpeakButton = document.querySelector('#randomSpeakButton');
var resetButton = document.querySelector('#resetButton');

// 5 array to create manual or random story sentence.
var nounArray = ['the turkey ', 'mom ', 'dad ', 'the dog ', 'my teacher ', 'the elephant ', 'the cat '];
var verbArray = ['sat on ', 'ate ', 'danced with ', 'saw ', 'doesn\'t like ', 'kissed '];
var adjectiveArray = ['a funny ', 'a scary ', 'a goofy ', 'a slimy ', 'a barking ', 'a fat '];
var noun2Array = ['goat ', 'monkey ', 'fish ', 'cow ', 'frog ', 'bug ', 'worm '];
var placeArray = ['on the moon ', 'on the chair ', 'in my spaghetti ', 'in my soup ', 'on the grass ', 'in my shoes '];

// randomSentenceSpeak var to store random generated sentence.
var randomSentenceSpeak = '';

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// function to get random element from array
function randomElementSelector(array){
	// var randomElement to store value of random element of array.
	randomElement = array[Math.floor(Math.random()*array.length)]
	// output to console window.
	console.log('The Random element from ' + array + ' is ' + randomElement);
	//this.randomSentenceSpeak += randomElement + '  ';
	
	return randomElement;
}

// function to go through each elements of each array to generate sentence.

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the string

// onclick event listner for all buttons
nounButton.onclick = function(){
	// change first element of textToSpeak array
	textToSpeak[0] = randomElementSelector(nounArray);
	speakNow(textToSpeak[0]);
}

verbButton.onclick = function(){
	// change second element of textToSpeak array
	textToSpeak[1] = randomElementSelector(verbArray);
	speakNow(textToSpeak[1]);
}

adjectiveButton.onclick = function(){
	// change third element of textToSpeak array
	textToSpeak[2] = randomElementSelector(adjectiveArray);
	speakNow(textToSpeak[2]);
}

noun2Button.onclick = function(){
	// change fourth element of textToSpeak array
	textToSpeak[3] = randomElementSelector(noun2Array);
	speakNow(textToSpeak[3]);
}

placeButton.onclick = function(){
	// change fifth element of textToSpeak array
	textToSpeak[4] = randomElementSelector(placeArray);
	speakNow(textToSpeak[4]);
}

speakButton.onclick = function() {

	// if the textToSpeak array is empty then msg will speak and outputed on display
	if(textToSpeak.length == 0){
		var msg = "First of all you have to create story by clicking buttons or just listen a random story";
		output.textContent = "";
		output.textContent = msg;
		console.log(msg);
		speakNow(msg);	
	}
	else{
		speakNow(textToSpeak);
		output.textContent = "";
		output.textContent = textToSpeak;
		console.log(textToSpeak);
	}
}

// onclick listener for randomSpeakButton button
// this will create randomSentenceSpeak sentence by adding random elements of different array to it.
randomSpeakButton.onclick = function(){
	randomSentenceSpeak += randomElementSelector(nounArray);
	randomSentenceSpeak += randomElementSelector(verbArray);
	randomSentenceSpeak += randomElementSelector(adjectiveArray);
	randomSentenceSpeak += randomElementSelector(noun2Array);
	randomSentenceSpeak += randomElementSelector(placeArray);
	// speaks the randomSentenceSpeak sentence
	speakNow(randomSentenceSpeak);
	// output on display of randomSentenceSpeak sentence
	output.textContent = randomSentenceSpeak;
	// allows Script to create new random sentence after speaking of this sentence.
	randomSentenceSpeak = '';
}

// link to main page on clicking reset button to reset everything and restart
resetButton.onclick = function(){
	location.href = "index.html";
}
