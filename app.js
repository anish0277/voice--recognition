const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function (){
    console.log("Voice recognition active");
}
recognition.onresult = function (event) {
    const current = event.resultIndex;
    let transcript = event.results[current][0].transcript.toLowerCase().trim();

    if (transcript.includes("hello ANSHIL")) {
        readOut("Hello sir! How can I assist you today?");
    } 
    else if (transcript.includes("open youtube")){
        readOut("Sure, sir. Opening YouTube for you.");
        window.open("https://www.youtube.com");
    } 
    else if (transcript.includes("open google")){
        readOut("Sure, sir. Opening Google for you.");
        window.open("https://www.google.com");
    } 
    else if (transcript.includes("introduce yourself") || transcript.includes("tell me about yourself")) {
        readOut("Hello, sir! I am ANSHIL, your voice assistant. Version 2.1, crafted by Anish Sharma, Sahil Kondal, and Mohd Ashad.");
    } 
    else if (transcript.includes("search on google")) {
        const query = transcript.replace("search on google", "").trim();
        readOut("Let me search " + query + " for you on Google.");
        window.open("https://www.google.com/search?q=" + encodeURIComponent(query));
    } 
    else if (transcript.includes("search on youtube")) {
        const query = transcript.replace("search on youtube", "").trim();
        readOut("Let me search " + query + " for you on YouTube.");
        window.open("https://www.youtube.com/results?search_query=" + encodeURIComponent(query));
    } 
    else if (transcript.includes("how are you")) {
        readOut("Thank you for asking, sir. I'm just a program, but I'm here to assist you.");
    }
}
recognition.onend = function (){
    console.log("Voice recognition deactivated");
}
startBtn.addEventListener("click", () => {
    recognition.start();
});
stopBtn.addEventListener("click", () => {
    recognition.stop();
});
function readOut(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("Speaking out");
}
speakBtn.addEventListener("click", () => {
    readOut("Hello, sir! I am ANSHIL, your voice assistant. How may I assist you today?");
});
