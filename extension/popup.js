// Listen for site detection from content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "siteDetected") {
        document.getElementById("status").textContent = `Detected: ${message.site}`;
        speak(`Illuminate is ready on ${message.site}. Click a button to start.`);
    }
});
// toggling high contrast for clearly viewing the app
   document.getElementById("contrast").addEventListener("click", () => {
     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
       chrome.tabs.sendMessage(tabs[0].id, { action: "toggleContrast" });
       document.getElementById("status").textContent = "Contrast mode toggled!";
       speak("High-contrast mode activated successfully.");
     });
   });

   //basic voice step by step navigation using chrome's inbuilt browser speeche recognisseVoice: webkitSpeechRecognition
document.getElementById("voiceNavigation").addEventListener("click", () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        document.getElementById("status").textContent = "Microphone not supported.";
        speak("Microphone not supported on this device.");
        return;
    }
    const recogniseVoice = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recogniseVoice.lang = "en-US";
    recogniseVoice.start();
    document.getElementById("status").textContent = "Listening for navigation command...";

    recogniseVoice.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        document.getElementById("status").textContent = `Heard: ${command}`;
        
        if (command.includes("profile")) {
            speak("Navigating to profile. Step 1: Find the profile icon at the bottom right. Step 2: Click to open your profile.");
        } else if (command.includes("post")) {
            speak("Creating a post. Step 1: Find the plus icon in the center. Step 2: Click to start a new post.");
        } else {
            speak("Command not recognized. Try saying 'navigate to profile' or 'create post'.");
        }
    };

    recogniseVoice.onerror = (event) => {
        document.getElementById("status").textContent = "Voice recognition error. Ensure microphone permissions are granted.";
        speak("Voice recognition error. Please check microphone permissions and try again.");
    };
});

   // Helping the visually impaired person to make a resume
   document.getElementById("resumeGeneration").addEventListener("click", () => {
     const recogniseVoice = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
     recogniseVoice.lang = "en-US";
     recogniseVoice.start();
     document.getElementById("status").textContent = "Listening for resume details...";

     recogniseVoice.onresult = (event) => {
       const input = event.results[0][0].transcript.toLowerCase();
       document.getElementById("status").textContent = `Heard: ${input}`;
       let summary = "Professional seeking opportunities.";
       
       if (input.includes("developer")) {
         summary = "Skilled developer proficient in " + (input.includes("python") ? "Python" : "various technologies") + " seeking programming roles roles to improve your systems";
       } else if (input.includes("designer")) {
         summary = "Creative designer with experience in UI/UX seeking design opportunities.";
       }
       else if (input.includes("java")) {
         summary = "Creative designer with experience in Java seeking jave development opportunities, And is capable to develop your springboot applications";
       }
       
       speak("Successfully generated your resume summary: " + summary);
       document.getElementById("status").textContent = `Resume Summary: ${summary}`;
     };

     recogniseVoice.onerror = () => {
       document.getElementById("status").textContent = "Error with resume input. Try again.";
       speak("Error with resume input. Please try again.");
     };
   });

   // Scheduling for posting on social media
   document.getElementById("post").addEventListener("click", () => {
     const recogniseVoice = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
     recogniseVoice.lang = "en-US";
     recogniseVoice.start();
     document.getElementById("status").textContent = "Listening for post scheduling command...";

     recogniseVoice.onresult = (event) => {
       const command = event.results[0][0].transcript.toLowerCase();
       document.getElementById("status").textContent = `Heard: ${command}`;
       
       if (command.includes("schedule") || command.includes("post")) {
         speak("Post scheduled. Your post is set for tomorrow at 10 AM on Instagram.");
       } else {
         speak("Command not recognized. Try saying 'schedule post tomorrow'.");
       }
     };

     recogniseVoice.onerror = () => {
       document.getElementById("status").textContent = "Error with scheduling command. Try again.";
       speak("Error with scheduling command. Please try again.");
     };
   });

   // Text-to-speech function
   function speak(text) {
     const utterance = new SpeechSynthesisUtterance(text);
     utterance.lang = "en-US";
     window.speechSynthesis.speak(utterance);
   }