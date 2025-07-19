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
     const recogniseVoice = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
     recogniseVoice.lang = "en-US";
     recogniseVoice.start();
     document.getElementById("status").textContent = "Listening for speech to navigate User interface...";

     recogniseVoice.onresult = (event) => {
       const command = event.results[0][0].transcript.toLowerCase();
       document.getElementById("status").textContent = `Heard: ${command}`;
       
       if (command.includes("profile")) {
         speak("Navigating to profile. Step 1: Find the profile icon at the bottom in the left panel. Step 2: Click to open your profile.");
       } else if (command.includes("post")) {
         speak("Creating a post. Step 1: Find the plus icon in the center. Step 2: Click to start a new post.");
       } else {
         speak("Command not recognized. Try saying 'navigate to profile' or 'create post'.");
       }
     };

     recogniseVoice.onerror = () => {
       document.getElementById("status").textContent = "Failed to listen to voice clearly. Try again.";
       speak("Failed to listen to voice clearly. Please try again.");
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