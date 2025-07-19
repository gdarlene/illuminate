// function speak(text) {
// const synthesize = window.speechSynthesis;
// const utterance = new SpeechSynthesisUtterance(text);
// utterance.rate = 1;
// utterance.pitch = 1;
// synthesize.speak(utterance);
// }

// // Find and read out Instagram captions
// function getCaptions() {
// const captions = document.querySelectorAll('div[role="button"] > span, h1, h2, h3');

// if (!captions.length) {
// console.log("No captions found.");
// return;
// }

// let combinedText = "";
// captions.forEach(c => {
// if (c.innerText) combinedText += c.innerText + ". ";
// });

// if (combinedText) {
// console.log("Speaking Instagram content...");
// speak(combinedText);
// } else {
// console.log("No readable text found.");
// }
// }

// // delaying for 3 secs for the browser to load and then re running
// setTimeout(() => {
// getCaptions();
// }, 3000);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
     if (message.action === "contrast") {
       document.body.style.filter = document.body.style.filter === "contrast(200%)" ? "" : "contrast(200%)";
       document.body.style.backgroundColor = document.body.style.backgroundColor === "#000000" ? "" : "#000000";
       document.body.style.color = document.body.style.color === "#FFFFFF" ? "" : "#FFFFFF";
       document.querySelectorAll("button, a").forEach(el => {
         el.style.border = el.style.border === "2px solid #FFC107" ? "" : "2px solid #FFC107";
       });
     }
   });